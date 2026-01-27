import React from "react";

import NavBar from "@/app/sections/NavBar";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Work from "@/app/sections/Work";
import AIStack from "@/app/sections/AIStack";
import Footer from "@/app/sections/Footer";
import ScrollRestoration from "@/components/ScrollRestoration";
import { getCanonicalUrl, getOgImageUrl } from "@/lib/seo";

import type { Metadata } from "next";

const canonicalUrl = getCanonicalUrl();
const ogImageUrl = getOgImageUrl();

export const metadata: Metadata = {
  title:
    "Muhammad Raffey | AI Engineer Portfolio - Agentic AI & Full-Stack Development",
  description:
    "Explore the portfolio of Muhammad Raffey, an Agentic AI Engineer specializing in multi-agent systems, LangChain, OpenAI, and modern web development with React and Next.js.",
  openGraph: {
    title: "Muhammad Raffey | AI Engineer Portfolio",
    description:
      "Agentic AI Engineer portfolio featuring AI-powered applications, multi-agent systems, and modern web development projects.",
    url: canonicalUrl,
    siteName: "Muhammad Raffey",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Muhammad Raffey - Agentic AI Engineer Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Raffey | AI Engineer Portfolio",
    description:
      "Agentic AI Engineer portfolio featuring AI-powered applications, multi-agent systems, and modern web development projects.",
    images: [ogImageUrl],
  },
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function Home() {
  const siteUrl = getCanonicalUrl();
  const personId = `${siteUrl}#person`;
  const websiteId = `${siteUrl}#website`;
  const profilePageId = `${siteUrl}#profile`;
  const projectsId = `${siteUrl}#projects`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Muhammad Raffey",
        url: siteUrl,
        image: ogImageUrl,
        jobTitle: "Agentic AI Engineer & Full-Stack Developer",
        sameAs: ["https://github.com/MuhammadRaffey"],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: "Muhammad Raffey - Portfolio",
        description:
          "Portfolio website of Muhammad Raffey, an Agentic AI Engineer and Full-Stack Developer",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: siteUrl,
        name: "Muhammad Raffey | AI Engineer Portfolio",
        description:
          "Agentic AI Engineer portfolio featuring AI-powered applications, multi-agent systems, and modern web development projects.",
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: ogImageUrl,
      },
      {
        "@type": "ItemList",
        "@id": projectsId,
        name: "Featured AI Projects",
        numberOfItems: 3,
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Replace "<" to avoid XSS parsing issues in inline JSON-LD.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div
        className="min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 transition-colors duration-300"
        style={{ overflowX: "hidden", maxWidth: "100vw" }}
      >
        <ScrollRestoration />
        <NavBar />
        <main
          className="relative w-full overflow-hidden"
          style={{ overflowX: "hidden" }}
        >
          <Hero />
          <About />
          <AIStack />
          <Work />
        </main>
        <Footer />
      </div>
    </>
  );
}
