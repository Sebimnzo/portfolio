// "Trayectoria de movimiento" del diseño de Figma (trazo exportado tal cual,
// ver design/figma/trayectoria.svg). Se dibuja una vez al cargar la página:
// es el único movimiento automático del sitio.
export default function MotionPath({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 380 68"
      preserveAspectRatio="none"
      fill="none"
      overflow="visible"
      className={className}
    >
      <path
        className="motion-path"
        pathLength={1}
        d="M0 60.1724H35.3723C70.7447 60.1724 72.766 6.68965 115.213 6.68965C157.66 6.68965 158.67 67 202.128 67C245.585 67 246.596 14.6552 290.053 14.6552H380M0 51.069H35.3723C70.7447 51.069 72.766 1 115.213 1C157.66 1 158.67 57.8965 202.128 57.8965C245.585 57.8965 246.596 5.55172 290.053 5.55172H380"
        stroke="var(--azul)"
        strokeWidth="2"
      />
    </svg>
  );
}
