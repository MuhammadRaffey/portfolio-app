"use client";
import { ReactLenis } from "lenis/react";
import React, { useEffect } from "react";

import PreLoader from "@/components/other/PreLoader";
import useBlobity from "@/components/blobity/useBlobity";

import Blur from "@/components/overlay/Blur";
import Color from "@/components/overlay/Color";

import NavBar from "@/app/sections/NavBar";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Work from "@/app/sections/Work";
import Contact from "@/app/sections/Contact";
import Tools from "@/app/sections/Tools";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  useBlobity({
    licenseKey: "opensource",
    focusableElementsOffsetX: 4,
    focusableElementsOffsetY: 4,
    color: "#ffffff",
    dotColor: "#ffffff",
    invert: true,
    focusableElements:
      "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
    font: "'Inter', sans-serif",
    fontSize: 16,
    fontWeight: 900,
    opacity: 1.0,
    fontColor: "#ffffff",
    zIndex: 35,
    size: 50,
    radius: 5,
    magnetic: false,
  });

  return (
    <>
      <PreLoader />
      <ReactLenis root>
        <Blur />
        <Color />
        <NavBar />
        <main className="flex flex-col items-center justify-center bg-black">
          <Hero />
          <About />
          <Work />
          <Tools />
          <Contact />
        </main>
      </ReactLenis>
    </>
  );
}
