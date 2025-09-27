import Link from "next/link";
import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Let&apos;s Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
            Ready to build the future with intelligent AI systems? Let&apos;s
            discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/70 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Get In Touch
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                Interested in collaborating on agentic AI projects, modern web
                applications, or innovative solutions that combine both?
                I&apos;m always excited to discuss new opportunities and
                challenging problems.
              </p>
              <Link
                href="mailto:muhammadraffey26@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send me an email
              </Link>
            </div>

            <div className="bg-white/70 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                What I Can Help With
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <li>• Agentic AI System Architecture</li>
                <li>• Multi-Agent Framework Development</li>
                <li>• Full-Stack Web Development</li>
                <li>• React/Next.js Applications</li>
                <li>• LLM Integration & Optimization</li>
                <li>• AI-Powered Web Solutions</li>
              </ul>
            </div>
          </div>

          {/* Professional Networks */}
          <div className="space-y-8">
            <div className="bg-white/70 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <Link
                  href="https://github.com/MuhammadRaffey"
                  target="_blank"
                  aria-label="View GitHub Profile"
                  className="flex items-center justify-between p-4 bg-gray-100 dark:bg-slate-900/50 rounded-lg border border-gray-300 dark:border-slate-700 hover:border-gray-500 dark:hover:border-slate-500 transition-all duration-300 group"
                >
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                      GitHub
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                      View my code and projects
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/muhammadraffey/"
                  target="_blank"
                  aria-label="View LinkedIn Profile"
                  className="flex items-center justify-between p-4 bg-gray-100 dark:bg-slate-900/50 rounded-lg border border-gray-300 dark:border-slate-700 hover:border-gray-500 dark:hover:border-slate-500 transition-all duration-300 group"
                >
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                      LinkedIn
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                      Professional network and updates
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Response Time
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">
                I typically respond to emails within 24-48 hours. For urgent AI
                project discussions, feel free to mention it in your subject
                line.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default Contact;
