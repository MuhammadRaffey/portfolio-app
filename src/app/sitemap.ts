import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Normalize base URL and enforce canonical trailing slash on root
  const rawBaseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.muhammadraffey.xyz";
  const normalizedBaseUrl = rawBaseUrl.replace(/\/+$/, "");
  const canonicalRootUrl = `${normalizedBaseUrl}/`;

  // W3C Datetime via Date object; Next will serialize to ISO 8601
  const lastModifiedDate = new Date();

  // Important: Sitemaps must not include fragment identifiers (#...).
  // Only include canonical crawlable URLs from a single host.
  return [
    {
      url: canonicalRootUrl,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
