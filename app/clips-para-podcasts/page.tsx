import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectGrid from "@/components/ProjectGrid";
import { projects, shareImage, site, type Project } from "@/lib/data";

// Página para mandar por link a quien tiene un podcast y pide ejemplos.
// Está fuera del menú, de la home y del sitemap a propósito: se comparte a mano.
const title = "Clips para podcasts: ejemplos de Limón y Soda — Mansalva";
const description =
  "Clips verticales de menos de 90 segundos que sacamos de episodios completos de Limón y Soda, un podcast argentino. Con subtítulos y el logo del programa al final.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/clips-para-podcasts" },
  openGraph: {
    title,
    description,
    url: "/clips-para-podcasts",
    siteName: site.name,
    locale: "es_AR",
    type: "website",
    images: [shareImage],
  },
  twitter: { card: "summary_large_image", images: [shareImage.url] },
};

// Los videos son los finales entregados, comprimidos para web (720×1280). Se ven
// como las tarjetas de «Trabajos seleccionados»: el archivo recién se carga
// cuando alguien toca una tarjeta y se abre en la ventana de reproducción.
const clip = (file: string, guest: string, line: string): Project => ({
  slug: file,
  title: guest,
  category: "Podcast",
  description: line,
  youtubeId: "",
  videoSrc: `/clips/${file}.mp4`,
  poster: `/clips/${file}.jpg`,
  orientation: "vertical",
});

// Tráiler de Yajaira (podcast de España), el mismo video que está en los trabajos de la home (YouTube).
// Va aparte de los clips, en su propia categoría.
const trailers: Project[] = [{ ...projects.find((p) => p.slug === "yajaira-podcast-trailer")!, category: "Tráiler" }];

const items: Project[] = [
  clip("silvio-velo", "Silvio Velo", "Una pasión que se veía dentro y fuera de la cancha."),
  clip("martin-garcia-1", "Martín García", "Los primeros minutos después del trasplante."),
  clip("fer-de-dios", "Fer De Dios", "El momento en que se dio cuenta para qué estaba."),
  clip("yajaira-clip", "Yajaira", "Un clip del podcast Yajaira, de España, con imágenes de lo que va nombrando."),
];

export default function ClipsParaPodcasts() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <div className="mx-auto flex max-w-[1552px] flex-col gap-10 px-5 py-14 sm:px-12 sm:py-16">
          <header className="flex flex-col gap-4">
            <p className="font-medium text-[11px] uppercase tracking-wide text-gris">Trabajos / Podcasts</p>
            <h1 className="type-depth text-[clamp(2.5rem,7vw,84px)] font-black uppercase leading-[0.93] tracking-[-0.045em]">
              Clips para podcasts
            </h1>
            <p className="max-w-[56ch] text-[17px] leading-[1.6] text-gris">
              Del episodio entero sacamos clips verticales de menos de 90 segundos. Arrancan con la frase que
              engancha, llevan subtítulos y cierran con el logo del programa. Estos son de Limón y Soda, un
              podcast argentino de historias personales.
            </p>
          </header>

          <ProjectGrid projects={items} />

          <section id="trailer" aria-labelledby="trailer-title" className="flex scroll-mt-24 flex-col gap-6 border-t border-linea pt-10">
            <div className="flex flex-col gap-2">
              <h2 id="trailer-title" className="text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]">
                Tráiler de podcast
              </h2>
              <p className="max-w-[56ch] text-[15px] leading-[1.6] text-gris">
                Un video corto que presenta el programa con sus mejores momentos. Este es el de Yajaira, un
                podcast de España.
              </p>
            </div>
            <ProjectGrid projects={trailers} />
          </section>

          <section aria-labelledby="clips-cta" className="flex flex-col gap-4 border-t border-linea pt-10">
            <h2 id="clips-cta" className="text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]">
              ¿Tenés un podcast?
            </h2>
            <div>
              <Link
                href="/#contacto"
                className="inline-flex min-h-12 items-center rounded bg-azul px-4 text-sm font-medium text-blanco transition-[background-color,transform] hover:bg-cobalto active:scale-[0.97]"
              >
                Hablemos <span aria-hidden>&nbsp;→</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
