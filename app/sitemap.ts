import type { MetadataRoute } from "next";
import { site } from "@/lib/data";
import { ledGuide } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: site.updated },
    { url: `${site.url}${ledGuide.path}`, lastModified: ledGuide.updated },
  ];
}
