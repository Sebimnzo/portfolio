import { projects } from "@/lib/data";
import ProjectsGrid from "./ProjectsGrid";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="trabajos" className="scroll-mt-16 bg-blanco px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-grafito pb-4">
            <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.045em]">
              Trabajos seleccionados
            </h2>
            <span className="font-mono text-xs uppercase text-grafito/60">01 / Trabajos</span>
          </div>
          <p className="mt-4 max-w-xl text-grafito/70">
            Una selección de piezas de motion graphics y video para marcas, agencias y
            creadores.
          </p>
        </Reveal>
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}
