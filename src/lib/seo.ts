import type { Metadata, MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

export const seoRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/certificates", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
] as const satisfies ReadonlyArray<{
  path: "" | "/certificates" | "/contact";
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

export const getCanonicalUrl = (): string => getSiteUrl();

export const getMetadataBase = (): URL => new URL(getCanonicalUrl());

export const getOgImageUrl = (): string => `${getCanonicalUrl()}/pic.png`;

export const getDefaultMetadata = (): Pick<Metadata, "metadataBase" | "title" | "description"> => ({
  metadataBase: getMetadataBase(),
  title: "Muhammad Raffey | Agentic AI Engineer & Full-Stack Developer",
  description:
    "Agentic AI Engineer and Full-Stack Developer specializing in intelligent autonomous systems, multi-agent frameworks, and modern web applications. Expert in LangChain, OpenAI, React, Next.js, and AI-powered solutions.",
});

export const buildSitemap = (
  lastModified: string | Date = new Date()
): MetadataRoute.Sitemap => {
  const canonicalUrl = getCanonicalUrl();
  const lastModifiedIso =
    typeof lastModified === "string" ? lastModified : lastModified.toISOString();

  return seoRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${canonicalUrl}${path}`,
    lastModified: lastModifiedIso,
    changeFrequency,
    priority,
  }));
};

