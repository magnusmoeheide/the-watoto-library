import React from "react";

import {
  Navbar,
  Footer,
  Side,
  Slideshow,
  Section,
  NextItems,
  MyLink,
} from "../../components";
import { useParams } from "react-router-dom";
import { articles } from "./Articles";

const Article = ({ isAdmin }) => {
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
            <MyLink to={`/articles#${articleId}`}>
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to Newsletters
                </p>
              </div>
            </MyLink>
            {isAdmin && (
              <>
                <span className={`status-${article.status.toLowerCase()}`}>
                  {article.status === "Published" ? (
                    <>
                      {article.status} <i className="fa fa-check-circle"></i>
                    </>
                  ) : (
                    <>
                      {article.status} <i className="fa fa-pencil-alt"></i>
                    </>
                  )}
                </span>
                <span className="div-readmore status">
                  {" "}
                  {article.status === "Published" ? (
                    <>
                      <i class="fa-solid fa-download"></i> Unpublish
                    </>
                  ) : (
                    <>
                      <i class="fa-solid fa-upload"></i> Publish
                    </>
                  )}
                </span>
                <span className="div-readmore status">
                  <i class="fa-solid fa-trash-can"></i> Delete
                </span>
              </>
            )}
          </div>
          <div className="article" id={articleId}>
            <Section
              header={article.title}
              day={article.day}
              month={article.month}
              year={article.year}
              description={article.description}
              img={article.img}
              isAdmin={isAdmin}
            />

            {article.sections.map((section) => (
              <div>
                <Section
                  key={section.section_id}
                  title={section.section_title}
                  titlespan={section.section_titlespan}
                  img={section.section_image}
                  description={section.section_description}
                  isAdmin={isAdmin}
                />
              </div>
            ))}
            {article.slides && article.slides.length > 0 && (
              <Slideshow slides={article.slides} dots={dots} />
            )}
          </div>
          <NextItems
            items={articles}
            currentIdentifier={articleId}
            identifierType="id"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
