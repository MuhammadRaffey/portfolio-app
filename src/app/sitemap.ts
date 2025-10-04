import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use environment variable or fallback to the correct domain
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.muhammadraffey.xyz";

  // Ensure URLs are properly formatted
  const urls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/certificates`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  return urls;
}
