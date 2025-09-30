import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Muhammad Raffey - Agentic AI Engineer",
  description:
    "Professional certifications and completed courses by Muhammad Raffey in Python, Django, and Web Development. View my academic achievements and continuous learning journey.",
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
