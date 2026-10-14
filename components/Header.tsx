import Link from "next/link";
import Wordmark from "./Wordmark";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "#trabajos", label: "Trabajos" },
  { href: "#stands", label: "Stands" },
  { href: "#servicios", label: "Servicios" },
  { href: "#estudio", label: "Estudio" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-linea bg-blanco/95 backdrop-blur-sm">
      <nav className="relative mx-auto flex h-16 max-w-[1552px] items-center justify-between px-5 sm:h-[88px] sm:px-12">
        <Link href="#" aria-label="Mansalva, ir al inicio" className="text-grafito">
          <Wordmark className="text-2xl sm:text-[32px]" />
        </Link>
        <div className="flex items-center gap-3 md:gap-8">
          <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-azul">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="inline-flex min-h-12 items-center rounded bg-azul px-4 text-sm font-medium text-blanco transition-[background-color,transform] hover:bg-cobalto active:scale-[0.97]"
          >
            Hablemos <span aria-hidden>&nbsp;→</span>
          </a>
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}
