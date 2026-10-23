"use client";

import { useEffect, useRef, useState } from "react";
import { slowConnection } from "@/lib/connection";

// Video principal de la home: «Mansalva · qué hacemos» (55 s, 16:9, con voz).
// Arranca solo y en silencio (los navegadores no dejan autoplay con sonido) y
// en loop. «Activar sonido» lo vuelve al principio con audio y sin loop. Con
// "reducir movimiento" o conexión lenta no arranca solo: queda el póster con un
// botón de play.
// Va en 16:9 sin recortar, porque tiene textos en pantalla: ocupa el ancho
// completo salvo que no entre en el alto de la pantalla (debajo del banner y el
// menú fijos); ahí se achica y se centra para que se vea entero con su botón.
const SRC = "/videos/mansalva-que-hacemos";

type Mode = "muted" | "sound" | "ended" | "idle";

export default function HomeVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<Mode>("muted");

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    // React no siempre escribe el atributo muted en el HTML del servidor.
    v.muted = true;
    v.defaultMuted = true;
    // Con conexión lenta tampoco arranca solo: son 7 MB que la persona no pidió.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || slowConnection()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- depende del sistema y la conexión, que no existen en el servidor
      setMode("idle");
      return;
    }
    v.play().catch(() => setMode("idle"));
  }, []);

  function playWithSound() {
    const v = video.current;
    if (!v) return;
    v.loop = false;
    v.muted = false;
    v.currentTime = 0;
    v.play().catch(() => {});
    setMode("sound");
  }

  function mute() {
    const v = video.current;
    if (!v) return;
    v.muted = true;
    v.loop = true;
    setMode("muted");
  }

  const cta =
    "inline-flex min-h-12 items-center gap-2 border-2 border-blanco bg-azul px-5 text-sm font-extrabold uppercase tracking-wide text-blanco shadow-[0_6px_24px_rgb(0_0_0/0.25)] transition-colors hover:bg-cobalto";

  return (
    <section
      aria-label="Video: qué hacemos en Mansalva"
      className="relative w-full"
    >
      <div
        className="relative mx-auto w-full"
        style={{
          maxWidth: "calc((100svh - var(--banner-h, 0px) - 89px) * 16 / 9)",
        }}
      >
        <div className="relative aspect-video w-full bg-grafito">
          <video
            ref={video}
            className="absolute inset-0 h-full w-full object-contain"
            muted
            loop
            playsInline
            // "metadata" y no "none": así el navegador baja el video de a poco
            // mientras se ve, y no varios MB de golpe al arrancar.
            preload="metadata"
            poster={`${SRC}_poster_v14.jpg`}
            onEnded={() => setMode("ended")}
          >
            <source
              media="(max-width: 768px)"
              src={`${SRC}_web_1280x720_v14.mp4`}
              type="video/mp4"
            />
            <source src={`${SRC}_web_1920x1080_v14.webm`} type="video/webm" />
            <source src={`${SRC}_web_1920x1080_v14.mp4`} type="video/mp4" />
          </video>
        </div>

        {/* En celular el botón va debajo del video para no tapar los textos en pantalla. */}
        <div className="px-5 pt-3 sm:absolute sm:bottom-6 sm:left-6 sm:p-0">
          {mode === "muted" && (
            <button type="button" onClick={playWithSound} className={cta}>
              Activar sonido <span aria-hidden>→</span>
            </button>
          )}
          {mode === "idle" && (
            <button type="button" onClick={playWithSound} className={cta}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-4 fill-blanco"
              >
                <path d="M7 4v16l13-8z" />
              </svg>
              Ver con sonido
            </button>
          )}
          {mode === "ended" && (
            <button type="button" onClick={playWithSound} className={cta}>
              Volver a ver <span aria-hidden>→</span>
            </button>
          )}
          {mode === "sound" && (
            <button
              type="button"
              onClick={mute}
              className="inline-flex min-h-12 items-center border border-blanco/70 bg-grafito px-5 text-sm font-medium uppercase tracking-wide text-blanco backdrop-blur-sm transition-colors hover:bg-grafito/80 sm:bg-grafito/60"
            >
              Silenciar
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
