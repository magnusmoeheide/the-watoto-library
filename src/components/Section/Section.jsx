import React from "react";
import MyLink from "../MyLink/MyLink";
import { boardMembers, teamMembers } from "../../container/Pages/GetInTouch";
import TextEditor from "../TextEditor/TextEditor";

const Section = ({
  articleId,
  header,
  coming,
  title,
  day,
  month,
  year,
  readMore,
  customReadMoreLink,
  description,
  img,
  instructor,
  places,
  openingHours,
  isAdmin,
}) => {
  const currentYear = new Date().getFullYear();
  const previousYear = currentYear - 1;
  const nextYear = currentYear + 1;
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      <div className="flex-image-text">
        <div>
          <div className="flex-container-2 subheader">
            {header && isAdmin ? (
              <input type="text" value={header} className="h2" />
            ) : header ? (
              <h2>{header}</h2>
            ) : null}
            {title && isAdmin ? (
              <input type="text" value={title} className="h3" />
            ) : title ? (
              <h3>{title}</h3>
            ) : null}
            {coming && <span className="coming">{coming}</span>}
            <div class="flex-container-2">
              {isAdmin && instructor ? (
                <div className="coach">
                  <i className="fa-solid fa-chalkboard-user"></i>
                  <select name="" id="">
                    {boardMembers.map((boardMember) => (
                      <option key={boardMember.id}>{boardMember.name}</option>
                    ))}
                    {teamMembers.map((teamMember) => (
                      <option key={teamMember.id}>{teamMember.name}</option>
                    ))}
                  </select>
                </div>
              ) : instructor ? (
                <div className="coach">
                  <i className="fa-solid fa-chalkboard-user"></i>
                  {instructor}
                </div>
              ) : null}

              {isAdmin && places ? (
                <div className="amount">
                  <i className="fa-solid fa-child"></i>
                  <input type="number" value={places} />
                </div>
              ) : places ? (
                <div className="amount">
                  <i className="fa-solid fa-child"></i>
                  {places}
                </div>
              ) : null}

              {isAdmin && openingHours ? (
                <div className="when">
                  <i className="fa-regular fa-clock"></i>
                  <input type="text" value={openingHours} />
                </div>
              ) : openingHours ? (
                <div className="when">
                  <i className="fa-regular fa-clock"></i>
                  {openingHours}
                </div>
              ) : null}
            </div>
          </div>

          {year && (
            <h5>
              {isAdmin ? (
                <>
                  {" "}
                  <i class="fa-regular fa-calendar"></i> Posted on{" "}
                  <select value={month} name="" id="">
                    {months.map((month, index) => (
                      <option key={index} value={index}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select name="" id="">
                    <option value="">{currentYear}</option>
                    <option value="">{nextYear}</option>
                    <option value="">{previousYear}</option>
                  </select>
                </>
              ) : (
                <div className="date">
                  <i class="fa-regular fa-calendar"></i>
                  Posted on {month} {day}, {year}
                </div>
              )}
            </h5>
          )}
          {isAdmin ? (
            <TextEditor htmlContent={description} />
          ) : description ? (
            <p>{description}</p>
          ) : null}

          {readMore && (
            <div class="div-readmore">
              <MyLink to={customReadMoreLink || `/article/${articleId}`}>
                <p class="readmore">
                  {readMore} <i class="fa-solid fa-arrow-right"></i>
                </p>
              </MyLink>
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
