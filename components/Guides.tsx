import Link from "next/link";
import { guideCategories, guides } from "@/lib/guides";

// Sección Guías de la home: una fila por tema (nombre + cantidad), plegada.
// Al abrirla se despliegan sus guías con título, bajada y minutos de lectura.
// Usa <details> nativo, igual que el FAQ: los enlaces quedan en el HTML aunque
// estén plegados, así Google los rastrea. La lista vive en lib/guides.ts.
export default function Guides() {
  const groups = guideCategories
    .map((category) => ({ category, items: guides.filter((g) => g.category === category) }))
    .filter((group) => group.items.length > 0);

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
            sigue de largo. Escritas para quien arma el stand, no para técnicos. {guides.length} guías en{" "}
            {groups.length} temas.
          </p>
        </div>
        <div>
          {groups.map(({ category, items }) => (
            <details key={category} className="group border-t border-linea last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 transition-colors hover:text-azul [&::-webkit-details-marker]:hidden">
                <h3 className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="text-[19px] font-extrabold leading-[1.2]">{category}</span>
                  <span className="text-[13px] font-medium text-gris">
                    {items.length} {items.length === 1 ? "guía" : "guías"}
                  </span>
                </h3>
                <span
                  aria-hidden
                  className="relative size-4 shrink-0 transition-transform duration-200 group-open:rotate-45"
                >
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-current" />
                  <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-current" />
                </span>
              </summary>
              <ul className="pb-4">
                {items.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={g.path}
                      className="group/link flex flex-col gap-1 border-t border-linea py-4 transition-colors hover:text-azul sm:grid sm:grid-cols-[1fr_auto] sm:gap-x-8"
                    >
                      <span className="text-[17px] font-extrabold leading-[1.25]">{g.title}</span>
                      <span className="text-[13px] text-gris sm:row-span-2 sm:self-start sm:pt-0.5 sm:whitespace-nowrap">
                        Lectura: {g.readingMinutes} min
                      </span>
                      <span className="max-w-[68ch] text-[14px] leading-[1.5] text-gris">{g.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
