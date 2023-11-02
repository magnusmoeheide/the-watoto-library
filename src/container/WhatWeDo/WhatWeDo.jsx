import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, Side, Section } from "../../components";
import { images } from "../../constants";
import Locationscroll from "../../components/Locationscroll/Locationscroll";

export const whatwedo = [
  {
    id: "1",
    title: "Computer Class",
    instructor: "Evans",
    places: "20",
    openingHours: "Sat 8am - 12pm",
    img: images.computerClass2,
    description:
      "The Watoto Library is excited to announce the launch of its new computer classes, made possible by a generous donation of computers from Skullerud lower secondary school in Oslo, Norway. These classes will provide the Kibera children with valuable skills that will help them succeed in the digital age.",
  },
  {
    id: "2",
    title: "Chess Club",
    instructor: "Brandon",
    places: "25",
    openingHours: "Weekends",
    img: images.chessClub2,
    description:
      "As part of The Watoto Library's many engagements, we have decided to invest in the game of chess. Chess is a brilliant game that challenges the mind, strategy, and gives rise to the children's confidence. As a library we are committed to supporting that more kids can come in and play the game with one another.",
  },
  {
    id: "3",
    title: "Study Group",
    instructor: "Justin",
    places: "40",
    openingHours: "Opening hours",
    img: images.studyGroup4,
    description:
      "One of The Watoto Library's most important engagements is our study group. The library is a safe place where kids can come in and do their school work in a safe and calm environment with no outside disctraction. We also provide books, access to light, power, computers and Internet.",
  },
  {
    id: "4",
    title: "Dance Group",
    instructor: "Bernard",
    places: "25",
    openingHours: "Sat - Sun | 2pm - 6pm",
    img: images.danceGroup1,
    description:
      "Every Saturday our dance teacher Bernard Chacha organizes a dancing class for the kids. He believes that dance is another form of discipline and one way to keep the youths of Kibera out of the street. It is also a brilliant way for them to learn preseverance and self-motivation.",
  },
  {
    id: "5",
    title: "Kibera Local Water Forum",
    instructor: "Brandon",
    openingHours: "Fri - Sat | 8 - 12am",
    img: images.klwf13,
    description:
      "We are dedicated to restoring and beautifying a long section of the Nairobi River that flows through our community. In the past, this river played a crucial role in enhancing our community's well-being, serving as a source of clean water for drinking, bathing, and washing clothes.",
  },
];

const WhatWeDo = () => {
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
                <h2>What We Do</h2>
                <div className="flex-container-2">
                  <div className="openhrs">Opening hours</div>
                  <div className="flex-container-2">
                    <div className="when">
                      <i className="fa-regular fa-calendar"></i>Mon - Fri: 4pm -
                      9pm
                    </div>
                    <div className="when">
                      <i className="fa-regular fa-calendar"></i>Sat - Sun: 8am -
                      9pm
                    </div>
                  </div>
                </div>
                <p>
                  We inspire, empower and facilitate childhood growth in areas
                  faced with poverty and oppression. We do studying, dancing,
                  computer classes and chess regularly. You can read more about
                  our other engagements in our newsletters.
                </p>
                <Link to="/articles">
                  <div className="div-readmore">
                    <p className="allNewsLetters">
                      All newsletters{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </p>
                  </div>
                </Link>
              </div>
              <img src={images.happyBoys} className="img" />
            </div>
          </div>
          <br />

          {whatwedo.map((wwd) => (
            <div>
              <div key={wwd.id} className="article" id={wwd.id}>
                <Section
                  wwdId={wwd.id}
                  title={wwd.title}
                  instructor={wwd.instructor}
                  places={wwd.places}
                  openingHours={wwd.openingHours}
                  description={wwd.description}
                  img={wwd.img}
                  readMore="Read more"
                  customReadMoreLink={wwd.id}
                />
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhatWeDo;
