"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 transition-colors duration-300">
      {/* Theme Toggle in top right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center px-4 md:px-6 py-12">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-150"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8">
          {/* 404 Number */}
          <div className="mb-6">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="space-y-4 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Page Not Found
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300 max-w-lg mx-auto">
              Oops! The page you&apos;re looking for seems to have wandered off
              into the digital void.
            </p>
          </div>

          {/* Animated Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-lg"></div>
              <Image
                src="/404.gif"
                alt="404 Animation"
                width={180}
                height={180}
                unoptimized
                className="relative z-10 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/"
              className="w-full sm:w-auto min-w-[160px] px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
            >
              ← Back to Home
            </Link>
            <Link
              href="/#contact"
              className="w-full sm:w-auto min-w-[160px] px-8 py-4 border-2 border-gray-600 text-gray-700 hover:border-gray-900 hover:text-gray-900 dark:border-gray-400 dark:text-gray-300 rounded-xl font-semibold dark:hover:border-white dark:hover:text-white transition-all duration-300 text-center"
            >
              Get Help
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-gray-200 dark:border-slate-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Quick Navigation:
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link
                href="/#about"
                className="px-3 py-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 hover:underline rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                About
              </Link>
              <Link
                href="/#work"
                className="px-3 py-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 hover:underline rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                Projects
              </Link>
              <Link
                href="/#aistack"
                className="px-3 py-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 hover:underline rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                Tech Stack
              </Link>
              <Link
                href="/#contact"
                className="px-3 py-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 hover:underline rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
