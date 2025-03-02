import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full justify-center"
      id="home"
      initial="initial"
      animate="animate"
    >
      <WavyBackground>
        <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
          <div
            className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
          >
            <AnimatedTitle
              text={"Hi   I'm   Muhammad Raffey."}
              className={
                "mb-1 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px] ml-4"
              }
              wordSpace={"mr-[10px]"}
              charSpace={"mr-[0.001em]"}
            />
          </div>
        </div>
      </WavyBackground>
    </motion.section>
  );
};

export default Hero;
