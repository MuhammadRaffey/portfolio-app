import ProjectGrid from "../../components/work/ProjectGrid";
import React from "react";

const Work = () => {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-6" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Showcasing intelligent AI systems, autonomous agents, and modern web
            applications that demonstrate expertise across both domains
          </p>
        </div>

        <ProjectGrid />
      </div>
    </section>
  );
};

export default Work;
