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
      className="relative z-20 flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="absolute inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={2}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#e4ded7"
        />
      </div>

      {/* Contact Content */}
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center relative z-10 flex-grow">
        <div
          className={`flex flex-col items-start justify-center ${inter.className} relative w-full sm:items-center lg:max-w-[1440px]`}
        >
          <AnimatedWords
            title={"contact"}
            style={
              "flex max-w-[250px] flex-col items-start text-left text-[70px] font-extrabold uppercase leading-[2em] text-[#e4ded7] drop-shadow-lg sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[150px] md:text-[150px] lg:text-center lg:text-[120px] xl:text-[250px]"
            }
          />
        </div>

        <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className="flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] drop-shadow-lg sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={
                "Got a question, proposal, project, or want to work together on something?"
              }
              className={
                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />
            <Link
              href="mailto:muhammadraffey26@gmail.com"
              target="_blank"
              aria-label="Send me an email"
              className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4"
            >
              <AnimatedBody text={"Send me an email"} className={""} />
            </Link>
          </div>

          <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <Link
              href="https://github.com/MuhammadRaffey"
              target="_blank"
              aria-label="View GitHub Profile"
            >
              <AnimatedTitle
                text={"GITHUB"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammadraffey/"
              target="_blank"
              aria-label="View linkedin Profile"
            >
              <AnimatedTitle
                text={"LINKEDIN"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full py-6 relative z-10">
        <motion.div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
          <AnimatedBody text={"© Muhammad Raffey 2024"} className={"m-0 p-0"} />
          <div className="flex flex-col sm:flex-row sm:gap-1 md:gap-2">
            <AnimatedBody text={"Design & Deployed by"} className={"m-0 p-0"} />
            <Link
              href="https://github.com/MuhammadRaffey"
              target="_blank"
              aria-label="Muhammad Raffey's Github"
            >
              <span className="underline underline-offset-2 hover:no-underline">
                <AnimatedBody text={"Muhammad Raffey"} className={"m-0 p-0"} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
