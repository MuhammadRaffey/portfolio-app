import React from "react";
import {
  SiPython,
  SiOpenai,
  SiReact,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const AIStack = () => {
  const techStacks = [
    {
      category: "AI & Machine Learning",
      technologies: [
        {
          name: "OpenAI Agents SDK",
          icon: "🦜",
          description: "Agent orchestration & LLM integration",
        },
        {
          name: "OpenAI APIs",
          icon: <SiOpenai className="text-green-400" />,
          description: "GPT-5, embeddings, function calling",
        },
        {
          name: "LangGraph",
          icon: "🔗",
          description: "Multi-agent workflow automation",
        },
      ],
    },
    {
      category: "Core Technologies",
      technologies: [
        {
          name: "Python",
          icon: <SiPython className="text-blue-400" />,
          description: "Primary development language",
        },
        {
          name: "FastAPI",
          icon: "⚡",
          description: "High-performance API development",
        },
        {
          name: "Streamlit",
          icon: "🎯",
          description: "AI application interfaces",
        },
      ],
    },
    {
      category: "Web Development",
      technologies: [
        {
          name: "React",
          icon: <SiReact className="text-blue-400" />,
          description: "Frontend library for interactive UIs",
        },
        {
          name: "Next.js",
          icon: "▲",
          description: "Full-stack React framework",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-400" />,
          description: "Type-safe JavaScript development",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
          description: "Utility-first CSS framework",
        },
      ],
    },
  ];

  return (
    <section className="relative py-16 md:py-20 px-4 md:px-6" id="aistack">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Technology Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Technologies and frameworks I use to build intelligent AI systems
            and modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, stackIndex) => (
            <div
              key={stackIndex}
              className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center transition-colors duration-300">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-4"></span>
                {stack.category}
              </h3>

              <div className="grid gap-4">
                {stack.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center p-4 bg-gray-50 dark:bg-slate-900/50 rounded-lg border border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300 group"
                  >
                    <div className="text-3xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {typeof tech.icon === "string" ? (
                        <span>{tech.icon}</span>
                      ) : (
                        tech.icon
                      )}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                        {tech.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Skills */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-gray-200 dark:border-slate-700 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300">
              Specialized Engineering Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  Agent Orchestration
                </h4>
                <p className="text-gray-700 dark:text-gray-400 transition-colors duration-300">
                  Designing and implementing complex multi-agent systems with
                  sophisticated coordination patterns
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl mb-3">🌐</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  Full-Stack Development
                </h4>
                <p className="text-gray-700 dark:text-gray-400 transition-colors duration-300">
                  Building scalable web applications with modern frameworks,
                  from responsive UIs to robust backend APIs
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl mb-3">⚙️</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  AI-Powered Solutions
                </h4>
                <p className="text-gray-700 dark:text-gray-400 transition-colors duration-300">
                  Integrating intelligent automation with web applications for
                  enhanced user experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStack;
