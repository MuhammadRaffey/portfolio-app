"use client";
import React from "react";

import NavBar from "@/app/sections/NavBar";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Work from "@/app/sections/Work";
import Contact from "@/app/sections/Contact";
import AIStack from "@/app/sections/AIStack";

export default function Home() {
  return (
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
  );
}
