"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/animations/AnimatedText";
import AnimatedElement from "@/components/animations/AnimatedElement";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/lib/animations";

const About = () => {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-6" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Subtle background animation */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "radial-gradient(600px circle at 0% 0%, rgba(120, 119, 198, 0.3), transparent 50%)",
              "radial-gradient(600px circle at 100% 100%, rgba(120, 119, 198, 0.3), transparent 50%)",
              "radial-gradient(600px circle at 50% 50%, rgba(120, 119, 198, 0.3), transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            About Me
          </AnimatedText>
          <AnimatedElement
            variant={scaleIn}
            delay={0.3}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
          >
            <div />
          </AnimatedElement>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedElement variant={fadeInLeft} className="space-y-6">
            <AnimatedText
              as="h3"
              className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
              delay={0.2}
            >
              Agentic AI Engineer & Full-Stack Developer
            </AnimatedText>
            <AnimatedElement
              variant={fadeInUp}
              delay={0.4}
              as="p"
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300"
            >
              I specialize in building intelligent autonomous systems and
              scalable web applications. My expertise spans from creating
              multi-agent frameworks and AI-powered automation solutions to
              developing modern web applications with React, Next.js, and
              TypeScript.
            </AnimatedElement>
            <AnimatedElement
              variant={fadeInUp}
              delay={0.6}
              as="p"
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300"
            >
              With deep knowledge in both AI frameworks and modern web
              development, I design end-to-end solutions that combine
              intelligent agents with intuitive user interfaces. I build systems
              that can reason, plan, and execute complex tasks while delivering
              exceptional user experiences.
            </AnimatedElement>
            <AnimatedElement
              variant={fadeInUp}
              delay={0.8}
              as="p"
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300"
            >
              Currently focused on advancing both AI and web development through
              innovative projects involving autonomous decision-making systems,
              intelligent web applications, and next-generation AI-powered
              solutions.
            </AnimatedElement>
          </AnimatedElement>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Core Expertise */}
            <AnimatedElement
              variant={fadeInRight}
              delay={0.2}
              className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg backdrop-blur-sm"
            >
              <AnimatedText
                as="h4"
                className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
                delay={0.3}
              >
                Core Expertise
              </AnimatedText>
              <motion.ul
                className="space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Multi-Agent System Architecture",
                  "Large Language Model Integration",
                  "Full-Stack Web Development",
                  "React/Next.js Applications",
                  "TypeScript & Modern JavaScript",
                  "AI-Powered Workflow Automation",
                ].map((skill) => (
                  <motion.li
                    key={skill}
                    variants={fadeInUp}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-default"
                  >
                    • {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatedElement>

            {/* Current Focus */}
            <AnimatedElement
              variant={fadeInRight}
              delay={0.4}
              className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg backdrop-blur-sm"
            >
              <AnimatedText
                as="h4"
                className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
                delay={0.5}
              >
                Current Focus
              </AnimatedText>
              <motion.ul
                className="space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Advanced Agent Orchestration",
                  "Modern Web Applications",
                  "AI-Powered User Interfaces",
                  "Enterprise AI Solutions",
                ].map((focus) => (
                  <motion.li
                    key={focus}
                    variants={fadeInUp}
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 cursor-default"
                  >
                    • {focus}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatedElement>
          </motion.div>
        </div>

        {/* Professional Approach */}
        <AnimatedElement
          variant={fadeInUp}
          delay={0.6}
          className="mt-16 text-center"
        >
          <AnimatedElement
            variant={scaleIn}
            delay={0.8}
            className="bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:border-gradient-to-r hover:from-blue-300 hover:to-purple-300 dark:hover:from-blue-700 dark:hover:to-purple-700 backdrop-blur-sm"
          >
            <AnimatedText
              as="h4"
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
              delay={1.0}
            >
              Professional Approach
            </AnimatedText>
            <AnimatedElement
              variant={fadeInUp}
              delay={1.2}
              as="p"
              className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300"
            >
              I combine theoretical AI knowledge with practical engineering
              skills to deliver robust, scalable solutions. My bilingual
              proficiency and strong problem-solving abilities enable me to work
              effectively in diverse, collaborative environments while pushing
              the boundaries of what&apos;s possible with intelligent systems.
            </AnimatedElement>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default About;
