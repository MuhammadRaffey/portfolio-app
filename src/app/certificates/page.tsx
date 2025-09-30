"use client";

import React from "react";
import Link from "next/link";

interface Certificate {
  id: number;
  title: string;
  course: string;
  file: string;
  category: "Python" | "Django" | "Web Development";
  description: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Getting Started with Python",
    course: "Python for Everybody (PY4E)",
    file: "/certificates/PY4E 1 Getting Started.pdf",
    category: "Python",
    description: "Introduction to Python programming fundamentals and syntax",
  },
  {
    id: 2,
    title: "Python Data Structures",
    course: "Python for Everybody (PY4E)",
    file: "/certificates/PY4E 2 Python Data Structures.pdf",
    category: "Python",
    description:
      "Working with lists, dictionaries, tuples and data manipulation",
  },
  {
    id: 3,
    title: "Using Python to Access Web Data",
    course: "Python for Everybody (PY4E)",
    file: "/certificates/PY4E 3 Using Python to Access Web Data.pdf",
    category: "Python",
    description: "Web scraping, APIs, JSON, and XML data processing",
  },
  {
    id: 4,
    title: "Using Databases with Python",
    course: "Python for Everybody (PY4E)",
    file: "/certificates/PY4E 4 Using Databases with Python.pdf",
    category: "Python",
    description: "SQL, database design, and Python database integration",
  },
  {
    id: 5,
    title: "Capstone Project",
    course: "Python for Everybody (PY4E)",
    file: "/certificates/PY4E 5 Capstone.pdf",
    category: "Python",
    description: "Comprehensive Python project demonstrating full-stack skills",
  },
  {
    id: 6,
    title: "Getting Started with Django",
    course: "Django for Everybody (DJ4E)",
    file: "/certificates/DJ4E 1 Getting Started wDjango.pdf",
    category: "Django",
    description: "Django framework basics, models, views, and templates",
  },
  {
    id: 7,
    title: "Building Web Applications in Django",
    course: "Django for Everybody (DJ4E)",
    file: "/certificates/DJ4E 2 Building Web Applications in Django.pdf",
    category: "Django",
    description: "Advanced Django development and web application architecture",
  },
  {
    id: 8,
    title: "Django Features and Libraries",
    course: "Django for Everybody (DJ4E)",
    file: "/certificates/DJ4E 3 Django Features and Libraries.pdf",
    category: "Django",
    description:
      "Django advanced features, third-party libraries, and best practices",
  },
  {
    id: 9,
    title: "Using JavaScript and JSON in Django",
    course: "Django for Everybody (DJ4E)",
    file: "/certificates/DJ4E 4 Using JavaScript and JSON in Django.pdf",
    category: "Django",
    description: "Frontend integration, AJAX, and API development with Django",
  },
  {
    id: 10,
    title: "Introduction to HTML",
    course: "Web Design for Everybody (WD4E)",
    file: "/certificates/WD4E 1 Intro to HTML.pdf",
    category: "Web Development",
    description: "HTML5 fundamentals, semantic markup, and web standards",
  },
  {
    id: 11,
    title: "CSS3 Styling",
    course: "Web Design for Everybody (WD4E)",
    file: "/certificates/WD4E 2 CSS3.pdf",
    category: "Web Development",
    description: "CSS3 styling, responsive design, and modern web layouts",
  },
];

const categoryColors = {
  Python: "from-blue-500 to-blue-700",
  Django: "from-green-500 to-green-700",
  "Web Development": "from-purple-500 to-purple-700",
};

const categoryIcons = {
  Python: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V3.23l.03-.21.07-.28.12-.32.18-.34.26-.37.36-.35.46-.35.59-.32.73-.28.88-.22 1.05-.14 1.23-.05z" />
    </svg>
  ),
  Django: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143c-.535-.204-.89-.255-1.401-.255-2.116 0-3.34 1.268-3.34 3.442 0 2.09 1.173 3.255 3.289 3.255.484 0 .866-.051 1.452-.153V9.143zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924z" />
    </svg>
  ),
  "Web Development": (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 5-5v3h6v4h-6v3z" />
    </svg>
  ),
};

const CertificatesPage = () => {
  const groupedCertificates = certificates.reduce(
    (acc, cert) => {
      if (!acc[cert.category]) {
        acc[cert.category] = [];
      }
      acc[cert.category].push(cert);
      return acc;
    },
    {} as Record<string, Certificate[]>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 transition-colors duration-300">
      {/* Header */}
      <div className="pt-20 pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 mb-8"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Certifications
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
            A collection of my professional certifications and completed courses
            in Python, Django, and Web Development. Each certificate represents
            hands-on learning and practical application of technologies.
          </p>
        </div>
      </div>

      {/* Certificates Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        {Object.entries(groupedCertificates).map(([category, certs]) => (
          <div key={category} className="mb-16">
            {/* Category Header */}
            <div className="flex items-center mb-8">
              <div
                className={`p-3 rounded-lg bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} text-white mr-4`}
              >
                {categoryIcons[category as keyof typeof categoryIcons]}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {category}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {certs.length} certificate{certs.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>

            {/* Certificates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certs.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white/70 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Certificate Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${categoryColors[cert.category]} text-white`}
                    >
                      {categoryIcons[cert.category]}
                    </div>
                    <Link
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Certificate Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {cert.title}
                    </h3>

                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {cert.course}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                      {cert.description}
                    </p>
                  </div>

                  {/* View Certificate Button */}
                  <div className="mt-6">
                    <Link
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View Certificate
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-gray-200 dark:border-slate-700 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Certification Summary
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(groupedCertificates).map(([category, certs]) => (
                <div key={category} className="text-center">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} text-white mb-3`}
                  >
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {category}
                  </h4>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {certs.length}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                    Certificate{certs.length !== 1 ? "s" : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
