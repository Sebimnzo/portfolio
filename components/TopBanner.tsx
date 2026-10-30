"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { slowConnection } from "@/lib/connection";

// Banner animado de arriba de todo: loop de 13,6 s sin audio. El navegador elige
// una sola versión según el ancho (1800×100 en escritorio, 1080×180 hasta
// 767 px), WebM primero y MP4 de respaldo. Mientras carga, y con "reducir
// movimiento" o conexión lenta, se ve el póster quieto (estilos en globals.css,
// .top-banner).
// En compu (desde 768 px) queda fijo arriba junto con el menú; su alto se
// publica en --banner-h para que el menú se pegue justo debajo.
const MOBILE = "(max-width: 767px)";

export default function TopBanner() {
  // Las páginas de revisión para clientes (/revision/…) van sin banner.
  const oculto = usePathname()?.startsWith("/revision/") ?? false;
  const video = useRef<HTMLVideoElement>(null);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const root = document.documentElement;
    const sync = () => root.style.setProperty("--banner-h", `${el.offsetHeight}px`);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    // React no siempre escribe el atributo muted en el HTML del servidor y
    // algunos navegadores solo hacen autoplay si el video está silenciado.
    v.muted = true;
    v.defaultMuted = true;
    // Arranca desde acá y no con autoPlay en el HTML: con "reducir movimiento"
    // o conexión lenta no se descarga nada y queda el póster.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const still = () => reduce.matches || slowConnection();
    const start = () => {
      v.preload = "auto";
      v.play().catch(() => {});
    };
    if (!still()) start();

    // Al cruzar el corte de 767 px (girar el teléfono, achicar la ventana)
    // se carga la otra versión. El evento "resize" es un respaldo para los
    // navegadores que no avisan el cambio de la media query.
    const mobile = window.matchMedia(MOBILE);
    let wasMobile = mobile.matches;
    const swap = () => {
      if (mobile.matches === wasMobile) return;
      wasMobile = mobile.matches;
      if (still()) return;
      v.load();
      start();
    };
    mobile.addEventListener("change", swap);
    window.addEventListener("resize", swap);
    return () => {
      mobile.removeEventListener("change", swap);
      window.removeEventListener("resize", swap);
    };
  }, []);

  if (oculto) return null;

  return (
    <div
      ref={box}
      className="top-banner"
      role="img"
      aria-label="Mansalva: pantallas LED, videowalls, animación 3D y loops sin corte. Nada se queda quieto."
    >
      <video ref={video} muted loop playsInline preload="none" aria-hidden="true">
        <source media={MOBILE} src="/videos/mansalva-banner_1080x180_v2.webm" type="video/webm" />
        <source media={MOBILE} src="/videos/mansalva-banner_1080x180_v2.mp4" type="video/mp4" />
        <source src="/videos/mansalva-banner_1800x100_v2.webm" type="video/webm" />
        <source src="/videos/mansalva-banner_1800x100_v2.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
