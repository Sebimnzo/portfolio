"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const project of projects) {
      counts.set(project.category, (counts.get(project.category) ?? 0) + 1);
    }
    return Array.from(counts.entries());
  }, [projects]);

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const visibleProjects = activeFilter
    ? projects.filter((project) => project.category === activeFilter)
    : projects;

  return (
    <div>
      <div className="mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveFilter(null)}
          className={`rounded-full border-2 border-cream px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors sm:text-sm ${
            activeFilter === null ? "bg-cream text-teal" : "text-cream hover:bg-cream/10"
          }`}
        >
          Todos ({projects.length})
        </button>
        {categories.map(([category, count]) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveFilter(category)}
            className={`rounded-full border-2 border-cream px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors sm:text-sm ${
              activeFilter === category
                ? "bg-cream text-teal"
                : "text-cream hover:bg-cream/10"
            }`}
          >
            {category} ({count})
          </button>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.slug} delayMs={(index % 2) * 120}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
