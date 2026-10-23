import Link from "next/link";
import Wordmark from "./Wordmark";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/#trabajos", label: "Trabajos" },
  { href: "/#stands", label: "Stands" },
  { href: "/#paquetes", label: "Paquetes" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#estudio", label: "Estudio" },
  { href: "/#guias", label: "Guías" },
];

export default function Header() {
  return (
    // site-header: en compu con pantalla alta queda pegado debajo del banner (globals.css).
    <header className="site-header sticky top-0 z-50 border-b border-linea bg-blanco/95 backdrop-blur-sm">
      <nav className="relative mx-auto flex h-16 max-w-[1552px] items-center justify-between px-5 sm:h-[88px] sm:px-12">
        <Link href="/" aria-label="Mansalva, ir al inicio" className="inline-flex min-h-12 items-center text-grafito">
          {/* En celulares de 320 px el logo se achica para que entren el botón y el menú */}
          <Wordmark className="text-xl min-[360px]:text-2xl sm:text-[32px]" />
        </Link>
        <div className="flex items-center gap-2 min-[360px]:gap-3 lg:gap-8">
          <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-12 min-w-11 items-center justify-center transition-colors hover:text-azul">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contacto"
            className="inline-flex min-h-12 items-center rounded bg-azul px-3 text-sm font-medium text-blanco transition-[background-color,transform] hover:bg-cobalto active:scale-[0.97] min-[360px]:px-4"
          >
            Hablemos <span aria-hidden className="hidden min-[360px]:inline">&nbsp;→</span>
          </Link>
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}
