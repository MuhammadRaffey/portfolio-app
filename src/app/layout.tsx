import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ChatBot from "@/components/ChatBot";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://raffey-portfolio.vercel.app"
  ),
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
    "Portfolio",
    "Muhammad Raffey",
    "AI Developer",
    "LLM Integration",
    "Modern Web Development",
    "TypeScript Expert",
    "AI Solutions",
  ],
  authors: [{ name: "Muhammad Raffey" }],
  creator: "Muhammad Raffey",
  publisher: "Muhammad Raffey",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url:
      process.env.NEXT_PUBLIC_SITE_URL || "https://raffey-portfolio.vercel.app",
    title: "Muhammad Raffey | Agentic AI Engineer & Full-Stack Developer",
    description:
      "Agentic AI Engineer and Full-Stack Developer specializing in intelligent autonomous systems, multi-agent frameworks, and modern web applications. Expert in LangChain, OpenAI, React, Next.js, and AI-powered solutions.",
    siteName: "Muhammad Raffey - Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Raffey - Agentic AI Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Raffey | Agentic AI Engineer & Full-Stack Developer",
    description:
      "Agentic AI Engineer and Full-Stack Developer specializing in intelligent autonomous systems and modern web applications.",
    images: ["/og-image.png"],
    creator: "@MuhammadRaffey",
  },
  verification: {
    google: "google711920762e979762",
  },
  alternates: {
    canonical: "https://raffey-portfolio.vercel.app",
  },
  category: "Technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Raffey",
    url:
      process.env.NEXT_PUBLIC_SITE_URL || "https://raffey-portfolio.vercel.app",
    jobTitle: "Agentic AI Engineer & Full-Stack Developer",
    description:
      "Agentic AI Engineer and Full-Stack Developer specializing in intelligent autonomous systems, multi-agent frameworks, and modern web applications.",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "LangChain",
      "OpenAI",
      "Multi-Agent Systems",
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Full-Stack Development",
      "Web Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "AI Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "Pakistan",
      },
      skills: [
        "Agentic AI Development",
        "Multi-Agent Systems",
        "LangChain",
        "OpenAI API Integration",
        "React Development",
        "Next.js",
        "TypeScript",
        "Python Programming",
        "Full-Stack Development",
      ],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        process.env.NEXT_PUBLIC_SITE_URL ||
        "https://raffey-portfolio.vercel.app",
    },
    sameAs: [
      "https://github.com/MuhammadRaffey",
      "https://linkedin.com/in/muhammad-raffey",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
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
