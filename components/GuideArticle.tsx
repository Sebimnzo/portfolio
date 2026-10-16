import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";
import { guideJsonLd, type Guide } from "@/lib/guides";

const date = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });

// Esqueleto común de las guías: JSON-LD, cabecera con título y byline, y el
// cuerpo que pasa cada página. `intro` va dentro del <header>, debajo del byline.
export default function GuideArticle({
  guide,
  intro,
  children,
}: {
  guide: Guide;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd(guide)).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto flex w-full max-w-[860px] flex-col gap-10 px-5 py-12 sm:px-12 sm:py-16">
          <header className="flex flex-col gap-5">
            <p className="font-medium text-[11px] uppercase tracking-wide text-gris">Guía / {guide.category}</p>
            <h1 className="text-[clamp(2.25rem,5.5vw,60px)] font-black leading-[0.98] tracking-[-0.035em]">
              {guide.title}
            </h1>
            <p className="text-sm text-gris">
              Por {site.founder.name} · Actualizada el{" "}
              <time dateTime={guide.updated}>{date(guide.updated)}</time> · Lectura: {guide.readingMinutes} min
            </p>
            {intro}
          </header>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
