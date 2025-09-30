import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import ChatBot from "@/components/ChatBot";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Modern, beautiful font combination
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

// Fallback Inter for compatibility
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
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
        className={`${outfit.variable} ${jetbrainsMono.variable} ${inter.variable} font-sans scroll-smooth full-screen transition-colors duration-300`}
        style={{ overflowX: "hidden", maxWidth: "100vw" }}
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
