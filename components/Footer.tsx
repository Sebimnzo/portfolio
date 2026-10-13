import { site } from "@/lib/data";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="border-t border-blanco/10 bg-noche px-6 py-10 text-blanco">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Wordmark className="text-2xl" />
          <p className="mt-2 font-mono text-xs uppercase text-blanco/50">{site.claim}</p>
        </div>
        <div className="flex flex-col gap-2 font-mono text-xs uppercase text-blanco/50 sm:items-end">
          <a href="#" className="inline-flex items-center gap-2 transition-colors hover:text-azul-claro">
            <span aria-hidden>↑</span> Volver arriba
          </a>
          <p>
            © {new Date().getFullYear()} {site.name} — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
