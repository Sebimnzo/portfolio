import { site } from "@/lib/data";
import MotionPath from "./MotionPath";
import Tilt from "./Tilt";

export default function Hero() {
  return (
    <Tilt
      as="section"
      className="mx-auto grid w-full max-w-[1552px] grid-cols-1 gap-10 px-5 pb-12 pt-10 sm:px-12 lg:grid-cols-[1fr_380px] lg:gap-12 lg:pb-9 lg:pt-8"
    >
      <div>
        <p className="font-medium text-[11px] uppercase tracking-wide text-gris">{site.heroLabel}</p>
        {/* El claim es gráfico; el <h1> (búsqueda principal) está en la columna derecha.
            Gira hacia el puntero con una copia desplazada detrás que le da volumen. */}
        <p className="tilt-rotate type-depth mt-[22px] origin-left text-[clamp(3rem,7vw,84px)] font-black uppercase leading-[0.93] tracking-[-0.045em] [--tilt:5deg]">
          {site.claim}
        </p>
        <a
          href="#trabajos"
          className="mt-[22px] inline-flex min-h-12 items-center gap-4 text-sm font-medium text-azul hover:text-cobalto"
        >
          <span aria-hidden className="h-[3px] w-8 bg-azul" />
          Ver trabajos <span aria-hidden>↓</span>
        </a>
      </div>
      <div className="flex flex-col gap-[22px] lg:pt-[5px]">
        <MotionPath className="tilt-shift h-[66px] w-full max-w-[380px] [--depth:-16px]" />
        <div className="tilt-shift flex flex-col gap-[22px] [--depth:6px]">
          <h1 className="text-[27px] font-extrabold leading-[1.1]">{site.heroTitle}</h1>
          <p className="text-[17px] leading-[1.45] text-gris">{site.tagline}</p>
        </div>
      </div>
    </Tilt>
  );
}
