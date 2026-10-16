import Link from "next/link";
import { guideCategories, guides } from "@/lib/guides";

// Sección Guías de la home: una ficha por tema en una grilla (número grande,
// nombre y cantidad), plegada. Al tocarla se despliegan sus guías con título,
// bajada y minutos de lectura. Fichas con borde para que no se confunda con las
// filas del FAQ. Usa <details> nativo: los enlaces quedan en el HTML aunque
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
            {groups.length} temas: elegí el tuyo.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {groups.map(({ category, items }) => (
            <details
              key={category}
              className="group border border-grafito bg-blanco open:sm:col-span-2"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-5 transition-colors hover:text-azul [&::-webkit-details-marker]:hidden sm:p-6">
                <h3 className="flex flex-col gap-2">
                  <span className="font-black text-[clamp(2.25rem,4vw,48px)] leading-[0.9] tracking-[-0.03em] tabular-nums">
                    {items.length}
                  </span>
                  <span className="text-[19px] font-extrabold leading-[1.2]">{category}</span>
                  <span className="text-[13px] font-medium text-gris">
                    {items.length === 1 ? "guía" : "guías"} · tocá para ver
                  </span>
                </h3>
                <span
                  aria-hidden
                  className="relative mt-1 size-4 shrink-0 transition-transform duration-200 group-open:rotate-45"
                >
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-current" />
                  <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-current" />
                </span>
              </summary>
              <ul className="border-t border-grafito px-5 pb-2 sm:px-6">
                {items.map((g) => (
                  <li key={g.slug} className="border-t border-linea first:border-t-0">
                    <Link
                      href={g.path}
                      className="flex flex-col gap-1 py-4 transition-colors hover:text-azul sm:grid sm:grid-cols-[1fr_auto] sm:gap-x-8"
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
