import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pieza } from "@/lib/revision";
import Revision from "./Revision";
import "./revision.css";

// Página privada de revisión para un cliente: solo se llega con el link que
// manda Sebastián. No está enlazada en el sitio, ni en el sitemap, y no se indexa.
export const metadata: Metadata = {
  title: "Revisión · Mansalva",
  robots: { index: false, follow: false, nocache: true },
  referrer: "no-referrer",
};

export default async function Page({ params }: PageProps<"/revision/[clave]">) {
  const { clave } = await params;
  const p = await pieza(clave);
  if (!p) notFound();
  return <Revision clave={clave} pieza={p} />;
}
