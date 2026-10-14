import type { MetadataRoute } from "next";
import { site } from "@/lib/data";
import { ledGuide } from "@/lib/guides";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: site.updated },
    ...services.map((s) => ({ url: `${site.url}/${s.slug}`, lastModified: site.updated })),
    { url: `${site.url}${ledGuide.path}`, lastModified: ledGuide.updated },
  ];
}
