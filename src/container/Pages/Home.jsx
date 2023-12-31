import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Footer,
  Side,
  Counter,
  Partners,
  Section,
} from "../../components";
import { articles } from "../../container/Articles/Articles";
import { images } from "../../constants";

const Home = () => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <Navbar />{" "}
      {/* <div className="home-image">
        <img
          src={images.kiberaKidBlack}
          onLoad={() => setImageLoaded(true)}
          alt=""
        />
        <div className="dark-overlay"></div>
        <div className="overlay-text">
          We Facilitate Childhood Growth
          <br />
          <br />
          In Areas Faced With
          <br />
          Poverty And Oppression
        </div>
      </div> */}
      {/* {isImageLoaded && ( */}
      <div>
        <div className="row" id="flex">
          <Side />
          <div className="main" id="main">
            <div className="article">
              <div className="counter-parent">
                <Counter
                  header="Daily library users"
                  targetNumber={200}
                  icon='<i class="fa-solid fa-book"></i>'
                  description={
                    <>
                      More than 200 children have direct access to our library
                      on a daily basis.
                    </>
                  }
                />
                <Counter
                  header="Children impacted"
                  targetNumber={1200}
                  icon='<i class="fa-solid fa-hand-holding-medical"></i>'
                  description={
                    <>
                      The entire community utilizes and appreciates The Watoto
                      Library.
                    </>
                  }
                />
                <Counter
                  header="Sponsored children"
                  targetNumber={24}
                  icon='<i class="fa-solid fa-school"></i>'
                  description={
                    <>
                      We have been able to send a great number of children to
                      school.
                    </>
                  }
                />
                <Counter
                  header="Meals served"
                  targetNumber={800}
                  icon='<i class="fa-solid fa-utensils"></i>'
                  description={
                    <>
                      Through our programs, we have been able to feed many
                      children.
                    </>
                  }
                />
              </div>
            </div>
            <br />
            <Link to="/articles">
              <h2 className="home-newsletter-header">
                <u>Newsletters</u>
              </h2>
            </Link>

            {articles
              .filter((article) => article.status === "Published")
              .sort((a, b) => b.id - a.id)
              .slice(0, 3)
              .map((article) => (
                <div>
                  <div key={article.id} className="article" id={article.id}>
                    <Section
                      articleId={article.id}
                      header={article.title}
                      day={article.day}
                      month={article.month}
                      year={article.year}
                      description={article.description}
                      img={article.img}
                      readMore="Read more"
                    />
                  </div>
                  <br />
                </div>
              ))}

            <Link to="/articles">
              <div className="article-click goToNews">
                <p className="readmore">
                  All Newsletters <i className="fa-solid fa-arrow-right"></i>
                </p>
              </div>
            </Link>
          </div>
        </div>
        <Partners />
        <Footer />
      </div>
      {/* )} */}
    </div>
  );
};

export default Home;
