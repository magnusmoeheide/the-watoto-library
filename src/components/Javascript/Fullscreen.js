// useFullscreenImages.js
import { useEffect } from 'react';

function Fullscreen() {
  useEffect(() => {
    const toggleFullscreen = (event) => {
      const target = event.target;
      const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;

      if (!(target && target.classList.contains('img'))) {
        return;
      }

      if (isFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else {
          document.webkitCancelFullScreen();
        }
      } else {
        if (target.requestFullscreen) {
          target.requestFullscreen();
        } else {
          target.webkitRequestFullScreen();
        }
      }
    };

    document.addEventListener('click', toggleFullscreen);

    return () => {
      document.removeEventListener('click', toggleFullscreen);
    };
  }, []);
}

export default Fullscreen;
