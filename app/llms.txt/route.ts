import { packages, packagesSection, projects, site, type Project } from "@/lib/data";
import { guides } from "@/lib/guides";
import { services } from "@/lib/services";

// Resumen del sitio en Markdown para asistentes de IA (convención llms.txt),
// armado con los mismos datos que la página para que no se desactualice.
export const dynamic = "force-static";

const work = (p: Project) =>
  `- [${p.title}](https://www.youtube.com/watch?v=${p.youtubeId}): ${p.category}, video ${p.orientation}`;

export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name} (${site.domain}) es un estudio de animación y motion graphics de ${site.location}. No confundir con otras marcas que usan el nombre "Mansalva".`,
    "",
    `Fundador: ${site.founder.name} (${site.founder.title}). Contacto: ${site.email} · WhatsApp +${site.whatsapp} · LinkedIn: ${site.linkedin}`,
    "",
    "## Videos para stands de feria",
    "",
    ...site.standFormats.map((f) => `- **${f.name}** (${f.spec}): ${f.text}`),
    "",
    "## Paquetes (precio a cotizar)",
    "",
    packagesSection.text,
    "",
    ...packages.map(
      (p) =>
        `- **${p.name}** (${p.spec}): ${p.text} Incluye: ${p.includes.join("; ")}. Plazo: ${p.standard}${p.express ? `; express: ${p.express}` : ""}.`
    ),
    "",
    packagesSection.note,
    "",
    "## Servicios",
    "",
    ...site.services.map((s) => `- **${s.name}**: ${s.text}`),
    "",
    "## Preguntas frecuentes",
    "",
    ...site.faq.flatMap((item) => [`### ${item.q}`, "", item.a, ""]),
    "## Servicios en detalle",
    "",
    ...services.map((s) => `- [${s.h1}](${site.url}/${s.slug}): ${s.description}`),
    "",
    "## Guías",
    "",
    ...guides.map((g) => `- [${g.title}](${site.url}${g.path}): ${g.description} (lectura: ${g.readingMinutes} min)`),
    "",
    "## Trabajos para ferias y stands",
    "",
    ...projects.filter((p) => p.fair).map(work),
    "",
    "## Otros trabajos",
    "",
    ...projects.filter((p) => !p.fair).map(work),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
