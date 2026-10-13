import { site } from "@/lib/data";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function Hero() {
  const words = site.claim.split(" ");
  const lastWord = words.pop();

  return (
    <section className="flex items-center bg-grafito px-6 pb-16 pt-28 text-blanco sm:min-h-screen sm:pt-32">
      <Reveal className="mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-wider text-blanco/60">
          + {site.role} — {site.location}
        </p>
        <h1 className="mt-6 text-[clamp(3.25rem,11vw,9rem)] font-black uppercase leading-[0.85] tracking-[-0.045em]">
          <span className="block">{words.join(" ")}</span>
          <span className="mt-[0.06em] inline-block bg-azul px-[0.06em] pb-[0.02em]">
            {lastWord}
          </span>
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-blanco/20 pt-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="max-w-xl text-lg text-blanco/80">{site.tagline}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-blanco/50">
              Fundado por <span className="text-blanco">{site.founder.name}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <MagneticButton
              href="#contacto"
              className="inline-block bg-blanco px-6 py-3.5 text-sm font-extrabold uppercase text-grafito hover:bg-azul-claro"
            >
              Pedir propuesta <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton
              href="#trabajos"
              className="inline-block border-2 border-blanco px-6 py-3 text-sm font-extrabold uppercase text-blanco hover:border-azul-claro hover:text-azul-claro"
            >
              Ver trabajos
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
