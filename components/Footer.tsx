import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-cream/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 font-semibold uppercase tracking-wide hover:text-cream"
        >
          <span aria-hidden>↑</span> Volver arriba
        </a>
      </div>
    </footer>
  );
}
