import type { NextConfig } from "next";

// La CSP solo va en producción: en desarrollo React necesita eval.
// YouTube: el reproductor se carga con la IFrame API (script + iframe).
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.youtube.com https://s.ytimg.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://i.ytimg.com",
  "font-src 'self'",
  // Videos de las páginas de revisión (/revision/…), en el almacenamiento de Vercel.
  "media-src 'self' https://*.public.blob.vercel-storage.com",
  "connect-src 'self'",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Vercel agrega "Access-Control-Allow-Origin: *" por defecto; se limita al
  // propio dominio porque ninguna otra web necesita leer estas respuestas.
  { key: "Access-Control-Allow-Origin", value: "https://www.mansalvadesign.com" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Content-Security-Policy", value: csp }]
    : []),
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Las direcciones *.vercel.app de producción muestran el mismo sitio:
  // redirigen al dominio para que Google no indexe una copia. Las vistas
  // previas (VERCEL_ENV=preview) no se tocan, así se pueden seguir probando.
  async redirects() {
    if (process.env.VERCEL_ENV !== "production") return [];
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        destination: "https://www.mansalvadesign.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
