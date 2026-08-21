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
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 -z-0 h-80 w-80"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="100" fill="none" stroke="var(--color-cream)" strokeWidth="10" opacity="0.5" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-rust)" strokeWidth="10" opacity="0.6" />
        <circle cx="100" cy="100" r="40" fill="var(--color-mustard)" opacity="0.5" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute right-8 bottom-8 -z-0 hidden h-24 w-24 md:block"
        viewBox="0 0 100 100"
      >
        <path
          d="M50 5 A45 45 0 0 1 95 50 A30 30 0 0 1 65 80 A15 15 0 0 1 50 65 A7 7 0 0 1 57 58"
          fill="none"
          stroke="var(--color-brick)"
          strokeWidth="6"
          opacity="0.7"
        />
      </svg>
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-cream sm:text-4xl">
          Trabajos Seleccionados
        </h2>
        <p className="mt-3 max-w-xl text-cream/80">
          Selección de proyectos de edición de video y motion graphics.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
