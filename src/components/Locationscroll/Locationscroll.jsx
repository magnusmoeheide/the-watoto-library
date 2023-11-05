import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LocationScroll = () => {
  const location = useLocation();

  useEffect(() => {
    const handleLoad = () => {
      const elemId = location.hash.slice(1);
      if (elemId) {
        let elem = document.getElementById(elemId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Bind the event listener
    window.addEventListener("load", handleLoad);
    // Invoke the handler in case the page is already loaded
    handleLoad();

    // Clean up the event listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [location]);

  return null;
};

export default LocationScroll;
