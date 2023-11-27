import React from "react";
import {
  Navbar,
  Footer,
  Side,
  Counter,
  Partners,
  Section,
  MyLink,
} from "../../components";
import { articles } from "../../container/Articles/Articles";
// import { is } from "immutable";

const Home = ({ isAdmin }) => {
  // const [isImageLoaded, setImageLoaded] = useState(false);
  const publishedArticles = articles.filter(
    (article) => article.status === "Published"
  ).length;

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
      {isAdmin && (
        <div className="article admin">
          <h2>Admin</h2>
          <p>
            Articles created: {articles.length} | Articles published:{" "}
            {publishedArticles}
          </p>
        </div>
      )}
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
                  isAdmin={isAdmin}
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
                  isAdmin={isAdmin}
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
                  isAdmin={isAdmin}
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
                  isAdmin={isAdmin}
                />
              </div>
            </div>
            <br />
            <MyLink to="/articles">
              <h2 className="home-newsletter-header">
                <u>Newsletters</u>
              </h2>
            </MyLink>

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

            <MyLink to="/articles">
              <div className="article-click goToNews">
                <p className="readmore">
                  All Newsletters <i className="fa-solid fa-arrow-right"></i>
                </p>
              </div>
            </MyLink>
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
