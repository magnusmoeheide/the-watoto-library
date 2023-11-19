import React from "react";
import { Navbar, Footer, Side, MyLink } from "../../components";
import { images } from "../../constants";
import Locationscroll from "../../components/Locationscroll/Locationscroll";

const About = () => {
  return (
    <div>
      <Locationscroll />
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div className="article">
            <div className="flex-image-text">
              <div>
                <h2>About Us</h2>
                <p>
                  The Watoto Library works to better the lives of children in
                  Kibera by providing free access to a library where kids can
                  come in and read books, do their school assignments, or get
                  free academic assistance and materials. Our work is soley run
                  by private funds and sponsors.
                </p>
              </div>
              <img
                src={images.insideTheLibrary}
                className="img"
                alt="Inside TWL"
              />
            </div>
          </div>

          <br />

          <div className="article" id="kibera">
            <div className="flex-image-text">
              <div>
                <h3>Kibera and its Kids</h3>
                <p>
                  The Watoto Library is located in Kibera, in Nairobi, Kenya.
                  Kibera is the largest urban slum in Africa. Around 2,000,000
                  people live here in what is defined as extreme poverty,
                  earning less than US$2 per day. Unemployment rates are high
                  and many people cannot afford education for their children.
                </p>
                <MyLink to="/about/kibera">
                  <div className="div-readmore">
                    <p className="readmore">
                      Read more <i className="fa-solid fa-arrow-right"></i>
                    </p>
                  </div>
                </MyLink>
              </div>
              <img src={images.kibera1} className="img" alt="Kibera1" />
            </div>
          </div>

          <br />

          <div className="article">
            <div className="flex-image-text">
              <div>
                <h3>Why The Watoto Library</h3>
                <p>
                  The Watoto Library is a support system to children suffering
                  silently and wishing to speak out. We help play a vital role
                  in empowering them by diligently promoting their confidence
                  and self esteem. We want to impact their childhood by also
                  encouraging them to have self discipline. We believe that when
                  they are treated with compassion, kindness, love and care,
                  they will grow up appreciating and respecting one another at
                  the same time building a culture of togetherness filled with
                  empathy for one another.
                </p>
              </div>
              <img src={images.workingTogether} className="img" alt="Why TWL" />
            </div>
            <div className="flex-image-text">
              <div>
                <p>
                  When you visit our library, you will be inspired to see older
                  kids teaching young kids the little knowledge that they have.
                  We have created a culture of openness, trust and respect among
                  the kids to help them believe in themselves and one another.
                  We play our role by providing a place with electricity,
                  sitting and writing area. We are currently looking for funds
                  to help us buy more study materials such as textbooks that
                  will aid the kids with their learning.
                </p>
              </div>
              <img
                src={images.happyChildren}
                className="img"
                alt="Happy children"
              />
            </div>
          </div>

          <br />

          <div className="article" id="founder">
            <div className="flex-image-text">
              <div>
                <h3>Our Founder</h3>
                <p>
                  Our founder, Brandon Francis Okoth, was himself born and
                  raised in Kibera. He started volunteering in 2008 at only 8
                  years old, but already stood out as a responsible boy, taking
                  care of all the small kids in the area, and thus becoming an
                  important reporter from the slums to the outside world.
                </p>
                <MyLink to="/about/founder">
                  <div className="div-readmore">
                    <p className="readmore">
                      Read more <i className="fa-solid fa-arrow-right"></i>
                    </p>
                  </div>
                </MyLink>
              </div>
              <img src={images.founder1} className="img" alt="The founder" />
            </div>
          </div>

          <br />

          <div className="article">
            <h3>The Watoto Library</h3>
            <div className="iframe-div">
              <iframe
                src="https://www.youtube.com/embed/6_YBgK2wsEs"
                title="YouTube video player"
                className="img"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
