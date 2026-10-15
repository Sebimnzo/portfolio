import type { ReactNode } from "react";
import { site } from "@/lib/data";
import Link from "next/link";
import { ledGuide } from "@/lib/guides";
import Tilt from "./Tilt";

// Cada soporte dibujado en su proporción real: LED 32:9, videowall de 3 × 2
// monitores 16:9, tótem 9:16, loop de 10 a 30 s y volumen 3D. Se ven en
// perspectiva, como dentro de un stand, y se enderezan hacia el puntero.
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  vectorEffect: "non-scaling-stroke",
} as const;

const shapes: Record<string, ReactNode> = {
  led: (
    <>
      <defs>
        <pattern id="led-pitch" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.7" fill="var(--gris)" />
        </pattern>
      </defs>
      <rect x="2" y="17.7" width="116" height="32.6" fill="url(#led-pitch)" />
      <rect x="2" y="17.7" width="116" height="32.6" {...stroke} />
    </>
  ),
  videowall: (
    <>
      {[0, 1, 2].flatMap((col) =>
        [0, 1].map((row) => (
          <rect
            key={`${col}-${row}`}
            x={3 + col * 39}
            y={12.25 + row * 23.25}
            width="36"
            height="20.25"
            {...stroke}
          />
        ))
      )}
    </>
  ),
  totem: (
    <>
      <rect x="43" y="1" width="34" height="60" {...stroke} />
      <path d="M60 61v5M50 66.5h20" {...stroke} />
    </>
  ),
  loop: (
    <>
      <path d="M116 34C116 10 4 10 4 34M0 29l4 5 4-5" {...stroke} />
      <path d="M4 46h112M4 42v8M41.3 42v8M78.7 42v8M116 42v8" {...stroke} />
      <path d="M41.3 46H116" fill="none" stroke="var(--azul)" strokeWidth="3" />
      {[
        { x: 4, t: "0" },
        { x: 41.3, t: "10" },
        { x: 78.7, t: "20" },
        { x: 116, t: "30 s" },
      ].map(({ x, t }) => (
        <text
          key={t}
          x={x}
          y="62"
          textAnchor={x === 116 ? "end" : x === 4 ? "start" : "middle"}
          fontSize="10"
          fill="var(--gris)"
          className="font-medium"
        >
          {t}
        </text>
      ))}
    </>
  ),
  cube: <path d="M60 6l24 14v28L60 62 36 48V20zM36 20l24 14 24-14M60 34v28" {...stroke} />,
};

// Cada soporte enlaza a su página de servicio.
const pageFor: Record<string, string> = {
  led: "/contenido-pantallas-led",
  videowall: "/animacion-videowall",
  totem: "/totems-digitales",
  loop: "/videos-para-stands",
  cube: "/animacion-3d-producto",
};

export default function Stands() {
  return (
    <section id="stands" aria-labelledby="stands-title" className="scroll-mt-24 border-t border-linea">
      <div className="mx-auto grid max-w-[1552px] grid-cols-1 gap-10 px-5 py-14 sm:px-12 lg:grid-cols-[380px_1fr] lg:gap-12">
        <div className="lg:sticky lg:top-[120px] lg:self-start">
          <p className="font-medium text-[11px] uppercase tracking-wide text-gris">{site.standsLabel}</p>
          <h2
            id="stands-title"
            className="mt-[22px] text-[clamp(1.75rem,4vw,38px)] font-extrabold leading-[1.05]"
          >
            {site.standsTitle}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.45] text-gris">{site.standsText}</p>
          <Link
            href={ledGuide.path}
            className="mt-5 inline-flex min-h-12 items-center gap-4 text-sm font-medium text-azul hover:text-cobalto"
          >
            <span aria-hidden className="h-[3px] w-8 bg-azul" />
            Calculá la resolución de tu pantalla LED <span aria-hidden>→</span>
          </Link>
        </div>

        <ul>
          {site.standFormats.map((format) => (
            <Tilt
              as="li"
              key={format.name}
              className="group/stand grid grid-cols-[96px_minmax(0,1fr)] gap-x-5 gap-y-2 border-t border-linea py-6 last:border-b sm:grid-cols-[120px_minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-x-8"
            >
              <svg
                aria-hidden
                viewBox="0 0 120 68"
                overflow="visible"
                className="stand-3d row-span-2 w-full self-start text-grafito transition-colors group-hover/stand:text-azul sm:row-span-1"
              >
                {shapes[format.shape]}
              </svg>
              <div>
                <h3 className="text-[19px] font-extrabold leading-[1.15]">
                  <Link href={pageFor[format.shape]} className="transition-colors hover:text-azul">
                    {format.name} <span aria-hidden className="text-azul">→</span>
                  </Link>
                </h3>
                <p className="mt-1.5 font-medium text-xs text-gris">{format.spec}</p>
              </div>
              <p className="max-w-[60ch] text-[15px] leading-[1.5] text-gris">{format.text}</p>
            </Tilt>
          ))}
        </ul>
      </div>
    </section>
  );
}
