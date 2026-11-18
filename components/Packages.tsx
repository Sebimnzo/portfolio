import type { ReactNode } from "react";
import Link from "next/link";
import { packages, packagesSection, site } from "@/lib/data";

// Paquetes cerrados (sin precio): cada uno con su formato dibujado, lo que
// incluye, el plazo y un pedido de cotización por WhatsApp.
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  vectorEffect: "non-scaling-stroke",
} as const;

const shapes: Record<string, ReactNode> = {
  vertical: (
    <>
      <rect x="45" y="1" width="30" height="53.3" rx="2" {...stroke} />
      <path d="M56 22v10l9-5z" {...stroke} />
    </>
  ),
  wide: (
    <>
      <rect x="9" y="8" width="102" height="57.4" rx="2" {...stroke} />
      <path d="M54 26v22l19-11z" {...stroke} />
    </>
  ),
  social: (
    <>
      <rect x="18" y="1" width="30" height="53.3" rx="2" {...stroke} />
      <rect x="58" y="12" width="30" height="53.3" rx="2" {...stroke} />
      <rect x="94" y="1" width="22" height="39" rx="2" {...stroke} />
    </>
  ),
  motion: (
    <>
      <circle cx="42" cy="34" r="26" {...stroke} />
      <rect x="56" y="12" width="44" height="44" {...stroke} />
    </>
  ),
  web: (
    <>
      <rect x="9" y="4" width="102" height="60" rx="2" {...stroke} />
      <path d="M9 16h102" {...stroke} />
      <path d="M54 28v22l19-11z" {...stroke} />
    </>
  ),
  totem: (
    <>
      <rect x="2" y="12" width="70" height="40" {...stroke} />
      <rect x="86" y="1" width="30" height="54" {...stroke} />
      <path d="M101 55v6M92 61.5h18" {...stroke} />
    </>
  ),
};

const quoteLink = (p: (typeof packages)[number]) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    [
      `Hola, quiero cotizar el paquete «${p.name}» (${p.spec}).`,
      "",
      "Para cuándo lo necesitás:",
      "Cantidad de piezas:",
      "Versiones extra (otra medida, idioma o duración):",
    ].join("\n")
  )}`;

export default function Packages() {
  return (
    <section id="paquetes" aria-labelledby="paquetes-title" className="scroll-mt-24 border-t border-linea">
      <div className="mx-auto flex max-w-[1552px] flex-col gap-10 px-5 py-14 sm:px-12">
        <div className="max-w-[720px]">
          <p className="text-[11px] font-medium uppercase tracking-wide text-gris">{packagesSection.label}</p>
          <h2
            id="paquetes-title"
            className="mt-[22px] text-[clamp(1.75rem,4vw,38px)] font-extrabold leading-[1.05]"
          >
            {packagesSection.title}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.45] text-gris">{packagesSection.text}</p>
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <li key={p.slug} className="flex flex-col border-t border-grafito pt-6">
              <svg aria-hidden viewBox="0 0 120 68" overflow="visible" className="h-16 w-[113px] text-grafito">
                {shapes[p.shape]}
              </svg>
              <h3 className="mt-5 text-[22px] font-extrabold leading-[1.15]">{p.name}</h3>
              <p className="mt-1.5 text-xs font-medium text-gris">{p.spec}</p>
              <p className="mt-3 max-w-[46ch] text-[15px] leading-[1.5] text-gris">{p.text}</p>

              <ul className="mt-5 flex flex-col gap-2 text-[15px] leading-[1.4]">
                {p.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-[0.55em] size-1.5 shrink-0 bg-grafito" />
                    {item}
                  </li>
                ))}
              </ul>

              <dl className="mt-auto pt-6 text-sm">
                <div className="flex justify-between gap-4 border-t border-linea py-2.5">
                  <dt className="text-gris">Precio</dt>
                  <dd className="text-right font-medium">Pedí presupuesto</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-linea py-2.5">
                  <dt className="text-gris">Plazo</dt>
                  <dd className="text-right font-medium">{p.standard}</dd>
                </div>
                {p.express && (
                  <div className="flex justify-between gap-4 border-t border-linea py-2.5">
                    <dt className="text-gris">Express</dt>
                    <dd className="text-right font-medium">{p.express}</dd>
                  </div>
                )}
              </dl>

              <a
                href={quoteLink(p)}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex min-h-12 items-center gap-4 text-sm font-medium text-azul hover:text-cobalto"
              >
                <span aria-hidden className="h-[3px] w-8 bg-azul" />
                Cotizar este paquete <span aria-hidden>→</span>
              </a>
              {p.see && (
                <Link href={p.see.href} className="inline-flex min-h-12 items-center text-sm font-medium hover:text-azul">
                  {p.see.label} <span aria-hidden>&nbsp;→</span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        <p className="max-w-[720px] text-[13px] leading-[1.5] text-gris">
          {packagesSection.note} ¿Necesitás otra combinación?{" "}
          <a href="#contacto" className="font-medium text-grafito underline underline-offset-2 hover:text-azul">
            Contanos en el brief
          </a>
          .
        </p>
      </div>
    </section>
  );
}
