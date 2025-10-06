"use client";

import React, { useState } from "react";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form and show success
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus("success");
      } else {
        const errorData = await response.json();
        console.error("Email sending failed:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 transition-colors duration-300">
      {/* Header */}
      <div className="pt-20 pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 mb-8"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Let&apos;s Work Together
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
            Ready to build the future with intelligent AI systems? Let&apos;s
            discuss how we can create something amazing together.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full mx-auto px-4 md:px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 w-full">
          {/* Contact Information */}
          <div className="space-y-8 w-full">
            <div className="bg-white/70 dark:bg-slate-800/50 p-8 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 shadow-lg w-full overflow-hidden">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Get In Touch
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                Interested in collaborating on agentic AI projects, modern web
                applications, or innovative solutions that combine both?
                I&apos;m always excited to discuss new opportunities and
                challenging problems.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <Link
                      href="mailto:muhammadraffey26@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 break-all"
                    >
                      muhammadraffey26@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      LinkedIn
                    </h3>
                    <Link
                      href="https://linkedin.com/in/muhammad-raffey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 break-all"
                    >
                      linkedin.com/in/muhammad-raffey
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      GitHub
                    </h3>
                    <Link
                      href="https://github.com/MuhammadRaffey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 break-all"
                    >
                      github.com/MuhammadRaffey
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CV Download Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 shadow-lg w-full overflow-hidden">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Download CV
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
                Get a detailed overview of my experience, skills, and
                achievements in AI engineering and full-stack development.
              </p>
              <Link
                href="/cv.pdf"
                download="Muhammad_Raffey_CV.pdf"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV (PDF)
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 dark:bg-slate-800/50 p-8 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 shadow-lg w-full overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Send a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-describedby="contact-form-status"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full max-w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full max-w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full max-w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full max-w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg ${
                  isSubmitting
                    ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105"
                }`}
                aria-label={isSubmitting ? "Sending message" : "Send message"}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div
                  id="contact-form-status"
                  role="status"
                  aria-live="polite"
                  className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg"
                >
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 dark:text-green-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  id="contact-form-status"
                  role="alert"
                  aria-live="assertive"
                  className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg"
                >
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-600 dark:text-red-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <p className="text-red-700 dark:text-red-300 font-medium">
                      Failed to send message. Please try again or contact me
                      directly at muhammadraffey26@gmail.com
                    </p>
                  </div>
                </div>
              )}
            </form>

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Response Time
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                I typically respond to emails within 24-48 hours. For urgent AI
                project discussions, feel free to mention it in your subject
                line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
