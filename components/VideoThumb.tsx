"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { loadYouTubeApi, type YouTubePlayer } from "@/lib/youtube";

// Miniatura del video; al tocarla se reemplaza por el reproductor de YouTube.
export default function VideoThumb({ project }: { project: Project }) {
  const playerContainerRef = useRef<HTMLDivElement>(null);
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

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-grafito">
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
              setThumbnailSrc(`https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`)
            }
            alt=""
            fill
            sizes="352px"
            className="object-cover transition-transform duration-500 group-hover/play:scale-[1.03]"
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
