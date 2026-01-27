import type { Metadata } from "next";

import { getCanonicalUrl } from "@/lib/seo";

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  title: "Certifications | Muhammad Raffey - Agentic AI Engineer",
  description:
    "Professional certifications and completed courses by Muhammad Raffey in Python, Django, and Web Development. View my academic achievements and continuous learning journey.",
  alternates: {
    canonical: `${canonicalUrl}/certificates`,
  },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
