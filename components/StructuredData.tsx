import { site } from "@/lib/data";

// Datos estructurados (schema.org) para buscadores y asistentes de IA.
const id = (name: string) => `${site.url}/#${name}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": id("estudio"),
      name: site.name,
      alternateName: site.alternateName,
      url: site.url,
      logo: `${site.url}/apple-icon`,
      image: `${site.url}/opengraph-image`,
      description: site.description,
      availableLanguage: "es",
      email: site.email,
      telephone: `+${site.whatsapp}`,
      sameAs: [site.linkedin],
      address: { "@type": "PostalAddress", addressCountry: "AR" },
      founder: { "@id": id("fundador") },
      knowsAbout: [
        "Videos para stands de feria",
        ...site.standFormats.map((f) => f.name),
        "Motion graphics",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios",
        itemListElement: [
          ...site.standFormats.map((f) => ({ name: f.name, description: f.text })),
          ...site.services.map((s) => ({ name: s.name, description: s.text })),
        ].map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", ...service },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": id("fundador"),
      name: site.founder.name,
      jobTitle: site.founder.title,
      image: `${site.url}${site.founder.photo}`,
      sameAs: [site.founder.linkedin],
      worksFor: { "@id": id("estudio") },
    },
    {
      "@type": "WebSite",
      "@id": id("web"),
      url: site.url,
      name: site.name,
      inLanguage: "es-AR",
      publisher: { "@id": id("estudio") },
    },
    {
      "@type": "FAQPage",
      "@id": id("preguntas"),
      mainEntity: site.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
