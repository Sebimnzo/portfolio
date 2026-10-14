"use client";

import { useRef, type ElementType, type PointerEvent, type ReactNode } from "react";

// Zona que sigue al puntero: publica --px y --py (de −1 a 1) para que los
// elementos de adentro se inclinen o se desplacen en 3D (clases .tilt-*).
// Solo con mouse o trackpad y sin "reducir movimiento"; en reposo vale 0.
export default function Tilt({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  function move(e: PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    el.style.setProperty("--py", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  }

  function leave() {
    ref.current?.style.setProperty("--px", "0");
    ref.current?.style.setProperty("--py", "0");
  }

  return (
    <Tag ref={ref} onPointerMove={move} onPointerLeave={leave} className={`tilt ${className}`}>
      {children}
    </Tag>
  );
}
