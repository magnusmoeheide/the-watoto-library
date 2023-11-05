import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Section = ({
  articleId,
  header,
  coming,
  title,
  day,
  month,
  year,
  author,
  readMore,
  customReadMoreLink,
  description,
  img,
  instructor,
  places,
  openingHours,
}) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (imageElement && imageElement.complete) {
      // If the image is already loaded when the component mounts, handle it
      handleImageLoaded();
    }
  }, []); // This effect runs once on mount

  const handleImageLoaded = () => {
    const imageElement = imageRef.current;
    if (imageElement) {
      // You can check if the image needs scrolling based on its bounding box
      const bounding = imageElement.getBoundingClientRect();
      if (bounding.top < 0 || bounding.bottom > window.innerHeight) {
        // Scroll the image into view if it's not fully visible
        imageElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  };

  return (
    <div>
      <div className="flex-image-text">
        <div>
          <div className="flex-container-2">
            {header && <h2>{header}</h2>}
            {/* {"TEST"} */}
            {title && <h3>{title}</h3>}
            {coming && <span className="coming">{coming}</span>}
            <div class="flex-container-2">
              {instructor && (
                <div className="coach">
                  <i className="fa-solid fa-chalkboard-user"></i>
                  {instructor}
                </div>
              )}
              {places && (
                <div className="amount">
                  <i className="fa-solid fa-child"></i>
                  {places}
                </div>
              )}
              {openingHours && (
                <div className="when">
                  <i className="fa-regular fa-clock"></i>
                  {openingHours}
                </div>
              )}
            </div>
          </div>

          {year && (
            <h5>
              <div className="date">
                <i class="fa-regular fa-calendar"></i>
                Posted on {month} {day}, {year}
              </div>
            </h5>
          )}
          {author && (
            <span>
              <br />
              <i class="fa-solid fa-user-pen"></i> <span>{author}</span>
            </span>
          )}
          <p>{description}</p>
          {readMore && (
            <div class="div-readmore">
              <Link to={customReadMoreLink || `/article/${articleId}`}>
                <p class="readmore">
                  {readMore} <i class="fa-solid fa-arrow-right"></i>
                </p>
              </Link>
            </div>
          )}
        </div>
        {img && (
          <img
            src={img}
            className="img"
            alt={title}
            onLoad={handleImageLoaded}
            ref={imageRef}
          />
        )}
      </div>
      {!readMore && <br />}
    </div>
  );
};

export default Section;
