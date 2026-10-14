"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";
import Tilt from "./Tilt";
import VideoModal from "./VideoModal";

// Trabajos relacionados en las páginas de servicio: tarjetas que se inclinan
// con el puntero y abren el video en la ventana modal.
export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [playing, setPlaying] = useState<Project | null>(null);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {projects.map((p) => (
          <Tilt as="li" key={p.slug}>
            <button
              type="button"
              onClick={() => setPlaying(p)}
              aria-label={`Reproducir ${p.title}`}
              className="tilt-rotate group/card block w-full text-left [--tilt:8deg]"
            >
              <span className="relative block aspect-[3/4] overflow-hidden rounded-[18px] bg-grafito">
                <Image
                  src={`https://i.ytimg.com/vi/${p.youtubeId}/${p.orientation === "vertical" ? "oardefault" : "maxresdefault"}.jpg`}
                  alt={p.description}
                  fill
                  sizes="(min-width: 1024px) 300px, 45vw"
                  className="object-cover transition-transform duration-500 group-hover/card:scale-[1.04]"
                />
                <span className="absolute bottom-3 left-3 flex size-10 items-center justify-center bg-azul">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-0.5 size-5 fill-blanco">
                    <path d="M7 4v16l13-8z" />
                  </svg>
                </span>
              </span>
              <span className="mt-3 block text-[15px] font-extrabold leading-[1.2]">{p.title}</span>
              <span className="mt-1 block text-[13px] text-gris">{p.category}</span>
            </button>
          </Tilt>
        ))}
      </ul>
      <VideoModal project={playing} onClose={() => setPlaying(null)} />
    </>
  );
}
