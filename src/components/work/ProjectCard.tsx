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
      <div className="relative w-full bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-slate-700 group hover:scale-[1.01] transition-all duration-300 shadow-lg">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6 md:p-8 w-full">
          {/* Content Side */}
          <div className={`space-y-6 ${id % 2 === 0 ? "order-1" : "order-2"}`}>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors duration-300">
                {name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                {description}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider transition-colors duration-300">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((IconComponent, index) => (
                  <div key={index} className="group/tech">
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
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            {available && (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg hover:border-gray-600 dark:hover:border-white transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm sm:text-base"
                >
                  <SiGithub className="text-base sm:text-lg" />
                  <span>Code</span>
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-white text-sm sm:text-base shadow-lg hover:shadow-xl"
                >
                  <BsLink45Deg className="text-base sm:text-lg" />
                  <span>Demo</span>
                </a>
              </div>
            )}
          </div>

          {/* Image Side */}
          <div className={`relative ${id % 2 === 0 ? "order-2" : "order-1"}`}>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden group-hover:scale-[1.005] transition-transform duration-300">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={id === 0} // Load first project image with priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent group-hover:opacity-30 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
