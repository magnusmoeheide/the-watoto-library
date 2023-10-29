import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Footer,
  Side,
  Counter,
  Partners,
  Section,
} from "../../components";
import { images } from "../../constants";
import { articles } from "../../container/Articles/Articles";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div className="article">
            <div className="counter-parent">
              <Counter
                header="Programs"
                targetNumber={6}
                icon='<i class="fa-solid fa-utensils"></i>'
                description="Through our programs, we are able to bring change to many areas of the Kibera children's lives."
              />
              <Counter
                header="Children impacted"
                targetNumber={800}
                icon='<i class="fa-solid fa-hand-holding-medical"></i>'
                description="The entire community utilizes and appreciates The Watoto Library."
              />
              <Counter
                header="Children sent to school"
                targetNumber={1166}
                icon='<i class="fa-solid fa-school"></i>'
                description="We have been able to send several kids to school and change their future."
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
  );
};

export default Home;
