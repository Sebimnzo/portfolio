"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Menú del celular: en pantallas chicas los enlaces del header no entran.
export default function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-movil"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen(!open)}
        className="flex size-12 flex-col items-center justify-center gap-[6px]"
      >
        <span
          className={`h-[2px] w-6 bg-grafito transition-transform ${open ? "translate-y-[4px] rotate-45" : ""}`}
        />
        <span
          className={`h-[2px] w-6 bg-grafito transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
        />
      </button>
      <ul
        id="menu-movil"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-linea bg-blanco px-5 pb-4"
      >
        {links.map((link) => (
          <li key={link.href} className="border-t border-linea first:border-t-0">
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center justify-between text-lg font-extrabold"
            >
              {link.label} <span aria-hidden className="text-azul">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
