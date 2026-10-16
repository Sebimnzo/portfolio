import type { MetadataRoute } from "next";
import { site } from "@/lib/data";
import { guides } from "@/lib/guides";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: site.updated },
    ...services.map((s) => ({ url: `${site.url}/${s.slug}`, lastModified: site.updated })),
    ...guides.map((g) => ({ url: `${site.url}${g.path}`, lastModified: g.updated })),
  ];
}
