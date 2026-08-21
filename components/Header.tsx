import Link from "next/link";
import { site } from "@/lib/data";

const links = [
  { href: "#trabajos", label: "Trabajos", index: "01" },
  { href: "#sobre-mi", label: "Sobre mí", index: "02" },
  { href: "#contacto", label: "Contacto", index: "03" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="#"
          className="flex items-center gap-1.5 whitespace-nowrap text-xs font-bold uppercase text-ink sm:gap-2 sm:text-sm sm:tracking-wide"
        >
          <svg viewBox="0 0 32 32" className="hidden h-6 w-6 shrink-0 sm:block" aria-hidden="true">
            <circle cx="11" cy="16" r="9" fill="var(--color-rust)" />
            <polygon points="24,4 32,28 16,28" fill="var(--color-teal)" />
          </svg>
          <span className="sm:hidden">Sebastián M.</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <ul className="flex items-center gap-2 text-xs font-semibold uppercase text-ink/70 sm:gap-6 sm:text-sm sm:tracking-wide">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex items-baseline gap-1 whitespace-nowrap transition-colors hover:text-rust"
              >
                <span className="text-rust/70">{link.index}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
