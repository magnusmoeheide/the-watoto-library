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

const Article6 = () => {
  const currentArticleId = "6";

  const slides = [
    images.six1,
    images.six2,
    images.six3,
    images.six4,
    images.six5,
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
              header="Expanding The Library"
              day="1"
              month="February"
              year="2023"
              description={
                <>
                  The Watoto Library has since its very beginning been a popular
                  place for the kids in the community. Recently we have seen an
                  increased growth in kids wanting to engage in our activities,
                  and generous Christmas donations that have come in to the
                  library.
                </>
              }
              img={images.six7}
            />

            <Section
              title="A Computer Room"
              description={
                <>
                  Because of these donations, we were able to acquire a second
                  room nearby, to be used specifically for computer classes.
                  Computers in Kibera are scarce, and many of the kids have not
                  engaged with one before. It is therefore of great interest to
                  all the kids when we have the computers in the library.
                  However, that is not always beneficial for the ones who want
                  to learn how to use it. We therefore saw it important that we
                  separate the main library from the computer classes.
                  <br />
                  Read about the computer classes{" "}
                  <Link to="/whatwedo/computerclass">
                    <u>here</u>
                  </Link>
                  .
                </>
              }
              img={images.six8}
            />

            <Section
              title="Remodelling"
              description={
                <>
                  The room, however, was in a state of disrepair when it was
                  first acquired, with holes in the floor and walls. But the
                  library keepers and volunteers were determined to make the
                  space functional and inviting. The first step was to lay a new
                  floor, which involved removing the broken tiles and laying a
                  cement floor. After the new floor was in place, we set to
                  work, cleaning the room from top to bottom. Once the room was
                  sparkling clean, we were ready to add some furniture.
                </>
              }
              img={images.six6}
            />

            <Section
              title="Furniture"
              description={
                <>
                  We got four desks and benches made in Kibera to accommodate
                  our computers, and arranged them in a way that would be
                  functional and comfortable for computer classes. We saw that a
                  3 and 3 configuration would be beneficial so that the kids
                  easily could work together and help each other along the way.
                  Now, The Watoto Library's computer room and classes are
                  serving their purposes in the community.
                </>
              }
              img={images.six9}
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

export default Article6;
