import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 lg:pt-20 pb-20"
      id="home"
    >
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-150"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white mb-4 leading-tight transition-colors duration-300 break-words">
            Muhammad Raffey
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6 md:mb-8 break-words">
            Agentic AI Engineer & Full-Stack Developer
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
          Building intelligent autonomous systems, multi-agent frameworks, and
          scalable web applications that solve complex problems through AI and
          modern development practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a
            href="#work"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-gray-700 hover:border-gray-900 hover:text-gray-900 dark:border-gray-400 dark:text-gray-300 rounded-lg font-semibold dark:hover:border-white dark:hover:text-white transition-all duration-300 text-center"
          >
            Get In Touch
          </a>
        </div>

        {/* Key technologies hint */}
        <div className="mt-12 md:mt-16 text-sm md:text-base text-gray-600 dark:text-gray-500 transition-colors duration-300">
          <p className="mb-3">Specializing in</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-gray-500 dark:text-gray-400">
            <span className="text-xs md:text-sm">LangChain</span>
            <span className="text-xs md:text-sm">•</span>
            <span className="text-xs md:text-sm">OpenAI APIs</span>
            <span className="text-xs md:text-sm">•</span>
            <span className="text-xs md:text-sm">React/Next.js</span>
            <span className="text-xs md:text-sm">•</span>
            <span className="text-xs md:text-sm">TypeScript</span>
            <span className="text-xs md:text-sm">•</span>
            <span className="text-xs md:text-sm">Multi-Agent Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
