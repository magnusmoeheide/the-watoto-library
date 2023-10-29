import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, Side, Slideshow } from "../../components";
import { images } from "../../constants";

const StudyGroup = () => {
  const currentWwdId = "3";

  const slides = [
    images.studyGroup1,
    images.studyGroup2,
    images.studyGroup5,
    images.studyGroup9,
    images.studyGroup8,
  ];
  const dots = Array(slides.length).fill(null);

  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div>
            <Link to={`/whatwedo#${currentWwdId}`}>
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to What We Do
                </p>
              </div>
            </Link>
          </div>
          <div className="article">
            <div className="flex-image-text">
              <div>
                <div className="flex-container-2">
                  <h2>Study Group</h2>
                  <div
                    className="coach"
                    onclick="location.href='getInTouch.html#justin';"
                  >
                    <i className="fa-solid fa-chalkboard-user"></i>Justin
                  </div>
                  <div className="amount">
                    <i className="fa-solid fa-child"></i>40
                  </div>
                  <div className="when">
                    <i className="fa-regular fa-clock"></i>Opening hours
                  </div>
                </div>
                <p>
                  One of The Watoto Library's most important engagement is our
                  study group. The library is a safe place where kids can come
                  in and do their school work in a safe and calm environment
                  with no outside disctraction. We also provide books, access to
                  light, power, computers and Internet, and a place where they
                  can get guidance and help with their work.
                </p>
              </div>
              <img src={images.studyGroup4} class="img" />
            </div>
            <br />

            <div className="flex-image-text">
              <div>
                <h3>Difficult to Study At Home</h3>
                <p>
                  Many of the kids who visit our library come from a difficult
                  home situation. You will often find that they live with
                  several other people in one room, maybe without power and in
                  many cases with no Internet. These are very difficult study
                  conditions and many are not able to concentrate properly.
                </p>
              </div>
              <img src={images.studyGroup3} class="img" />
            </div>
            <br />

            <div className="flex-image-text">
              <div>
                <h3>Guidance and Assistanse</h3>
                <p>
                  Kids that come to the library will get free assistance from
                  our library keepers who can help them with their school work.
                  At home it might be difficult to get assistance from family
                  members because education is not often a priority and many
                  suffer from lack of education. Therefore they might not have
                  confidence to ask their parents for assistance. With our
                  library they can freely ask for help or work together with
                  other kids.
                </p>
              </div>
              <img src={images.studyGroup6} class="img" />
            </div>
            <br />

            <Slideshow slides={slides} dots={dots} />
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudyGroup;
