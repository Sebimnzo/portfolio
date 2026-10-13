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
      <div className="mt-10 flex flex-wrap gap-2">
        {[
          { key: null, label: "Todos", count: projects.length },
          ...categories.map(([category, count]) => ({ key: category, label: category, count })),
        ].map((filter) => (
          <button
            key={filter.label}
            type="button"
            aria-pressed={activeFilter === filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`border-2 px-3 py-1.5 font-mono text-xs uppercase transition-colors ${
              activeFilter === filter.key
                ? "border-azul bg-azul text-blanco"
                : "border-grafito text-grafito hover:bg-grafito hover:text-blanco"
            }`}
          >
            {filter.label} ({filter.count})
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
