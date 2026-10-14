"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/lib/data";
import { loadYouTubeApi, type YouTubePlayer } from "@/lib/youtube";

// Reproductor en ventana modal: el carrusel está en perspectiva y un video
// adentro de una tarjeta girada se vería deformado. Esc o clic afuera cierra.
export default function VideoModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !project) return;
    dialog.showModal();
    document.documentElement.style.overflow = "hidden";

    let player: YouTubePlayer | undefined;
    let cancelled = false;
    loadYouTubeApi().then((YT) => {
      if (cancelled || !playerRef.current) return;
      player = new YT.Player(playerRef.current, {
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
      document.documentElement.style.overflow = "";
      if (dialog.open) dialog.close();
    };
  }, [project]);

  const vertical = project?.orientation === "vertical";

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-label={project ? `Video: ${project.title}` : undefined}
      className="video-dialog m-auto max-h-none max-w-none overflow-visible bg-transparent p-0"
    >
      {project && (
        <div className="flex flex-col items-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="min-h-12 px-2 text-sm font-medium text-blanco hover:text-azul-claro"
          >
            Cerrar <span aria-hidden>✕</span>
          </button>
          <div
            className={`overflow-hidden rounded-[18px] bg-grafito ${
              vertical
                ? "aspect-[9/16] h-[min(80vh,860px)] max-w-[92vw]"
                : "aspect-video w-[min(92vw,1100px)]"
            }`}
          >
            {/* La IFrame API reemplaza este div por el iframe del reproductor */}
            <div key={project.youtubeId} ref={playerRef} className="h-full w-full" />
          </div>
          {/* Mismo texto y jerarquía que sobre la tarjeta del carrusel */}
          <div className="flex flex-col gap-1 self-start text-blanco">
            <p className="text-[17px] font-extrabold leading-[1.15]">{project.title}</p>
            <p className="max-w-[60ch] text-[13px] leading-[1.35] text-blanco/80">{project.description}</p>
          </div>
        </div>
      )}
    </dialog>
  );
}
