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

const Article4 = () => {
  const currentArticleId = "4";

  const slides = [
    images.four4,
    images.four5,
    images.four6,
    images.four7,
    images.four8,
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
              header="Partnering with WWQA"
              day="5"
              month="November"
              year="2022"
              description="The Watoto Library has started a partnership with the World
              Water Quality Alliance, a sub-division of the United Nations
              Environment Programme. The goal of the partnership is to do
              cleanups around Kibera with the aim of improving the water
              quality of the community."
              img={images.four9}
            />

            <Section
              title="Kibera River"
              description="Kibera suffers from a lack of access to basic needs, such as
              clean water and a sewage system. The Kibera river is a source
              of water for the community living near it, but unfortunately,
              it has faced numerous challenges that have affected its
              quality and availability. Over time, the river has become
              polluted due to human waste being dumped into it, which has
              led to cholera development and health problems for those who
              rely on it."
              img={images.four3}
            />

            <Section
              title="WWQA Conference"
              description="Brandon was invited to attend the annual WWQA conference in
              Konstanz, Germany as a sponsored participant, where he shared
              his expertise on the water and river challenges facing the
              Kibera community. Here, he outlined the issues and proposed
              potential solutions. The conference attendees, which included
              industry leaders and experts in the field, were deeply
              saddened by the current state of the Kibera river and began
              discussing ways to take action and improve the water
              situation. Brandon appreciated the opportunity to raise
              awareness about the challenges facing his community and we
              look forward to changing it."
              img={images.four2}
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

export default Article4;
