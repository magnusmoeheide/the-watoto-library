import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { images } from "../../constants";
import { Navbar, Footer, Side, Section } from "../../components";
import { SelectArticle } from "../../components";

export const articles = [
  {
    id: "10",
    day: "27",
    month: "July",
    year: "2023",
    title: "Building Bonds of Joy and Hope",
    img: images.ten10,
    description:
      "Our best gifts come from our library children. The gifts of joy and hope, as we shower them with lots of love and care. They have taught us to be good listeners as they share their life stories with us. We are walking a beautiful journey with the children, reminding each other that we are here for one another.",
  },
  {
    id: "9",
    day: "29",
    month: "June",
    year: "2023",
    img: images.nine4,
    title: "Serving The Community",
    description:
      "This month of June has provided an opportunity for our children, along with their parents and our staff, to join forces. We have embarked on a mission to make a difference for our community. We have joined hands with the Kibera Local Water Forum, which is also headed by our own director Brandon Okoth.",
  },
  {
    id: "8",
    day: "26",
    month: "May",
    year: "2023",
    img: images.eight1,
    title: "Empowering the Kibera Community",
    description:
      "The Kibera community is a place of resilience, filled with wonderful and kind-hearted people who hold onto hope for a better and brighter future. Every day, our library welcomes more children through its doors, and we have witnessed an increase in the number of those accessing and using our space. We pray and hope that we may continue to grow to serve a larger population of the community.",
  },
  {
    id: "7",
    day: "19",
    month: "March",
    year: "2023",
    img: images.seven3,
    title: "Nurturing The Academic Growth Of Children",
    description:
      "Justin Omondi, our library keeper, has been in the frontline encouraging, supporting and sharing his mathematic skills with our library children for the past three months. Twenty grade eight pupils, who will be sitting for their national primary school exams in November, have taken advantage of his commitment to help them improve in their grades.",
  },
  {
    id: "6",
    day: "1",
    month: "February",
    year: "2023",
    img: images.six7,
    title: "Expanding The Library",
    description:
      "The Watoto Library has since its very beginning been a popular place for the kids in the comminity. Recently we have seen an increased growth in kids wanting to engage in our activities, and generous Christmas donations that have come in to the library.",
  },
  {
    id: "5",
    day: "10",
    month: "January",
    year: "2023",
    img: images.five5,
    title: "Sharing Is Caring",
    description:
      "During the month of December, The Watoto Library received many contributions to our New Year's dinner, and an individual donation of 360 kilograms of ugali flour. We are very grateful for these donations that have enabled us to give many kids a nutritious meal.",
  },
  {
    id: "4",
    day: "5",
    month: "November",
    img: images.four9,
    year: "2022",
    title: "Partnering With The WWQA",
    description:
      "The Watoto Library has started a partnership with the World Water Quality Alliance, a sub-division of the United Nations Environment Programme. The goal of the partnership is to do cleanups around Kibera with the aim of improving the water quality of the community.",
  },
  {
    id: "3",
    day: "8",
    month: "October",
    year: "2022",
    img: images.three7,
    title: "Painting The Library",
    description:
      "Today when you walk into the library, you will find drawings done on the wall by the kids of our project. When we first moved into the place, the walls had the original cement color lacking warmth to the space. After consultation with the kids we decided to make the walls more playful and fun.",
  },
  {
    id: "1",
    day: "1",
    month: "July",
    year: "2022",
    img: images.one6,
    title: "How The Watoto Library Started",
    description:
      "- As I was walking around my neighbourhood in Kibera, I came to a stand stop when I spotted one school moving their books out of their library. They had been renting the space as their own for several years.",
  },
];

const Articles = () => {
  const years = ["2023", "2022"];
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <div className="main">
          <div class="row">
            <div class="page">
              <div>
                <Link to="/whatwedo">
                  <div className="div-back">
                    <p className="allNewsLetters">
                      <i className="fa-solid fa-arrow-left"></i>Back to What We
                      Do
                    </p>
                  </div>
                </Link>
              </div>

              <div
                class="article-click newsletters"
                style={{ cursor: "default" }}
              >
                <h2>Newsletters</h2>
                <SelectArticle />
                {/* <p>
                  Do you want to receive an email when a new newsletter is out?
                  Sign up here.
                  <form
                    class="newsletterForm"
                    action="https://submit-form.com/JNE0JVGT"
                  >
                    <input
                      type="hidden"
                      name="_redirect"
                      action="https://thewatotolibrary.org/newsletter-success.html"
                      method="get"
                      value="https://thewatotolibrary.org/newsletter-success.html"
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required=""
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                    <button class="div-readmore" type="submit">
                      Sign up
                    </button>
                  </form>
                </p> */}
              </div>

              <div class="timeline">
                {years.map((year) => (
                  <div key={year} className="timeline__group">
                    <span className="timeline__year time" aria-hidden="true">
                      {year}
                    </span>
                    <div className="timeline__cards">
                      {articles
                        .filter((article) => article.year.includes(year))
                        .map((article) => (
                          <div
                            key={article.id}
                            className="timeline__card article-card"
                            id={article.id}
                          >
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
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
