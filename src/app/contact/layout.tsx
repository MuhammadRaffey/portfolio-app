import type { Metadata } from "next";

import { getCanonicalUrl } from "@/lib/seo";

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  title: "Contact | Muhammad Raffey - Agentic AI Engineer",
  description:
    "Get in touch with Muhammad Raffey for AI engineering projects, full-stack development, and collaboration opportunities. Download CV and connect via email or LinkedIn.",
  alternates: {
    canonical: `${canonicalUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
