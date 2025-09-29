import React from "react";

import NavBar from "@/app/sections/NavBar";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Work from "@/app/sections/Work";
import Contact from "@/app/sections/Contact";
import AIStack from "@/app/sections/AIStack";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Muhammad Raffey | AI Engineer Portfolio - Agentic AI & Full-Stack Development",
  description:
    "Explore the portfolio of Muhammad Raffey, an Agentic AI Engineer specializing in multi-agent systems, LangChain, OpenAI, and modern web development with React and Next.js.",
  openGraph: {
    title: "Muhammad Raffey | AI Engineer Portfolio",
    description:
      "Agentic AI Engineer portfolio featuring AI-powered applications, multi-agent systems, and modern web development projects.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Raffey - Portfolio",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.muhammadraffey.xyz",
    description:
      "Portfolio website of Muhammad Raffey, an Agentic AI Engineer and Full-Stack Developer",
    author: {
      "@type": "Person",
      name: "Muhammad Raffey",
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Projects",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          name: "AI Interview Buddy",
          description:
            "AI-powered platform for interview practice with real-time feedback",
          url: "https://raffeys-ai-interview-buddy.vercel.app/interview",
          applicationCategory: "AI Application",
          operatingSystem: "Web Browser",
        },
        {
          "@type": "SoftwareApplication",
          name: "AI Meeting Summarizer",
          description: "Real-time meeting transcription and summarization tool",
          url: "https://ai-meeting-summarizer.vercel.app/",
          applicationCategory: "AI Application",
          operatingSystem: "Web Browser",
        },
        {
          "@type": "SoftwareApplication",
          name: "Mood Shaiari",
          description: "AI-powered Urdu poetry generator based on emotions",
          url: "https://mood-shaiari.vercel.app/",
          applicationCategory: "AI Application",
          operatingSystem: "Web Browser",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 transition-colors duration-300">
        <NavBar />
        <main className="relative w-full">
          <Hero />
          <About />
          <AIStack />
          <Work />
          <Contact />
        </main>
      </div>
    </>
  );
}
