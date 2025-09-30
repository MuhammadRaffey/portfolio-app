"use client";

import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";
import AnimatedElement from "@/components/animations/AnimatedElement";
import MagneticButton from "@/components/animations/MagneticButton";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/animations";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  techNames,
  techLinks,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <AnimatedElement
      variant={fadeInUp}
      delay={id * 0.1}
      className="w-full overflow-hidden"
    >
      <motion.div
        className="relative w-full bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden group"
        whileHover={{
          scale: 1.01,
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6 md:p-8 w-full">
          {/* Content Side */}
          <motion.div
            className={`space-y-6 ${id % 2 === 0 ? "order-1" : "order-2"}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {name}
              </motion.h3>
              <motion.p
                className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300"
                variants={fadeInUp}
              >
                {description}
              </motion.p>
            </motion.div>

            {/* Technologies */}
            <motion.div className="space-y-3" variants={fadeInUp}>
              <motion.h4
                className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider transition-colors duration-300"
                variants={fadeInUp}
              >
                Technologies Used
              </motion.h4>
              <motion.div
                className="flex flex-wrap gap-2 sm:gap-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {technologies.map((IconComponent, index) => (
                  <motion.div
                    key={index}
                    className="group/tech"
                    variants={fadeInUp}
                    whileHover={{
                      scale: 1.1,
                      rotate: 2,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                  >
                    <Link
                      href={techLinks[index]}
                      target="_blank"
                      aria-label={`Learn more about ${techNames[index]}`}
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-100 dark:bg-slate-900/50 rounded-lg border border-gray-300 dark:border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-300"
                      title={techNames[index]}
                    >
                      <IconComponent className="text-base sm:text-lg flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 group-hover/tech:text-gray-900 dark:group-hover/tech:text-white transition-colors duration-300 whitespace-nowrap">
                        {techNames[index]}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            {available && (
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
                variants={fadeInUp}
              >
                <MagneticButton
                  as="a"
                  href={github}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg hover:border-gray-600 dark:hover:border-white transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm sm:text-base"
                  strength={0.1}
                >
                  <SiGithub className="text-base sm:text-lg" />
                  <span>Code</span>
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href={demo}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-white text-sm sm:text-base shadow-lg hover:shadow-xl"
                  strength={0.1}
                >
                  <BsLink45Deg className="text-base sm:text-lg" />
                  <span>Demo</span>
                </MagneticButton>
              </motion.div>
            )}
          </motion.div>

          {/* Image Side */}
          <motion.div
            className={`relative ${id % 2 === 0 ? "order-2" : "order-1"}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={id % 2 === 0 ? fadeInRight : fadeInLeft}
          >
            <motion.div
              className="relative h-64 md:h-80 rounded-lg overflow-hidden"
              whileHover={{
                scale: 1.005, // Much more conservative scale
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }} // Reduced from 1.1 to 1.03
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedElement>
  );
};

export default ProjectCard;
