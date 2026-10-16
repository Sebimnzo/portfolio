import Link from "next/link";
import { guideCategories, guides } from "@/lib/guides";

// Sección Guías de la home: enlaza cada artículo con título, bajada y minutos
// de lectura, agrupados por tema. La lista vive en lib/guides.ts.
export default function Guides() {
  return (
    <section id="guias" aria-labelledby="guias-title" className="scroll-mt-24 border-t border-linea">
      <div className="mx-auto grid max-w-[1552px] grid-cols-1 gap-8 px-5 py-14 sm:px-12 lg:grid-cols-[380px_1fr] lg:gap-12">
        <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
          <p className="font-medium text-[11px] uppercase tracking-wide text-gris">Guías / Ferias y pantallas</p>
          <h2 id="guias-title" className="text-[clamp(1.75rem,4vw,38px)] font-extrabold leading-[1.05]">
            Lo que conviene saber antes de la feria.
          </h2>
          <p className="max-w-[40ch] text-[15px] leading-[1.5] text-gris">
            Qué pedirle al proveedor de la pantalla, cuánto tiene que durar el loop y por qué la gente
            sigue de largo. Escritas para quien arma el stand, no para técnicos.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {guideCategories.map((category) => {
            const items = guides.filter((g) => g.category === category);
            if (!items.length) return null;
            return (
              <div key={category} className="flex flex-col">
                <h3 className="pb-3 font-medium text-[11px] uppercase tracking-wide text-gris">{category}</h3>
                <ul>
                  {items.map((g) => (
                    <li key={g.slug} className="border-t border-linea last:border-b">
                      <Link
                        href={g.path}
                        className="group flex flex-col gap-1.5 py-5 transition-colors hover:text-azul sm:grid sm:grid-cols-[1fr_auto] sm:gap-x-8"
                      >
                        <span className="text-[19px] font-extrabold leading-[1.2]">{g.title}</span>
                        <span className="text-[13px] text-gris sm:row-span-2 sm:self-start sm:pt-1 sm:whitespace-nowrap">
                          Lectura: {g.readingMinutes} min
                        </span>
                        <span className="max-w-[68ch] text-[15px] leading-[1.55] text-gris">{g.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
