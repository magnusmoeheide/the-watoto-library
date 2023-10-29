// Slideshow.js
import React, { useState, useEffect } from 'react';

function Slideshow({ slides, dots }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const toggleFullscreen = (event) => {
    const target = event.target;

    // Check if we're currently in fullscreen mode
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    } else {
      // Enter fullscreen mode
      if (target.requestFullscreen) {
        target.requestFullscreen();
      } else if (target.webkitRequestFullScreen) {
        target.webkitRequestFullScreen();
      }
    }
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function showSlides(n) {
    const allSlides = document.getElementsByClassName("mySlides");
    const allDots = document.getElementsByClassName("dot");
    if (n > allSlides.length) { setSlideIndex(1); return; }
    if (n < 1) { setSlideIndex(allSlides.length); return; }
    
    Array.from(allSlides).forEach((slide, index) => {
      slide.style.display = index + 1 === slideIndex ? "block" : "none";
    });
    Array.from(allDots).forEach((dot, index) => {
      dot.className = index + 1 === slideIndex ? "dot activeDot" : "dot";
    });
  }

  function plusDivs(n) {
    setSlideIndex(prevIndex => prevIndex + n);
  }

  return (
    <div>
        <br />
        <br />
        <div className="slideshow-content slideshow-display-container">
            {slides.map((src, index) => (
                <img className="mySlides" src={src} alt={`Slide ${index + 1}`} key={index}  onClick={toggleFullscreen}/>
            ))}
            {slides.length > 1 && (
            <>
                <button className="slideshow-button slideshow-btn-color slideshow-button-left" onClick={() => plusDivs(-1)}>&#10094;</button>
                <button className="slideshow-button slideshow-btn-color slideshow-button-right" onClick={() => plusDivs(1)}>&#10095;</button>
            </>
            )}
            
        </div>
        {slides.length > 1 && (
            <div style={{textAlign: "center"}}>
                {dots.map((_, index) => (
                    <span 
                    className="dot" 
                    key={index} 
                    onClick={() => setSlideIndex(index + 1)}
                    ></span>
                ))}
            </div>
        )}
        <br />
        <br />  
    </div>
  );
}

export default Slideshow;
