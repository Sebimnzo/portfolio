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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="text-sm font-semibold tracking-wide text-white">
          {site.name}
        </Link>
        <ul className="flex items-center gap-6 text-sm text-white/70">
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
