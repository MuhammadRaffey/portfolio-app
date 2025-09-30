"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/animations/AnimatedText";
import AnimatedElement from "@/components/animations/AnimatedElement";
import MagneticButton from "@/components/animations/MagneticButton";
import FloatingElements from "@/components/animations/FloatingElements";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 lg:pt-20 pb-20 overflow-hidden"
      id="home"
    >
      {/* Enhanced animated background */}
      <FloatingElements count={8} className="opacity-40" />
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(34, 197, 94, 0.1))",
            "linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))",
            "linear-gradient(225deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))",
            "linear-gradient(315deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(34, 197, 94, 0.1))",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto w-full overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="mb-6 md:mb-8">
          <AnimatedText
            as="h1"
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white mb-4 leading-tight transition-colors duration-300 break-words"
            delay={0.2}
          >
            Muhammad Raffey
          </AnimatedText>
          <AnimatedElement
            variant={scaleIn}
            delay={0.6}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6 md:mb-8 break-words"
          >
            Agentic AI Engineer & Full-Stack Developer
          </AnimatedElement>
        </div>

        <AnimatedElement
          variant={fadeInUp}
          delay={0.8}
          as="p"
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto transition-colors duration-300"
        >
          Building intelligent autonomous systems, multi-agent frameworks, and
          scalable web applications that solve complex problems through AI and
          modern development practices.
        </AnimatedElement>

        <AnimatedElement
          variant={fadeInUp}
          delay={1.0}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <MagneticButton
            as="a"
            href="#work"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            strength={0.2}
          >
            View My Projects
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-gray-700 hover:border-gray-900 hover:text-gray-900 dark:border-gray-400 dark:text-gray-300 rounded-lg font-semibold dark:hover:border-white dark:hover:text-white transition-all duration-300 text-center"
            strength={0.2}
          >
            Get In Touch
          </MagneticButton>
        </AnimatedElement>

        {/* Key technologies hint */}
        <AnimatedElement
          variant={fadeInUp}
          delay={1.2}
          className="mt-12 md:mt-16 text-sm md:text-base text-gray-600 dark:text-gray-500 transition-colors duration-300"
        >
          <motion.p
            className="mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            Specializing in
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-4 text-gray-500 dark:text-gray-400"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              "LangChain",
              "OpenAI APIs",
              "React/Next.js",
              "TypeScript",
              "Multi-Agent Systems",
            ].map((tech) => (
              <motion.span
                key={tech}
                className="text-xs md:text-sm px-3 py-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 transition-colors duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </AnimatedElement>
      </motion.div>
    </section>
  );
};

export default Hero;
