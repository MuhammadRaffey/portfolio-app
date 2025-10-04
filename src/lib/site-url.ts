const FALLBACK_URL = "https://muhammadraffey.xyz";

/**
 * Normalises the public site URL so that generated metadata such as the
 * sitemap and robots.txt always reference a crawlable, canonical domain.
 */
export function getSiteUrl(): string {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.VERCEL_URL?.trim();

  if (!envUrl) {
    return FALLBACK_URL;
  }

  try {
    const hasProtocol = envUrl.startsWith("http://") || envUrl.startsWith("https://");
    const url = new URL(hasProtocol ? envUrl : `https://${envUrl}`);

    // Ensure we only return the origin (no trailing slash, query, or hash).
    return url.origin;
  } catch (error) {
    console.warn("Invalid site URL provided. Falling back to default.", error);
    return FALLBACK_URL;
  }
}

