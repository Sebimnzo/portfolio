import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="trabajos" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Trabajos Seleccionados</h2>
      <p className="mt-3 max-w-xl text-white/60">
        Selección de proyectos de edición de video y motion graphics.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
