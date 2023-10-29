import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Locationscroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

export default Locationscroll;
