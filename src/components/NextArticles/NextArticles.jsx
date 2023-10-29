import React, { useState } from "react";
import { Link } from "react-router-dom";
import { articles } from "../../container/Articles/Articles";

function NextArticles({ currentArticleId }) {
  const currentArticleIndex = articles.findIndex(
    (article) => article.id === currentArticleId
  );

  let prevArticles = articles
    .slice(Math.max(0, currentArticleIndex - 3), currentArticleIndex)
    .reverse();

  if (prevArticles.length < 3) {
    const nextArticlesNeeded = 3 - prevArticles.length;
    const nextArticles = articles.slice(
      currentArticleIndex + 1,
      currentArticleIndex + 1 + nextArticlesNeeded
    );
    prevArticles = prevArticles.concat(nextArticles);
  }

  return (
    <div>
      <br />
      <div className="article-click" style={{ cursor: "default" }}>
        <h3>Read More</h3>
        {prevArticles.map((article) => (
          <Link to={`/articles/${article.id}`} key={article.id}>
            <div className="newsletter-wrapping">
              <a className="button">{article.title}</a>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NextArticles;
