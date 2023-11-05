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
  return (
    <div>
      <div className="flex-image-text">
        <div>
          <div className="flex-container-2 subheader">
            {header && <h2>{header}</h2>}
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
        {img && <img src={img} className="img" alt={title} />}
      </div>
      {!readMore && <br />}
    </div>
  );
};

export default Section;
