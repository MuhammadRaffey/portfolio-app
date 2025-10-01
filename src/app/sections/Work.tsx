"use client";

import ProjectGrid from "../../components/work/ProjectGrid";
import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/animations/AnimatedText";
import AnimatedElement from "@/components/animations/AnimatedElement";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const Work = () => {
  return (
    <section
      className="relative py-16 md:py-20 px-4 md:px-6 overflow-hidden"
      id="work"
    >
      <div className="max-w-7xl mx-auto overflow-hidden">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <AnimatedText
            as="h2"
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300"
          >
            Featured Projects
          </AnimatedText>
          <AnimatedElement
            variant={scaleIn}
            delay={0.3}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"
          >
            <div />
          </AnimatedElement>
          <AnimatedElement
            variant={fadeInUp}
            delay={0.5}
            as="p"
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300"
          >
            Showcasing intelligent AI systems, autonomous agents, and modern web
            applications that demonstrate expertise across both domains
          </AnimatedElement>
        </motion.div>

        <div className="mt-8">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
};

export default Work;
