import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { Navbar, Footer, Side, Slideshow, Section } from "../../components";

const Founder = () => {
  const slides = [images.founder5];
  const dots = Array(slides.length).fill(null);

  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div>
            <Link to="/about#founder">
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to About
                </p>
              </div>
            </Link>
          </div>
          <div className="article">
            <Section
              header="Our Founder"
              description={
                <>
                  Our founder, Brandon Francis Okoth, was himself born and
                  raised in Kibera. He started volunteering in 2008 at only 8
                  years old, but already stood out as a responsible boy, taking
                  care of all the small kids in the area. From there started
                  taking on more and more responsibilities with a mission of
                  supporting the Kibera kids.
                </>
              }
              img={images.founder1}
            />

            <Section
              title="Brandon's Academy"
              description={
                <>
                  At the age of 14, he started Brandon's Academy where he
                  supports children in school from 1-8th grade and high school
                  through sponsors. He works as their coordinator and advisor,
                  and is the person who is in contact with the school, parents
                  and sponsors. He has himself experienced hardship and
                  suffering, and because of that always taken a big part in the
                  children's education to help improve their situation.
                </>
              }
              img={images.founder2}
            />

            <Section
              title="Other Engagements"
              description={
                <>
                  Brandon has a lot of experience with helping improve local
                  communities from work in other organizations. He has done a
                  lot of work with SOS Odontología Social, a dentist team
                  providing free dental care to vunerable communities. He has
                  also worked a lot with ONGD Youcanyolé Expediciones Médicas, a
                  team of Spanish doctors that operate in Kibera. Brandon is
                  very engaged in helping people and trying to make the world a
                  better place.
                </>
              }
              img={images.founder4}
            />

            <Section
              title="The Dream of a Library"
              description={
                <>
                  Brandon has always had a soft heart for kids. From a young age
                  he always dreamt about starting a library where they can come
                  in an study, engage and grow. In 2021 he decided to put
                  thought a long-time thought to action. He found a suitable
                  place, set it up, and partnered with friends. Now we are
                  working together for a better future.
                </>
              }
              img={images.founder3}
            />

            <Slideshow slides={slides} dots={dots} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Founder;
