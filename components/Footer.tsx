import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
        <a href="#" className="hover:text-white/70">
          Volver arriba
        </a>
      </div>
    </footer>
  );
}
