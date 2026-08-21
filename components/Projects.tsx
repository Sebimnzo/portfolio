import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="trabajos"
      className="relative scroll-mt-24 overflow-hidden bg-teal px-6 py-24"
    >
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 -z-0 h-64 w-64"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="100" fill="var(--color-mustard)" opacity="0.9" />
      </svg>
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-cream sm:text-4xl">
          Trabajos Seleccionados
        </h2>
        <p className="mt-3 max-w-xl text-cream/80">
          Selección de proyectos de edición de video y motion graphics.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
