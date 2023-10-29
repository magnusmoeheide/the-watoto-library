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

const Article5 = () => {
  const currentArticleId = "5";

  const slides = [
    images.five1,
    images.five2,
    images.five3,
    images.five4,
    images.five9,
  ];
  const dots = Array(slides.length).fill(null);

  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div>
            <Link to={`/articles#${currentArticleId}`}>
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to Newsletters
                </p>
              </div>
            </Link>
          </div>
          <div className="article" id={currentArticleId}>
            <Section
              header="Sharing Is Caring"
              day="10"
              month="January"
              year="2023"
              description="During the month of December, The Watoto Library received
                  generous donations. Among them many contributions to our New
                  Year's dinner, and an individual donation of 360 kilograms of
                  ugali flour and sugar. We are very grateful for these
                  donations that have enabled us to give many kids a nutritious
                  meal."
              img={images.five5}
            />

            <Section
              title="Sharing a Meal with Our Kids"
              description="On January 7th we cooked for over 100 Kibera kids. We made
              rice, beef and potato stew, and shared with the kids in the
              neighbourhood. We also gave juice and the kids got some candy
              to enjoy. We wanted to welcome everyone in the community to
              get together and enjoy a warm meal to celebrate the new year,
              no matter if they had engaged with the library before or not."
              img={images.five6}
            />

            <Section
              title="Everyone Contributing"
              description="The kids were happy to help prepare the food, which included
              peeling potatoes and chopping tomatoes and onions. They took
              the responsibility to organize and make sure everything was
              going as planned. The younger kids were served by the older
              kids, reminding us of the ubuntu philosophy, 'I am because we
              are'."
              img={images.five7}
            />

            <Section
              title="Food Distribution during Christmas"
              description=" During the Christmas season, a good friend of the library was
              kind enough to donate more than 360 kgs of food, which
              included ugali flour and sugar. This was distributed among 60
              families. Ugali is the most commonly eaten food in Kenya and
              is made from grinded corn, stirred in boiling water, and
              serves as a nutricious meal. We really appreciate the donation
              from this individual."
              img={images.five10}
            />

            <Section
              title="Thank You!"
              description="We are very grateful for the generous donations received. We
              are committed to continue to serve the community in the best
              way possible. The response to the food donation was
              overwhelmingly appreciated, with many families expressing
              gratitude for the love and kindness shown during this
              Christmas time. For many, the donated food provided a crucial
              source of sustainance during a time of economic uncertainty
              and food insecurity."
              img={images.five8}
            />

            <Slideshow slides={slides} dots={dots} />
          </div>
          <NextArticles currentArticleId={currentArticleId} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article5;
