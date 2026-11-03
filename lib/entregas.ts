// Páginas de entregas para clientes (/entregas/<clave>).
// El repositorio es público, así que clave y secciones viven en la hoja «entregas»
// de la planilla de Sebastián (ver lib/revision.ts). Cada sección apunta a una
// carpeta de Drive compartida con el vínculo y lo que hay adentro se lee en vivo:
// cuando la sesión dueña sube o reemplaza un archivo, la página se actualiza sola.
import { SCRIPT_URL } from "@/lib/revision";

const REFRESCO = 60; // segundos que se reutiliza la planilla y cada carpeta

export type Tipo = "imagen" | "video" | "pdf" | "texto" | "otro";

export type Archivo = {
  id: string;
  nombre: string;
  tipo: Tipo;
  url: string;
  // Lo que se ve al abrirlo: el grupo (C1, Con logo…) se suma al nombre en el visor.
  grupo?: string;
  // Un SVG se muestra tal cual es, sin depender de la miniatura de Drive.
  vista?: string;
};

export type Grupo = {
  nombre: string;
  titulo?: string;
  texto?: string;
  archivos: Archivo[];
};

export type Seccion = {
  titulo: string;
  descripcion: string;
  lista: boolean;
  carpeta: string;
  formato: string;
  grupos: Grupo[];
  sueltos: Archivo[];
  sinVista: boolean;
};

export type Entrega = { cliente: string; secciones: Seccion[] };

type Fila = { titulo: string; descripcion: string; estado: string; carpeta: string; formato: string };
type Entrada = { id: string; nombre: string; url: string; esCarpeta: boolean };

const claveValida = (clave: string) => /^[A-Za-z0-9_-]{20,64}$/.test(clave);

function tipoDe(nombre: string): Tipo {
  const ext = nombre.split(".").pop()?.toLowerCase() ?? "";
  if (["png", "jpg", "jpeg", "webp", "gif", "svg"].includes(ext)) return "imagen";
  if (["mp4", "mov", "webm", "m4v"].includes(ext)) return "video";
  if (ext === "pdf") return "pdf";
  if (ext === "txt") return "texto";
  return "otro";
}

const decodificar = (s: string) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const porNombre = (a: { nombre: string }, b: { nombre: string }) =>
  a.nombre.localeCompare(b.nombre, "es", { numeric: true });

// Vista pública de la carpeta que ofrece Drive: no pide cuenta ni permisos. Si la
// carpeta no está compartida con el vínculo devuelve otra página y queda sin vista previa.
async function leerCarpeta(id: string): Promise<Entrada[] | null> {
  try {
    const res = await fetch(`https://drive.google.com/embeddedfolderview?id=${id}`, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: REFRESCO },
    });
    if (!res.ok) return null;
    const html = await res.text();
    if (!html.includes("flip-entries")) return null;
    const entradas: Entrada[] = [];
    const re = /<div class="flip-entry" id="entry-([^"]+)"[\s\S]*?<a href="([^"]+)"[\s\S]*?flip-entry-title">([^<]*)</g;
    for (const m of html.matchAll(re)) {
      entradas.push({
        id: m[1],
        url: decodificar(m[2]),
        nombre: decodificar(m[3]),
        esCarpeta: m[2].includes("/folders/") || m[2].includes("folderview"),
      });
    }
    return entradas;
  } catch {
    return null;
  }
}

async function leerTexto(id: string, tope = 20000): Promise<string | null> {
  try {
    const res = await fetch(`https://drive.google.com/uc?export=download&id=${id}`, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: REFRESCO },
    });
    if (!res.ok) return null;
    return (await res.text()).slice(0, tope);
  } catch {
    return null;
  }
}

const aArchivo = (e: Entrada, grupo?: string): Archivo => ({
  id: e.id,
  nombre: e.nombre,
  tipo: tipoDe(e.nombre),
  url: e.url,
  grupo,
});

// Un .txt con títulos «C1 Rentabilidad» se reparte entre las subcarpetas de ese nombre,
// así cada carrusel muestra el texto de su posteo.
function repartirTexto(texto: string, grupos: Grupo[]) {
  const lineas = texto.replace(/\r\n/g, "\n").split("\n");
  const titulos: { grupo: Grupo; linea: number; resto: string }[] = [];
  lineas.forEach((l, i) => {
    const t = l.trim();
    for (const g of grupos) {
      if (t === g.nombre || t.startsWith(`${g.nombre} `)) {
        titulos.push({ grupo: g, linea: i, resto: t.slice(g.nombre.length).trim() });
      }
    }
  });
  titulos.forEach((t, i) => {
    const fin = titulos[i + 1]?.linea ?? lineas.length;
    t.grupo.titulo = t.resto || undefined;
    t.grupo.texto = lineas.slice(t.linea + 1, fin).join("\n").trim();
  });
}

const TOPE_SVG = 500000;

async function sumarVistaSvg(archivos: Archivo[]) {
  await Promise.all(
    archivos
      .filter((a) => a.nombre.toLowerCase().endsWith(".svg"))
      .map(async (a) => {
        const svg = await leerTexto(a.id, TOPE_SVG);
        if (svg?.includes("<svg") && svg.length < TOPE_SVG) {
          a.vista = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
        }
      }),
  );
}

async function armarSeccion(fila: Fila): Promise<Seccion> {
  const seccion: Seccion = {
    titulo: fila.titulo,
    descripcion: fila.descripcion,
    lista: fila.estado.trim().toLowerCase() === "listo",
    carpeta: fila.carpeta,
    formato: /^\d+\/\d+$/.test(fila.formato) ? fila.formato : "1/1",
    grupos: [],
    sueltos: [],
    sinVista: false,
  };
  if (!seccion.lista) return seccion;

  const id = fila.carpeta.match(/\/folders\/([\w-]+)/)?.[1];
  const entradas = id ? await leerCarpeta(id) : null;
  if (!entradas || entradas.length === 0) {
    seccion.sinVista = true;
    return seccion;
  }

  const subcarpetas = entradas.filter((e) => e.esCarpeta).sort(porNombre);
  seccion.sueltos = entradas.filter((e) => !e.esCarpeta).map((e) => aArchivo(e)).sort(porNombre);
  seccion.grupos = await Promise.all(
    subcarpetas.map(async (c) => ({
      nombre: c.nombre,
      archivos: ((await leerCarpeta(c.id)) ?? [])
        .filter((e) => !e.esCarpeta)
        .map((e) => aArchivo(e, c.nombre))
        .sort(porNombre),
    })),
  );

  await sumarVistaSvg([...seccion.sueltos, ...seccion.grupos.flatMap((g) => g.archivos)]);

  if (seccion.grupos.length > 0) {
    const textos = seccion.sueltos.filter((a) => a.tipo === "texto");
    for (const a of textos) {
      const texto = await leerTexto(a.id);
      if (texto) repartirTexto(texto, seccion.grupos);
    }
  }
  return seccion;
}

export async function entrega(clave: string): Promise<Entrega | null> {
  if (!claveValida(clave)) return null;
  try {
    const res = await fetch(`${SCRIPT_URL}?${new URLSearchParams({ accion: "entrega", clave })}`, {
      next: { revalidate: REFRESCO },
    });
    if (!res.ok) return null;
    const r: { ok: boolean; entrega?: { cliente: string; secciones: Fila[] } } = await res.json();
    if (!r.ok || !r.entrega) return null;
    return {
      cliente: r.entrega.cliente,
      secciones: await Promise.all(r.entrega.secciones.map(armarSeccion)),
    };
  } catch {
    return null;
  }
}
