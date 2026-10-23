import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectGrid from "@/components/ProjectGrid";
import { projects, site } from "@/lib/data";
import { ledGuide } from "@/lib/guides";
import { serviceBySlug, services } from "@/lib/services";

// Solo existen las páginas de lib/services.ts; cualquier otra ruta es 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ servicio: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[servicio]">): Promise<Metadata> {
  const service = serviceBySlug((await params).servicio);
  if (!service) return {};
  const path = `/${service.slug}`;
  return {
    title: service.seoTitle,
    description: service.description,
    alternates: { canonical: path },
    openGraph: {
      title: service.seoTitle,
      description: service.description,
      url: path,
      siteName: site.name,
      locale: "es_AR",
      type: "website",
    },
  };
}

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6]";

export default async function ServicePage({ params }: PageProps<"/[servicio]">) {
  const service = serviceBySlug((await params).servicio);
  if (!service) notFound();

  const url = `${site.url}/${service.slug}`;
  const parent = service.parent ? serviceBySlug(service.parent) : undefined;
  const related = service.projects
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);
  // Pilar: enlaza a sus subpáginas. Subpágina: a sus hermanas y al pilar.
  const siblings = services.filter(
    (s) => s.slug !== service.slug && (s.parent === (service.parent ?? service.slug) || s.slug === service.parent)
  );
  const others = services.filter((s) => s.slug !== service.slug && !siblings.includes(s));
  const crumbs = [
    { name: "Inicio", url: site.url },
    ...(parent ? [{ name: parent.label, url: `${site.url}/${parent.slug}` }] : []),
    { name: service.label, url },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#servicio`,
        name: service.h1,
        serviceType: service.label,
        description: service.description,
        url,
        provider: { "@id": `${site.url}/#estudio` },
        inLanguage: "es-AR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: c.url,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main id="main" className="flex-1">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-12 px-5 py-12 sm:px-12 sm:py-16">
          <header className="flex flex-col gap-5">
            <nav aria-label="Miga de pan" className="font-medium text-[11px] uppercase tracking-wide text-gris">
              <ol className="flex flex-wrap gap-x-2">
                {crumbs.map((c, i) => (
                  <li key={c.url} className="flex gap-2">
                    {i < crumbs.length - 1 ? (
                      <>
                        <Link href={c.url.replace(site.url, "") || "/"} className="-mx-1.5 -my-4 px-1.5 py-4 hover:text-azul">
                          {c.name}
                        </Link>
                        <span aria-hidden>/</span>
                      </>
                    ) : (
                      <span aria-current="page">{c.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <h1 className="type-depth text-[clamp(2.5rem,7vw,84px)] font-black uppercase leading-[0.93] tracking-[-0.045em]">
              {service.h1}
            </h1>
            <div className="flex max-w-[68ch] flex-col gap-4">
              {service.intro.map((p) => (
                <p key={p} className={`${body} text-gris`}>
                  {p}
                </p>
              ))}
            </div>
          </header>

          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[18px] bg-linea sm:grid-cols-2 lg:grid-cols-4">
            {service.specs.map((s) => (
              <div key={s.label} className="bg-humo p-5">
                <dt className="font-medium text-[11px] uppercase tracking-wide text-gris">{s.label}</dt>
                <dd className="mt-2 text-[17px] font-extrabold leading-[1.25]">{s.value}</dd>
              </div>
            ))}
          </dl>

          {service.sections.map((section) => (
            <section key={section.h2} className="flex max-w-[76ch] flex-col gap-4">
              <h2 className={h2}>{section.h2}</h2>
              {section.paras?.map((p) => (
                <p key={p} className={body}>
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className={`${body} flex flex-col gap-3`}>
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-4">
                      <span aria-hidden className="mt-[0.7em] h-[3px] w-5 shrink-0 bg-azul" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {(service.slug === "contenido-pantallas-led" || service.slug === "videos-para-stands") && (
            <Link
              href={ledGuide.path}
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul hover:text-cobalto"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul" />
              Calculá la resolución de tu pantalla LED <span aria-hidden>→</span>
            </Link>
          )}

          {siblings.length > 0 && (
            <section className="flex flex-col gap-4">
              <h2 className={h2}>{service.parent ? "Otros soportes" : "Por soporte"}</h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="flex min-h-full flex-col gap-2 rounded-[14px] border border-linea p-5 transition-colors hover:border-azul"
                    >
                      <span className="text-[19px] font-extrabold">
                        {s.label} <span aria-hidden className="text-azul">→</span>
                      </span>
                      <span className="text-[13px] leading-[1.4] text-gris">{s.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {related.length > 0 && (
            <section className="flex flex-col gap-5">
              <h2 className={h2}>Trabajos relacionados</h2>
              <ProjectGrid projects={related} />
            </section>
          )}

          <section className="flex max-w-[76ch] flex-col">
            <h2 className={`${h2} mb-2`}>Preguntas frecuentes</h2>
            {service.faq.map((item) => (
              <details key={item.q} className="group border-t border-linea last:border-b">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 transition-colors hover:text-azul [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[19px] font-extrabold leading-[1.2]">{item.q}</h3>
                  <span
                    aria-hidden
                    className="relative mt-1 size-4 shrink-0 transition-transform duration-200 group-open:rotate-45"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-current" />
                    <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-current" />
                  </span>
                </summary>
                <p className="pb-6 text-[15px] leading-[1.55] text-gris">{item.a}</p>
              </details>
            ))}
          </section>

          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-10">
            <h2 className="text-[clamp(1.75rem,4vw,44px)] font-extrabold leading-[1.02]">
              {site.contactHeadline}
            </h2>
            <p className="max-w-[56ch] text-[15px] leading-[1.5] text-plata">
              Contanos qué necesitás y armamos una propuesta para tu {service.label.toLowerCase()}.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Pedir una propuesta
            </Link>
          </section>

          {others.length > 0 && (
            <nav aria-label="Otros servicios" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {others.map((s) => (
                <Link key={s.slug} href={`/${s.slug}`} className="min-h-12 content-center text-gris hover:text-azul">
                  {s.label} <span aria-hidden>→</span>
                </Link>
              ))}
            </nav>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
