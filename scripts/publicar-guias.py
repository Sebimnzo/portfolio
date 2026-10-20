#!/usr/bin/env python3
"""Genera las páginas de las guías a partir de los artículos revisados.

Lee mansalva-serp-engine/output/articles/*.meta.json (solo reviewed: true),
convierte cada Markdown a JSX y escribe:
  - app/guias/<slug>/page.tsx   (una por artículo)
  - lib/guides.ts               (la lista `guides` con todas las guías)

Uso: python3 scripts/publicar-guias.py
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES = ROOT.parent / "mansalva-serp-engine" / "output" / "articles"

# Guía escrita a mano antes del generador; sigue en la lista, primera.
LED_GUIDE = {
    "slug": "resolucion-pantalla-led",
    "path": "/guias/resolucion-pantalla-led",
    "title": "Qué pixel pitch elegir para tu stand y cómo calcular la resolución de la pantalla LED",
    "seoTitle": "Pixel pitch para stands: qué elegir y calculadora — Mansalva",
    "description": "Qué es el pixel pitch, cuál conviene para un stand según la distancia del público y cómo calcular la resolución de la pantalla LED. Con calculadora y tabla.",
    "published": "2026-10-14",
    "updated": "2026-10-20",
    "readingMinutes": 4,
    "category": "Pantallas LED",
}

CATEGORY = {
    "Pantallas LED": [
        "resolucion-de-pantalla-led-para-stand",
        "formato-de-video-para-pantalla-led-de-stand",
        "como-usar-una-pantalla-led-en-un-stand",
        "contenido-para-pantallas-led-en-eventos",
        "ideas-para-pantallas-en-stands",
    ],
    "Videowalls": ["como-preparar-un-video-para-videowall", "videowall-para-stand-de-feria"],
    "Tótems": ["medidas-de-video-para-totem-vertical", "video-vertical-para-pantalla-de-feria"],
    "Video para stands": [
        "video-para-stand-de-feria",
        "duracion-ideal-de-un-video-para-stand",
        "videos-para-ferias-de-negocios",
        "animacion-en-loop-sin-sonido-para-eventos",
        "motion-graphics-para-eventos-corporativos",
        "que-proyectar-en-un-stand-de-feria",
    ],
    "Stands de feria": [
        "como-atraer-mas-gente-a-un-stand-en-una-feria",
        "como-captar-leads-en-ferias-comerciales",
        "como-hacer-que-la-gente-se-detenga-en-un-stand",
        "errores-comunes-en-stands-de-ferias",
        "estrategias-para-stands-con-poco-espacio",
        "ideas-para-stands-comerciales-que-destaquen",
        "por-que-nadie-se-detiene-en-mi-stand",
    ],
}
CATEGORY_BY_SLUG = {s: c for c, slugs in CATEGORY.items() for s in slugs}

CTA_HEADING = "¿Tenés una feria en el calendario?"

# ---------- inline ----------

ESC = {"&": "&amp;", "<": "&lt;", ">": "&gt;", "{": "&#123;", "}": "&#125;", '"': "&quot;", "'": "&#39;"}


def esc(text: str) -> str:
    return "".join(ESC.get(c, c) for c in text)


LINK_RE = re.compile(r"\[([^\]]*)\]\(([^)\s]+)\)")


def inline(text: str, ctx: dict) -> str:
    """Convierte negritas y enlaces a JSX; el resto va escapado."""
    out = []
    i = 0
    while i < len(text):
        b = text.find("**", i)
        m = LINK_RE.search(text, i)
        l = m.start() if m else -1
        if b == -1 and l == -1:
            out.append(esc(text[i:]))
            break
        if b != -1 and (l == -1 or b < l):
            end = text.find("**", b + 2)
            if end == -1:
                out.append(esc(text[i:]))
                break
            out.append(esc(text[i:b]))
            out.append(f"<strong>{inline(text[b + 2:end], ctx)}</strong>")
            i = end + 2
        else:
            out.append(esc(text[i:l]))
            out.append(link(m.group(1), m.group(2), ctx))
            i = m.end()
    return "".join(out)


def link(label: str, href: str, ctx: dict) -> str:
    inner = inline(label, ctx)
    if href.startswith("mailto:"):
        ctx["uses_cta"] = True
        cls = "font-medium text-azul-claro hover:underline" if ctx.get("in_cta") else "font-medium text-azul hover:underline"
        return f'<GuideCta slug="{ctx["slug"]}" className="{cls}">{inner}</GuideCta>'
    if href.startswith("/"):
        ctx["uses_link"] = True
        ctx["internal_links"].add(href)
        cls = "text-azul-claro underline underline-offset-2" if ctx.get("in_cta") else "text-azul underline underline-offset-2 hover:text-cobalto"
        return f'<Link href="{href}" className="{cls}">{inner}</Link>'
    if href.startswith("http"):
        cls = "text-azul-claro underline underline-offset-2" if ctx.get("in_cta") else "text-azul underline underline-offset-2 hover:text-cobalto"
        return f'<a href="{href}" target="_blank" rel="noopener" className="{cls}">{inner}</a>'
    raise ValueError(f"enlace raro: {href}")


# ---------- bloques ----------

def parse_blocks(lines):
    """Agrupa líneas en bloques: ('p', text) ('ul', [items]) ('ol', [items]) ('table', rows) ('quote', lines)."""
    blocks = []
    i = 0
    while i < len(lines):
        ln = lines[i]
        if not ln.strip():
            i += 1
            continue
        if ln.startswith("- "):
            items = []
            while i < len(lines) and lines[i].startswith("- "):
                items.append(lines[i][2:].strip())
                i += 1
            blocks.append(("ul", items))
        elif re.match(r"^\d+\. ", ln):
            items = []
            while i < len(lines) and re.match(r"^\d+\. ", lines[i]):
                items.append(re.sub(r"^\d+\. ", "", lines[i]).strip())
                i += 1
            blocks.append(("ol", items))
        elif ln.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                if not all(re.match(r"^:?-+:?$", c) for c in cells):
                    rows.append(cells)
                i += 1
            blocks.append(("table", rows))
        elif ln.startswith(">"):
            inner = []
            while i < len(lines) and lines[i].startswith(">"):
                inner.append(re.sub(r"^> ?", "", lines[i]))
                i += 1
            blocks.append(("quote", inner))
        else:
            para = []
            while i < len(lines) and lines[i].strip() and not re.match(r"^(- |\d+\. |\||>|## )", lines[i]):
                para.append(lines[i].strip())
                i += 1
            blocks.append(("p", " ".join(para)))
    return blocks


BODY = "${body}"


def render_block(kind, data, ctx, ind="            "):
    cta = ctx.get("in_cta")
    quote = ctx.get("in_quote")
    if kind == "p":
        cls = 'className="text-[15px] leading-[1.5] text-plata"' if cta else ('className="text-[15px] leading-[1.55]"' if quote else "className={body}")
        return f"{ind}<p {cls}>{inline(data, ctx)}</p>"
    if kind in ("ul", "ol"):
        style = "list-disc" if kind == "ul" else "list-decimal"
        if cta:
            cls = f'className="flex {style} flex-col gap-2 pl-5 text-[15px] leading-[1.5] text-plata"'
        elif quote:
            cls = f'className="flex {style} flex-col gap-2 pl-5 text-[15px] leading-[1.55]"'
        else:
            cls = f"className={{`${{body}} flex {style} flex-col gap-2 pl-5`}}"
        items = "\n".join(f"{ind}  <li>{inline(it, ctx)}</li>" for it in data)
        return f"{ind}<{kind} {cls}>\n{items}\n{ind}</{kind}>"
    if kind == "table":
        head, *rows = data
        th = "\n".join(
            f'{ind}      <th className="py-3 {"pr-4 " if j < len(head) - 1 else ""}font-normal">{inline(c, ctx)}</th>'
            for j, c in enumerate(head)
        )
        trs = []
        for r in rows:
            tds = "\n".join(
                f'{ind}      <td className="py-3{" pr-4" if j < len(r) - 1 else ""}{" font-semibold" if j == 0 else ""}">{inline(c, ctx)}</td>'
                for j, c in enumerate(r)
            )
            trs.append(f'{ind}    <tr className="border-b border-linea">\n{tds}\n{ind}    </tr>')
        return (
            f'{ind}<div className="overflow-x-auto">\n'
            f'{ind}  <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">\n'
            f"{ind}    <thead>\n"
            f'{ind}    <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">\n{th}\n{ind}    </tr>\n'
            f"{ind}    </thead>\n"
            f"{ind}    <tbody>\n" + "\n".join(trs) + f"\n{ind}    </tbody>\n"
            f"{ind}  </table>\n{ind}</div>"
        )
    if kind == "quote":
        ctx["in_quote"] = True
        inner = "\n".join(render_block(k, d, ctx, ind + "  ") for k, d in parse_blocks(data))
        ctx["in_quote"] = False
        return (
            f'{ind}<blockquote className="flex flex-col gap-2 border-l-[3px] border-azul pl-5 text-gris">\n'
            f"{inner}\n{ind}</blockquote>"
        )
    raise ValueError(kind)


def split_sections(md: str):
    """Devuelve (intro_lines, [(h2, lines)...]) sin frontmatter, H1 ni la línea de lectura."""
    body = md.split("---", 2)[2] if md.startswith("---") else md
    lines = body.split("\n")
    intro, sections, cur = [], [], None
    for ln in lines:
        if ln.startswith("# ") or re.match(r"^\*Lectura: .*\*$", ln.strip()):
            continue
        if ln.startswith("## "):
            cur = (ln[3:].strip(), [])
            sections.append(cur)
        elif cur is None:
            intro.append(ln)
        else:
            cur[1].append(ln)
    return intro, sections


MAILTO_ONLY = re.compile(r"^(\*\*)?\[([^\]]*)\]\(mailto:[^)]+\)(\*\*)?\.?$")


def render_cta(heading, lines, ctx):
    """Último H2: caja oscura con el llamado a contacto; 'Seguí leyendo' va debajo."""
    ctx["in_cta"] = True
    inside, after = [], []
    for kind, data in parse_blocks(lines):
        if kind == "p" and data.startswith("Seguí leyendo:"):
            ctx["in_cta"] = False
            after.append(f'          <p className="text-[15px] leading-[1.5] text-gris">{inline(data, ctx)}</p>')
            ctx["in_cta"] = True
            continue
        m = MAILTO_ONLY.match(data) if kind == "p" else None
        if m:
            ctx["uses_cta"] = True
            inside.append(
                f'            <GuideCta\n              slug="{ctx["slug"]}"\n'
                '              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"\n'
                "            >\n"
                '              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />\n'
                f"              {inline(m.group(2), ctx)}\n"
                "            </GuideCta>"
            )
        else:
            inside.append(render_block(kind, data, ctx))
    ctx["in_cta"] = False
    out = [
        '          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">',
        f"            <h2 className={{h2}}>{inline(heading, ctx)}</h2>",
        *inside,
        "          </section>",
        *after,
    ]
    return "\n".join(out)


def render_page(meta, md):
    slug = meta["slug"]
    ctx = {"slug": slug, "uses_link": False, "uses_cta": False, "internal_links": set()}
    intro, sections = split_sections(md)
    intro_jsx = "\n".join(render_block(k, d, ctx) for k, d in parse_blocks(intro))
    parts = []
    for heading, lines in sections:
        if heading == CTA_HEADING and heading == sections[-1][0]:
            parts.append(render_cta(heading, lines, ctx))
            continue
        blocks = "\n".join(render_block(k, d, ctx) for k, d in parse_blocks(lines))
        parts.append(
            '          <section className="flex flex-col gap-4">\n'
            f"            <h2 className={{h2}}>{inline(heading, ctx)}</h2>\n"
            f"{blocks}\n"
            "          </section>"
        )
    imports = []
    if ctx["uses_link"]:
        imports.append('import Link from "next/link";')
    imports.append('import type { Metadata } from "next";')
    imports.append('import GuideArticle from "@/components/GuideArticle";')
    if ctx["uses_cta"]:
        imports.append('import GuideCta from "@/components/GuideCta";')
    imports.append('import { getGuide, guideMetadata } from "@/lib/guides";')
    name = "".join(w.capitalize() for w in re.sub(r"[^a-z0-9]+", " ", slug).split())
    page = f"""{chr(10).join(imports)}

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/{slug}.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("{slug}");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function {name}Guide() {{
  return (
    <GuideArticle
      guide={{guide}}
      intro={{
        <>
{intro_jsx}
        </>
      }}
    >
{chr(10).join(parts)}
    </GuideArticle>
  );
}}
"""
    return page, ctx["internal_links"]


def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def render_guides_ts(guides):
    entries = []
    for g in guides:
        entries.append(
            "  {\n"
            + "".join(
                f"    {k}: {ts_str(g[k]) if isinstance(g[k], str) else g[k]},\n"
                for k in ("slug", "path", "title", "seoTitle", "description", "published", "updated", "readingMinutes", "category")
            )
            + "  },"
        )
    return f"""import type {{ Metadata }} from "next";
import {{ site }} from "@/lib/data";

// Guías publicadas: cada una tiene su página en app/guias/<slug>, y la lista
// alimenta la sección Guías de la home, el sitemap y llms.txt.
// Las entradas salen de mansalva-serp-engine/output/articles/*.meta.json
// (solo reviewed: true) vía scripts/publicar-guias.py; la primera es la guía
// con calculadora, escrita a mano.
export type Guide = {{
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  published: string;
  updated: string;
  readingMinutes: number;
  category: string;
}};

export const guides: Guide[] = [
{chr(10).join(entries)}
];

// Orden de las categorías en la home.
export const guideCategories = {json.dumps(["Pantallas LED", "Videowalls", "Tótems", "Video para stands", "Stands de feria"], ensure_ascii=False)};

export function getGuide(slug: string): Guide {{
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) throw new Error(`Guía sin datos en lib/guides.ts: ${{slug}}`);
  return guide;
}}

// La guía de resolución LED se enlaza desde servicios, Stands y el pie.
export const ledGuide = getGuide("resolucion-pantalla-led");

export const guideMetadata = (guide: Guide): Metadata => ({{
  title: guide.seoTitle,
  description: guide.description,
  alternates: {{ canonical: guide.path }},
  openGraph: {{
    title: guide.title,
    description: guide.description,
    url: guide.path,
    siteName: site.name,
    locale: "es_AR",
    type: "article",
  }},
}});

export const guideJsonLd = (guide: Guide) => ({{
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.title,
  description: guide.description,
  inLanguage: "es-AR",
  datePublished: guide.published,
  dateModified: guide.updated,
  mainEntityOfPage: `${{site.url}}${{guide.path}}`,
  image: `${{site.url}}/opengraph-image`,
  author: {{ "@id": `${{site.url}}/#fundador` }},
  publisher: {{ "@id": `${{site.url}}/#estudio` }},
}});

// Pitch más usados; resoluciones calculadas para una pantalla de 5 × 2 m.
export const pitchTable = [
  {{ pitch: 1.5, where: "Mostradores y pantallas que se miran de muy cerca" }},
  {{ pitch: 1.9, where: "Stands premium y recepciones" }},
  {{ pitch: 2.5, where: "Stands de feria en interiores (el más común)" }},
  {{ pitch: 2.9, where: "Escenarios y pantallas de alquiler para eventos" }},
  {{ pitch: 3.9, where: "Escenarios grandes y auditorios" }},
  {{ pitch: 4.8, where: "Exteriores y pantallas que se miran de lejos" }},
];
"""


def main():
    metas = []
    for mf in sorted(ARTICLES.glob("*.meta.json")):
        m = json.loads(mf.read_text())
        if m.get("reviewed") is not True:
            print(f"omitida (sin revisar): {m['slug']}")
            continue
        metas.append(m)

    guides = [LED_GUIDE]
    all_links = {}
    pending = []
    for m in metas:
        slug = m["slug"]
        if slug not in CATEGORY_BY_SLUG:
            sys.exit(f"falta categoría para {slug} en CATEGORY")
        md = Path(m["markdown_file"]).read_text()
        for n, ln in enumerate(md.split("\n"), 1):
            if "[fuente pendiente]" in ln:
                pending.append((slug, n, ln.strip()))
        page, links = render_page(m, md)
        all_links[slug] = links
        out = ROOT / "app" / "guias" / slug / "page.tsx"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(page)
        guides.append(
            {
                "slug": slug,
                "path": m["path"],
                "title": m["title"],
                "seoTitle": m["seoTitle"],
                "description": m["description"],
                "published": m["published"],
                "updated": m["updated"],
                "readingMinutes": m["reading_minutes"],
                "category": CATEGORY_BY_SLUG[slug],
            }
        )
    (ROOT / "lib" / "guides.ts").write_text(render_guides_ts(guides))

    # Comprobación de enlaces internos.
    known = {g["path"] for g in guides} | {"/"}
    import subprocess
    svc = subprocess.run(["grep", "-oE", 'slug: "[^"]+"', str(ROOT / "lib" / "services.ts")], capture_output=True, text=True).stdout
    known |= {"/" + s.split('"')[1] for s in svc.splitlines()}
    unresolved = sorted({(s, l) for s, ls in all_links.items() for l in ls if l not in known})
    print(f"páginas generadas: {len(metas)}; guías en lista: {len(guides)}")
    if unresolved:
        print("enlaces internos sin destino:")
        for s, l in unresolved:
            print(f"  {s} -> {l}")
    else:
        print("enlaces internos: todos resuelven")
    if pending:
        print("marcas [fuente pendiente]:")
        for s, n, ln in pending:
            print(f"  {s}:{n}: {ln[:120]}")
    else:
        print("marcas [fuente pendiente]: ninguna")


if __name__ == "__main__":
    main()
