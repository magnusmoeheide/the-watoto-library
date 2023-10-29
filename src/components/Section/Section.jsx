import React from "react";
import { Link } from "react-router-dom";

const Section = ({
  articleId,
  header,
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
          <div className="flex-container-2">
            {header && <h2>{header}</h2>}
            {title && <h3>{title}</h3>}
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
              <Link to={customReadMoreLink || `/articles/${articleId}`}>
                <p class="readmore">
                  {readMore} <i class="fa-solid fa-arrow-right"></i>
                </p>
              </Link>
            </div>
          )}
        </div>
        {img && <img src={img} className="img" />}
      </div>
      {!readMore && <br />}
    </div>
  );
};

export default Section;
