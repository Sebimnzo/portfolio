import { projects } from "@/lib/data";
import ProjectsGrid from "./ProjectsGrid";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="trabajos" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-medium text-white/40">01</span>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Trabajos Seleccionados
          </h2>
        </div>
        <p className="mt-3 max-w-xl text-white/60">
          Selección de proyectos de edición de video y motion graphics.
        </p>
      </Reveal>
      <ProjectsGrid projects={projects} />
    </section>
  );
}
