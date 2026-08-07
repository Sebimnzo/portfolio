"use client";

import { useRef, useState, type MouseEvent } from "react";
import type { Project } from "@/lib/data";

const MAX_TILT_DEG = 8;

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (0.5 - py) * MAX_TILT_DEG,
      y: (px - 0.5) * MAX_TILT_DEG,
    });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  const isVertical = project.orientation === "vertical";
  const frameClasses = isVertical
    ? "aspect-[9/16] mx-auto w-full max-w-64 overflow-hidden bg-black"
    : "aspect-video w-full overflow-hidden bg-black";

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out, border-color 0.2s ease-out",
      }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 will-change-transform hover:border-white/20"
    >
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
