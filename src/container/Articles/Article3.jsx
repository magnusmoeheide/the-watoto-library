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

const Article3 = () => {
  const currentArticleId = "3";

  const slides = [images.three9, images.three1, images.three10];
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
              header="Painting The Library"
              day="8"
              month="October"
              year="2022"
              description="Today when you walk into the library, you will find drawings done 
              on the wall by the kids of our project. When we first moved into the place, 
              the walls had the original cement colour lacking warmth to the space. 
              After consultation with the kids, we decided to make the walls more playful and fun."
              img={images.three7}
            />

            <Section
              title="Sharing and Creating"
              description="The kids were able to make the space to be vibrant and welcoming for every child. 
              They shared the paints and brushes among themselves giving everyone a chance to participate. 
              The wall has come out naturally and showcases the diversity of the children’s minds, 
              as they come from different backgrounds and upbringings. 
              These different backgrounds results in different personalities."
              img={images.three6}
            />

            <Section
              title="Everyone deserves a High Five"
              description="When you pay attention to the wall, you will find lots of love/heart drawings. 
              As your eyes continue reading the wall, you will spot many hand-prints made by the kids using paint. 
              I believe this is to remind us that we all deserve a high five. We are all loved and appreciated just the way we are."
              img={images.three2}
            />

            <Section
              title="Finding Courage"
              description="They have shared with one another their vulnerabilities, and found the courage to come together to laugh, 
              learn and play. One of our kids, Shadrack Odongo aka Babji tells of his experience after painting the wall. 
              He says he got a chance to tell others about himself and was able to make new friends."
              img={images.three5}
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

export default Article3;
