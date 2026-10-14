import { projects, site } from "@/lib/data";

// Resumen del sitio en Markdown para asistentes de IA (convención llms.txt),
// armado con los mismos datos que la página para que no se desactualice.
export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Fundador: ${site.founder.name} (${site.founder.title}). Contacto: ${site.email} · WhatsApp +${site.whatsapp}.`,
    "",
    "## Videos para stands de feria",
    "",
    ...site.standFormats.map((f) => `- **${f.name}** (${f.spec}): ${f.text}`),
    "",
    "## Servicios",
    "",
    ...site.services.map((s) => `- **${s.name}**: ${s.text}`),
    "",
    "## Preguntas frecuentes",
    "",
    ...site.faq.flatMap((item) => [`### ${item.q}`, "", item.a, ""]),
    "## Trabajos",
    "",
    ...projects.map(
      (p) => `- [${p.title}](https://www.youtube.com/watch?v=${p.youtubeId}): ${p.category}, video ${p.orientation}`
    ),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
