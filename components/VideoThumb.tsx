"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { loadYouTubeApi, type YouTubePlayer } from "@/lib/youtube";

// Miniatura del video; al tocarla se reemplaza por el reproductor de YouTube.
// Los videos verticales se muestran enteros (miniatura 9:16 de YouTube), como
// se ven en un tótem o en el celular, en vez de recortados a 16:9.
export default function VideoThumb({ project }: { project: Project }) {
  const vertical = project.orientation === "vertical";
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState(
    `https://i.ytimg.com/vi/${project.youtubeId}/${vertical ? "oardefault" : "maxresdefault"}.jpg`
  );
  const format = vertical ? "video vertical 9:16" : "video horizontal 16:9";
  const label = `Reproducir ${project.title}: ${format}, ${project.category}${
    project.detail ? `, ${project.detail}` : ""
  }`;

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

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-grafito">
      {isPlaying ? (
        <div ref={playerContainerRef} className="h-full w-full" />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={label}
          className="group/play relative block h-full w-full cursor-pointer"
        >
          <Image
            src={thumbnailSrc}
            onError={() =>
              setThumbnailSrc(`https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`)
            }
            alt={project.description}
            fill
            sizes={vertical ? "112px" : "352px"}
            className={`transition-transform duration-500 group-hover/play:scale-[1.03] ${
              vertical ? "object-contain" : "object-cover"
            }`}
          />
          <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center bg-azul opacity-0 transition-opacity group-hover/play:opacity-100 group-focus-visible/play:opacity-100">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-0.5 h-5 w-5 fill-blanco">
              <path d="M7 4v16l13-8z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
