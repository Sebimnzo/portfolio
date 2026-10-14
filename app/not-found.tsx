import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada — Mansalva",
  // Sin canonical: si no, hereda el de la home.
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex w-full max-w-[1552px] flex-1 flex-col justify-center gap-6 px-5 py-24 sm:px-12">
      <p className="font-mono text-[11px] uppercase text-gris">Error 404</p>
      <h1 className="text-[clamp(2.5rem,7vw,84px)] font-black uppercase leading-[0.93] tracking-[-0.045em]">
        Esta página no existe.
      </h1>
      <Link
        href="/"
        className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul hover:text-cobalto"
      >
        <span aria-hidden className="h-[3px] w-8 bg-azul" />
        Volver al inicio
      </Link>
    </main>
  );
}
