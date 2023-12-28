import React from "react";
import { images } from "../../constants";
import {
  Navbar,
  Footer,
  Side,
  Slideshow,
  Section,
  MyLink,
} from "../../components";

const Founders = () => {
  const slides = [images.founder3, images.founder8, images.founder5];
  const dots = Array(slides.length).fill(null);

  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div>
            <MyLink to="/about#founders">
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to About
                </p>
              </div>
            </MyLink>
          </div>
          <div className="article">
            <Section
              header="Our Founders"
              description={
                <>
                  The Watoto Library was founded by Brandon Francis Okoth and
                  Magnus Heide. Brandon was himself born and raised in Kibera.
                  He started volunteering in 2008 at only 8 years old, but
                  already stood out as a responsible boy, taking care of all the
                  small kids in the area. From there started taking on more and
                  more responsibilities with a mission of supporting the Kibera
                  kids.
                </>
              }
              img={images.founder1}
            />

            <Section
              title="Brandon's Academy"
              description={
                <>
                  At the age of 14, he started Brandon's Academy. This system
                  supports children in school from 1-8th grade and high school
                  through sponsors. Brandon works as their coordinator and
                  advisor, and is the person who is in contact with the school,
                  parents and sponsors. He has himself experienced hardship and
                  suffering, and because of that always taken a big part in the
                  children's education to help improve their situation.
                </>
              }
              img={images.founder2}
            />

            <Section
              title="Magnus Heide"
              description={
                <>
                  Co-Founder Magnus has from a young age been a Kenya-sponsor
                  and supported children in need. During his first travels to
                  Kenya in 2020, he resided in the Kibera slum, and saw and
                  experienced the struggles the people go through on a daily
                  basis. He was schocked to see the huge inequalities, and has
                  since decided to come back to Kenya every year to help bring
                  change to the lives of children living in absolute poverty.
                </>
              }
              img={images.founder7}
            />

            <Section
              title="The Dream of a Library"
              description={
                <>
                  Brandon has always had a soft heart for kids. From a young age
                  he always dreamt about starting a library where they can come
                  in an study, engage and grow. Magnus works in a school in
                  Norway and the huge inequalities he experienced installed a
                  deep call for action. In 2021 Brandon found a suitable place,
                  set it up, and partnered with Magnus. Now we are working
                  together for a better future.
                </>
              }
              img={images.founder6}
            />

            <Slideshow slides={slides} dots={dots} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Founders;
