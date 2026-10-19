"use client";

import { useEffect, useRef } from "react";

// Banner animado de arriba de todo: loop de 15 s sin audio. El navegador elige
// una sola versión según el ancho (1800×200 en escritorio, 1080×360 hasta
// 767 px), WebM primero y MP4 de respaldo. Mientras carga, y con "reducir
// movimiento", se ve el póster quieto (estilos en globals.css, .top-banner).
const MOBILE = "(max-width: 767px)";

export default function TopBanner() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    // React no siempre escribe el atributo muted en el HTML del servidor y
    // algunos navegadores solo hacen autoplay si el video está silenciado.
    v.muted = true;
    v.defaultMuted = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) v.pause();
    else v.play().catch(() => {});

    // Al cruzar el corte de 767 px (girar el teléfono, achicar la ventana)
    // se carga la otra versión.
    const mobile = window.matchMedia(MOBILE);
    const swap = () => {
      v.load();
      if (!reduce.matches) v.play().catch(() => {});
    };
    mobile.addEventListener("change", swap);
    return () => mobile.removeEventListener("change", swap);
  }, []);

  return (
    <div
      className="top-banner"
      role="img"
      aria-label="Mansalva: pantallas LED, videowalls, animación 3D y loops sin corte. Nada se queda quieto."
    >
      <video ref={video} autoPlay muted loop playsInline preload="auto" aria-hidden="true">
        <source media={MOBILE} src="/videos/mansalva-banner_1080x360_v1.webm" type="video/webm" />
        <source media={MOBILE} src="/videos/mansalva-banner_1080x360_v1.mp4" type="video/mp4" />
        <source src="/videos/mansalva-banner_1800x200_v1.webm" type="video/webm" />
        <source src="/videos/mansalva-banner_1800x200_v1.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
