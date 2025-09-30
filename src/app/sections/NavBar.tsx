"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href.split("#")[1];
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const sections = ["home", "about", "aistack", "work"];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 100; // Reduced offset for better detection

      // Get all section elements with their positions
      const sectionElements = sections
        .map((id) => {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const offsetTop = window.scrollY + rect.top;
            return {
              id,
              offsetTop,
              offsetBottom: offsetTop + element.offsetHeight,
            };
          }
          return null;
        })
        .filter(
          (section): section is NonNullable<typeof section> => section !== null
        );

      // Find which section the user is currently viewing
      let currentSection = "home"; // Default

      // Check if we're at the very top of the page
      if (window.scrollY < 100) {
        currentSection = "home";
      } else {
        for (let i = 0; i < sectionElements.length; i++) {
          const section = sectionElements[i];
          if (!section) continue;

          // Check if we're in this section
          if (
            scrollPosition >= section.offsetTop - 100 &&
            (i === sectionElements.length - 1 ||
              scrollPosition < sectionElements[i + 1]?.offsetTop - 100)
          ) {
            currentSection = section.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScrollSpy = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScrollSpy();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call with delay to ensure DOM is ready
    const timer = setTimeout(() => {
      handleScrollSpy();
    }, 250);

    window.addEventListener("scroll", throttledScrollSpy, { passive: true });
    window.addEventListener("resize", throttledScrollSpy, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", throttledScrollSpy);
      window.removeEventListener("resize", throttledScrollSpy);
    };
  }, []);

  const navItems = [
    { href: "home", label: "Home", isSection: true },
    { href: "about", label: "About", isSection: true },
    { href: "aistack", label: "Tech Stack", isSection: true },
    { href: "work", label: "Work", isSection: true },
    { href: "/certificates", label: "Certificates", isSection: false },
    { href: "/contact", label: "Contact", isSection: false },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 dark:bg-slate-900/80 dark:border-slate-700 rounded-full px-6 py-3 shadow-lg transition-colors duration-300">
          <div className="flex items-center space-x-6">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.isSection ? `#${item.href}` : item.href}
                    onClick={item.isSection ? handleScroll : undefined}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      (item.isSection &&
                        activeSection === item.href &&
                        typeof window !== "undefined" &&
                        window.location.pathname === "/") ||
                      (!item.isSection &&
                        typeof window !== "undefined" &&
                        window.location.pathname === item.href)
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-800"
                    }`}
                    aria-label={`Navigate to ${item.label} ${
                      item.isSection ? "section" : "page"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-px h-6 bg-gray-300 dark:bg-slate-600"></div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-white/95 backdrop-blur-md border-b border-gray-200 dark:bg-slate-900/95 dark:border-slate-700 shadow-lg transition-colors duration-300">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Image
                src="/pic.png"
                alt="MR Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 top-3" : "top-1"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-opacity duration-300 top-3 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleMobileMenu}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white dark:bg-slate-900 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Navigation
              </span>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <svg
                  className="w-6 h-6"
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
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 py-4">
              <ul className="space-y-2 px-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.isSection ? `#${item.href}` : item.href}
                      onClick={item.isSection ? handleScroll : toggleMobileMenu}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        (item.isSection &&
                          activeSection === item.href &&
                          typeof window !== "undefined" &&
                          window.location.pathname === "/") ||
                        (!item.isSection &&
                          typeof window !== "undefined" &&
                          window.location.pathname === item.href)
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-800"
                      }`}
                      aria-label={`Navigate to ${item.label} ${
                        item.isSection ? "section" : "page"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-slate-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Muhammad Raffey
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                Agentic AI Engineer
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
