import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LocationScroll = () => {
  const location = useLocation();

  useEffect(() => {
    let intervalId; // Declare intervalId in the scope accessible to both attemptScroll and the cleanup function

    // This function will attempt to scroll to the element.
    const attemptScroll = () => {
      const elemId = location.hash.slice(1);
      const element = document.getElementById(elemId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        clearInterval(intervalId); // Clear the interval once the element is found
      }
    };

    // Check if there is a hash in the URL
    if (location.hash) {
      // Set an interval to keep checking for the element
      intervalId = setInterval(attemptScroll, 100); // Check every 100ms
    }

    // Clean up the interval when the component unmounts
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [location]); // Only re-run if the location object changes

  return null;
};

export default LocationScroll;
