import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import {
  Navbar,
  Footer,
  Side,
  Slideshow,
  Section,
  NextArticles,
} from "../../components";
import { useParams } from "react-router-dom";
import { articles } from "./Articles";

const Article = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.id === Number(articleId));
  const dots = article.slides ? Array(article.slides.length).fill(null) : [];

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div>
            <Link to={`/articles#${articleId}`}>
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to Newsletters
                </p>
              </div>
            </Link>
          </div>
          <div className="article" id={articleId}>
            <Section
              header={article.title}
              day={article.day}
              month={article.month}
              year={article.year}
              description={article.description}
              img={article.img}
            />

            {article.sections.map((section) => (
              <div>
                <Section
                  key={section.section_id}
                  title={section.section_title}
                  img={section.section_image}
                  description={section.section_description}
                />
              </div>
            ))}
            {article.slides && article.slides.length > 0 && (
              <Slideshow slides={article.slides} dots={dots} />
            )}
          </div>
          <NextArticles currentArticleId={articleId} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
