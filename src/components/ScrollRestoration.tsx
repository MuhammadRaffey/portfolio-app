"use client";

import { useEffect } from "react";

const ScrollRestoration = () => {
  useEffect(() => {
    // Prevent automatic scroll restoration to hash fragments on page load/refresh
    const handleScrollRestoration = () => {
      // Check if there's a hash in the URL (like #work, #about, etc.)
      if (window.location.hash) {
        // Clear the hash from the URL without triggering a navigation
        window.history.replaceState(
          null,
          document.title,
          window.location.pathname + window.location.search
        );
      }

      // Force scroll to top immediately
      window.scrollTo(0, 0);

      // Also ensure document element is at top (for better cross-browser support)
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }

      // Ensure body is at top as well
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    // Run immediately when component mounts
    handleScrollRestoration();

    // Also run on window load to catch any late browser scroll restoration
    const handleWindowLoad = () => {
      handleScrollRestoration();
    };

    window.addEventListener("load", handleWindowLoad);

    // Cleanup
    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  // This component doesn't render anything
  return null;
};

export default ScrollRestoration;
