import { MetadataRoute } from "next";

import { getCanonicalUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getCanonicalUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Do not block Next.js assets; Google needs them to render the page.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
