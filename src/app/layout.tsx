import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ChatBot from "@/components/ChatBot";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Muhammad Raffey | Agentic AI Engineer & Full-Stack Developer",
  description:
    "Agentic AI Engineer and Full-Stack Developer specializing in intelligent autonomous systems, multi-agent frameworks, and modern web applications. Expert in LangChain, OpenAI, React, Next.js, and AI-powered solutions.",
  keywords: [
    "Agentic AI",
    "AI Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Machine Learning",
    "LangChain",
    "OpenAI",
    "Multi-Agent Systems",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Artificial Intelligence",
  ],
  authors: [{ name: "Muhammad Raffey" }],
  openGraph: {
    title: "Muhammad Raffey | Agentic AI Engineer & Full-Stack Developer",
    description:
      "Agentic AI Engineer and Full-Stack Developer specializing in intelligent autonomous systems and modern web applications.",
    type: "website",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} scroll-smooth full-screen transition-colors duration-300`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          {children}
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
