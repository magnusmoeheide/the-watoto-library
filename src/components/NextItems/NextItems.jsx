import React from "react";
import { Link } from "react-router-dom";

function NextItems({ items, currentIdentifier, identifierType }) {
  const filteredItems = items.filter((item) => item.status === "Published");

  filteredItems.sort((a, b) => a.id - b.id);

  const currentId = identifierType === "id" ? Number(currentIdentifier) : null;

  const sortedItems = filteredItems
    .filter((item) => {
      return identifierType === "id"
        ? item.id !== currentId
        : item.url !== currentIdentifier;
    })
    .sort((a, b) => {
      return identifierType === "id" ? a.id - b.id : a.url.localeCompare(b.url);
    });

  const nextIndex = sortedItems.findIndex((item) =>
    identifierType === "id" ? item.id > currentId : item.url > currentIdentifier
  );
  const prevIndex = nextIndex === -1 ? sortedItems.length : nextIndex;

  const nextArticles = sortedItems.slice(nextIndex, nextIndex + 3);
  const prevArticles = sortedItems.slice(Math.max(0, prevIndex - 3), prevIndex);

  let articlesToShow = [...nextArticles, ...prevArticles].slice(0, 3);

  return (
    <div>
      <br />
      <div
        className={
          identifierType === "id" ? "article-click" : "related-activities"
        }
        style={{ cursor: "default" }}
      >
        <h3>{identifierType === "id" ? "Read More" : "Discover More"}</h3>
        {articlesToShow.map((item) => (
          <Link
            to={
              identifierType === "id"
                ? `/article/${item.id}`
                : `/whatwedo/${item.url}`
            }
            key={item.id}
          >
            <div className="newsletter-wrapping">
              <span className="button">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NextItems;
