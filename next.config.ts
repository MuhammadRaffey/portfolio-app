import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Enable compression for better performance
  compress: true,

  // Optimize images
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable experimental features for better SEO
  experimental: {
    // optimizeCss: true, // Disabled due to critters dependency issue
  },

  // Headers for better SEO and security
  async headers() {
    return [
      {
        // Apply security headers to all routes except sitemap and robots
        source: "/:path((?!sitemap-0\\.xml|robots\\.txt).*)*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        // Specific headers for sitemap to ensure proper XML delivery
        source: "/sitemap-0.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
      {
        // Specific headers for robots.txt
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
    ];
  },

  // Additional optimizations
  poweredByHeader: false,
};

export default nextConfig;
