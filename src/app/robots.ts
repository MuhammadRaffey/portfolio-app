import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://www.muhammadraffey.xyz/sitemap.xml",
    host: "https://www.muhammadraffey.xyz",
  };
}
