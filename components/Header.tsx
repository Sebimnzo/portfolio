import Link from "next/link";
import { site } from "@/lib/data";

const links = [
  { href: "#trabajos", label: "Trabajos", index: "01" },
  { href: "#sobre-mi", label: "Estudio", index: "02" },
  { href: "#contacto", label: "Contacto", index: "03" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="#"
          translate="no"
          className="whitespace-nowrap font-display text-sm tracking-wide text-white sm:text-base"
        >
          {site.name}
        </Link>
        <ul className="flex items-center gap-3 text-xs text-white/70 sm:gap-6 sm:text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex items-baseline gap-1 whitespace-nowrap transition-colors hover:text-white"
              >
                <span className="hidden text-white/40 sm:inline">{link.index}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
