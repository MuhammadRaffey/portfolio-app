"use client";

import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";

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
  console.log("Rendering ProjectCard:", name);

  return (
    <div className="w-full">
      <div className="relative w-full bg-white/80 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-slate-700/50 group hover:scale-[1.005] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-8 p-6 sm:p-8 md:p-10 w-full">
          {/* Content Side */}
          <div
            className={`space-y-6 flex flex-col justify-center ${id % 2 === 0 ? "order-1" : "order-2"}`}
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                {name}
              </h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                {description}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider transition-colors duration-300">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((IconComponent, index) => (
                  <div key={index} className="group/tech">
                    <Link
                      href={techLinks[index]}
                      target="_blank"
                      aria-label={`Learn more about ${techNames[index]}`}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900/60 dark:to-slate-800/60 rounded-lg border border-gray-300/60 dark:border-slate-600/40 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                      title={techNames[index]}
                    >
                      <IconComponent className="text-base sm:text-lg flex-shrink-0 text-gray-700 dark:text-gray-300 group-hover/tech:text-blue-600 dark:group-hover/tech:text-blue-400 transition-colors duration-300" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/tech:text-gray-900 dark:group-hover/tech:text-white transition-colors duration-300 whitespace-nowrap">
                        {techNames[index]}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            {available && (
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-slate-900/80 dark:to-slate-800/80 border border-gray-300 dark:border-slate-600 rounded-lg hover:border-gray-500 dark:hover:border-slate-400 hover:shadow-lg hover:scale-105 transition-all duration-300 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white text-sm sm:text-base font-medium"
                >
                  <SiGithub className="text-lg" />
                  <span>View Code</span>
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-2xl hover:shadow-blue-500/50"
                >
                  <BsLink45Deg className="text-xl" />
                  <span>Live Demo</span>
                </a>
              </div>
            )}
          </div>

          {/* Image Side */}
          <div className={`relative ${id % 2 === 0 ? "order-2" : "order-1"}`}>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                priority={id === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
