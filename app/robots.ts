import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    // /revision/… y /entregas/… son páginas privadas para clientes: se entra solo con el link.
    rules: { userAgent: "*", allow: "/", disallow: ["/revision/", "/entregas/", "/api/"] },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
