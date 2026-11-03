import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { entrega } from "@/lib/entregas";
import Entregas from "./Entregas";

const DESCRIPCION = "Las entregas de Mansalva, con su vista previa y su carpeta en Drive.";

// Página privada de entregas de un cliente: solo se llega con el link que manda
// Sebastián. No está enlazada en el sitio, ni en el sitemap, y no se indexa.
export async function generateMetadata({ params }: PageProps<"/entregas/[clave]">): Promise<Metadata> {
  const { clave } = await params;
  const e = await entrega(clave);
  const title = e ? `${e.cliente} · Entregas` : "Entregas";
  return {
    title,
    description: DESCRIPCION,
    robots: { index: false, follow: false, nocache: true },
    referrer: "no-referrer",
    alternates: { canonical: null },
    openGraph: { title, description: DESCRIPCION, url: null },
  };
}

export default async function Page({ params }: PageProps<"/entregas/[clave]">) {
  const { clave } = await params;
  const e = await entrega(clave);
  if (!e) notFound();
  return <Entregas entrega={e} />;
}
