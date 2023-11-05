import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LocationScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // This disables the browser's automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const attemptScroll = () => {
      const elemId = location.hash.slice(1);
      const element = document.getElementById(elemId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.hash) {
      // Wait a little longer to ensure all async elements are loaded
      const timeoutId = setTimeout(attemptScroll, 100);

      // Cleanup the timeout when the component is unmounted or the location changes
      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname, location.hash]); // Depend on both pathname and hash

  return null;
};

export default LocationScroll;
