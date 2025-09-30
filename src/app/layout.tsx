import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ChatBot from "@/components/ChatBot";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "block", // kept as-is
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.muhammadraffey.xyz"
  ),
  title: "Muhammad Raffey | Agentic AI Engineer & Full-Stack Developer",
  description:
    "Agentic AI Engineer and Full-Stack Developer specializing in intelligent autonomous systems, multi-agent frameworks, and modern web applications. Expert in LangChain, OpenAI, React, Next.js, and AI-powered solutions.",
};

type RootLayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const theme = savedTheme || 'dark';
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} scroll-smooth full-screen transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
