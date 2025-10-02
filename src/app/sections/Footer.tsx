import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
          <p className="mb-2 sm:mb-0">
            © {currentYear} Muhammad Raffey. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="text-blue-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-300 font-medium"
              aria-label="Contact Muhammad Raffey"
            >
              Get In Touch →
            </Link>
            <div className="flex items-center gap-2">
              <span>Built by</span>
              <Link
                href="https://github.com/MuhammadRaffey"
                target="_blank"
                aria-label="Muhammad Raffey's GitHub"
                className="text-blue-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-300 underline underline-offset-2 hover:no-underline"
              >
                Muhammad Raffey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
