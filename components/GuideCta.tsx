"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";
import { site } from "@/lib/data";

// Enlace de contacto de las guías. Registra en Vercel Analytics qué artículo
// generó el clic, para saber cuál trae contactos.
export default function GuideCta({
  slug,
  className,
  children,
}: {
  slug: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={`mailto:${site.email}`}
      className={className}
      onClick={() => track("cta_contacto", { articulo: slug })}
    >
      {children}
    </a>
  );
}
