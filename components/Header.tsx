import Link from "next/link";
import Wordmark from "./Wordmark";

const links = [
  { href: "#trabajos", label: "Trabajos", index: "01" },
  { href: "#sobre-mi", label: "Estudio", index: "02" },
  { href: "#contacto", label: "Contacto", index: "03" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b-2 border-grafito bg-blanco">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="#" aria-label="Mansalva, ir al inicio" className="text-grafito">
          <Wordmark className="text-lg sm:text-xl" />
        </Link>
        <ul className="flex items-center gap-4 font-mono text-xs uppercase text-grafito/70 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex items-baseline gap-1.5 whitespace-nowrap transition-colors hover:text-azul"
              >
                <span className="hidden text-azul sm:inline">{link.index}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
