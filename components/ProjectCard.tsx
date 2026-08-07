import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const isVertical = project.orientation === "vertical";
  const frameClasses = isVertical
    ? "aspect-[9/16] mx-auto w-full max-w-64 overflow-hidden bg-black"
    : "aspect-video w-full overflow-hidden bg-black";
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-white/20">
      <div className={frameClasses}>
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${project.youtubeId}`}
          title={project.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-white/50">
          {project.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-white/60">{project.description}</p>
      </div>
    </article>
  );
}
