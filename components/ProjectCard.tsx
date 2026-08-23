"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { loadYouTubeApi, type YouTubePlayer } from "@/lib/youtube";

const MAX_TILT_DEG = 8;

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState(
    `https://i.ytimg.com/vi/${project.youtubeId}/maxresdefault.jpg`
  );

  useEffect(() => {
    if (!isPlaying || !playerContainerRef.current) return;
    let player: YouTubePlayer | undefined;
    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled || !playerContainerRef.current) return;
      player = new YT.Player(playerContainerRef.current, {
        videoId: project.youtubeId,
        playerVars: { autoplay: 1, playsinline: 1, cc_load_policy: 0 },
        events: {
          onReady: (event) => {
            event.target.setPlaybackQuality("hd1080");
            event.target.playVideo();
          },
        },
      });
    });

    return () => {
      cancelled = true;
      player?.destroy();
    };
  }, [isPlaying, project.youtubeId]);

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
    ? "aspect-[9/16] mx-auto w-full max-w-64 bg-black"
    : "aspect-video w-full bg-black";

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out, border-color 0.2s ease-out",
      }}
      className="group overflow-visible rounded-2xl border border-white/10 bg-white/5 will-change-transform hover:border-white/20"
    >
      <div className={`${frameClasses} relative`}>
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl bg-black transition-[inset,box-shadow] duration-300 ease-out motion-safe:lg:hover:z-30 motion-safe:lg:hover:inset-[-40px] motion-safe:lg:hover:shadow-2xl motion-safe:lg:hover:shadow-black/60"
        >
          {isPlaying ? (
            <div ref={playerContainerRef} className="h-full w-full" />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label={`Reproducir ${project.title}`}
              className="group/play relative block h-full w-full cursor-pointer"
            >
              <Image
                src={thumbnailSrc}
                onError={() =>
                  setThumbnailSrc(
                    `https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`
                  )
                }
                alt={project.title}
                fill
                loading="lazy"
                sizes={isVertical ? "384px" : "(min-width: 768px) 75vw, 100vw"}
                className="object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover/play:bg-black/35">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 transition-transform group-hover/play:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-black">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
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
