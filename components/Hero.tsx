import { site } from "@/lib/data";
import MotionPath from "./MotionPath";

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-[1552px] grid-cols-1 gap-10 px-5 pb-12 pt-10 sm:px-12 lg:grid-cols-[1fr_380px] lg:gap-12 lg:pb-9 lg:pt-8">
      <div>
        <p className="font-mono text-[11px] uppercase text-gris">{site.heroLabel}</p>
        <h1 className="mt-[22px] text-[clamp(3rem,7vw,84px)] font-black uppercase leading-[0.93] tracking-[-0.045em]">
          {site.claim}
        </h1>
        <a
          href="#trabajos"
          className="mt-[22px] inline-flex items-center gap-4 text-sm font-medium text-azul hover:text-cobalto"
        >
          <span aria-hidden className="h-[3px] w-8 bg-azul" />
          Explorá nuestros trabajos <span aria-hidden>↓</span>
        </a>
      </div>
      <div className="flex flex-col gap-[22px] lg:pt-[5px]">
        <MotionPath className="h-[66px] w-full max-w-[380px]" />
        <p className="text-[27px] font-extrabold leading-[1.1]">{site.heroTitle}</p>
        <p className="text-[17px] leading-[1.45] text-gris">{site.tagline}</p>
      </div>
    </section>
  );
}
