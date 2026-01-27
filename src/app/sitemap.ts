import { MetadataRoute } from "next";

import { buildSitemap } from "@/lib/seo";

export const revalidate = 86400; // 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap(new Date());
}
