import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import TopBanner from "@/components/TopBanner";
import { site } from "@/lib/data";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seoTitle,
  description: site.description,
  authors: [{ name: site.founder.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: site.seoTitle,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  // El iPhone convierte en teléfono cualquier número largo ("3840 × 2160");
  // en la web no hay teléfonos escritos: el contacto va por mail y WhatsApp.
  formatDetection: { telephone: false },
  other: {
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-grafito">
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        {/* Banner animado arriba de todo; la barra de navegación queda fija debajo al bajar */}
        <TopBanner />
        {children}
        {/* Métricas de usuarios reales (LCP, INP, CLS): se activan en el panel de Vercel */}
        <SpeedInsights />
        {/* Visitas por página y el evento cta_contacto de las guías (components/GuideCta.tsx) */}
        <Analytics />
      </body>
    </html>
  );
}
