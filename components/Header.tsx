import Link from "next/link";
import { site } from "@/lib/data";

const links = [
  { href: "#trabajos", label: "Trabajos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="#"
          className="whitespace-nowrap text-xs font-semibold tracking-wide text-white sm:text-sm"
        >
          <span className="sm:hidden">Sebastián M.</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <ul className="flex items-center gap-3 text-xs text-white/70 sm:gap-6 sm:text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
