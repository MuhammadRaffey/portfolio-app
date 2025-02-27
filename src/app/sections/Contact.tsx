"use client";
import Link from "next/link";
import { inter } from "../fonts/inter";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords from "../animations/AnimatedWords";
import { motion } from "framer-motion";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

const Contact = () => {
  return (
    <motion.section
      className="relative z-20 flex min-h-screen w-full flex-col items-center justify-between overflow-hidden py-8"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#e4ded7"
        />
      </div>

      {/* Main Content */}
      <div className="w-full px-4 md:px-8 lg:max-w-7xl mx-auto flex-1 flex flex-col justify-center relative z-10">
        <div className={`${inter.className} w-full mb-8 md:mb-12 lg:mb-16`}>
          <AnimatedWords
            title={"contact"}
            style={
              "text-6xl sm:text-8xl md:text-9xl font-extrabold uppercase text-[#e4ded7] text-center leading-[1.25] tracking-tighter"
            }
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
          {/* Email Section */}
          <div className="text-right md:text-left w-full md:w-1/2 space-y-4">
            <AnimatedBody
              text="Got a question, proposal, project, or want to work together on something?"
              className="text-lg md:text-xl font-medium text-[#e4ded7] leading-snug"
            />
            <Link
              href="mailto:muhammadraffey26@gmail.com"
              target="_blank"
              aria-label="Send me an email"
              className="inline-block text-[#e4ded7] hover:opacity-80 transition-opacity underline underline-offset-4"
            >
              <AnimatedBody
                text="Send me an email"
                className="text-lg md:text-xl"
              />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 md:gap-8 lg:gap-12 w-full md:w-auto justify-center md:justify-start mt-4">
            <Link
              href="https://github.com/MuhammadRaffey"
              target="_blank"
              aria-label="View GitHub Profile"
              className="group"
            >
              <AnimatedTitle
                text="GITHUB"
                className="text-xl md:text-2xl lg:text-3xl font-bold text-[#e4ded7] group-hover:opacity-80 transition-opacity"
                wordSpace="mr-[0.1em]"
                charSpace="mr-[0.02em]"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammadraffey/"
              target="_blank"
              aria-label="View LinkedIn Profile"
              className="group"
            >
              <AnimatedTitle
                text="LINKEDIN"
                className="text-xl md:text-2xl lg:text-3xl font-bold text-[#e4ded7] group-hover:opacity-80 transition-opacity"
                wordSpace="mr-[0.1em]"
                charSpace="mr-[0.02em]"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full px-4 md:px-8 lg:max-w-7xl mx-auto relative z-10 mt-8">
        <motion.div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-[#e4ded755] text-sm text-[#e4ded7]">
          <AnimatedBody text="© Muhammad Raffey 2024" />
          <div className="flex items-center gap-2 mt-3">
            <AnimatedBody text="Design & Deployed by" className="mb-6" />
            <Link
              href="https://github.com/MuhammadRaffey"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline mb-6"
            >
              <AnimatedBody text="Muhammad Raffey" />
            </Link>
          </div>
        </motion.div>
      </footer>
    </motion.section>
  );
};

export default Contact;
