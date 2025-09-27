import React from "react";

const About = () => {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Agentic AI Engineer & Full-Stack Developer
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              I specialize in building intelligent autonomous systems and
              scalable web applications. My expertise spans from creating
              multi-agent frameworks and AI-powered automation solutions to
              developing modern web applications with React, Next.js, and
              TypeScript.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              With deep knowledge in both AI frameworks and modern web
              development, I design end-to-end solutions that combine
              intelligent agents with intuitive user interfaces. I build systems
              that can reason, plan, and execute complex tasks while delivering
              exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              Currently focused on advancing both AI and web development through
              innovative projects involving autonomous decision-making systems,
              intelligent web applications, and next-generation AI-powered
              solutions.
            </p>
          </div>

          <div className="space-y-8">
            {/* Core Expertise */}
            <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Core Expertise
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <li>• Multi-Agent System Architecture</li>
                <li>• Large Language Model Integration</li>
                <li>• Full-Stack Web Development</li>
                <li>• React/Next.js Applications</li>
                <li>• TypeScript & Modern JavaScript</li>
                <li>• AI-Powered Workflow Automation</li>
              </ul>
            </div>

            {/* Current Focus */}
            <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Current Focus
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <li>• Advanced Agent Orchestration</li>
                <li>• Modern Web Applications</li>
                <li>• AI-Powered User Interfaces</li>
                <li>• Enterprise AI Solutions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Approach */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Professional Approach
            </h4>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
              I combine theoretical AI knowledge with practical engineering
              skills to deliver robust, scalable solutions. My bilingual
              proficiency and strong problem-solving abilities enable me to work
              effectively in diverse, collaborative environments while pushing
              the boundaries of what&apos;s possible with intelligent systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
