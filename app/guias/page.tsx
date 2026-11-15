import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Guides from "@/components/Guides";
import { shareImage, site } from "@/lib/data";

// Índice de las guías. La home ya no las muestra; Google las encuentra desde acá
// (el menú y el pie enlazan a /guias, y esta página enlaza a cada una).
const title = "Guías para stands de feria y pantallas LED — Mansalva";
const description =
  "Guías para armar el stand: pantallas LED, videowalls, tótems, loops sin sonido y cómo atraer gente. Escritas para quien arma el stand, no para técnicos.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/guias" },
  openGraph: {
    title,
    description,
    url: "/guias",
    siteName: site.name,
    locale: "es_AR",
    type: "website",
    images: [shareImage],
  },
  twitter: { card: "summary_large_image", images: [shareImage.url] },
};

export default function GuiasIndex() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Guides asH1 />
      </main>
      <Footer />
    </>
  );
}
