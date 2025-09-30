import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Muhammad Raffey - Agentic AI Engineer",
  description:
    "Get in touch with Muhammad Raffey for AI engineering projects, full-stack development, and collaboration opportunities. Download CV and connect via email or LinkedIn.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
