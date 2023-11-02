import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, Side, Slideshow, Section } from "../../components";
import { useParams } from "react-router-dom";
import { whatwedo } from "./WhatWeDo";

const Wwd = () => {
  const { wwdId } = useParams();
  const wwd = whatwedo.find((wwd) => wwd.id === Number(wwdId));
  const dots = wwd.slides ? Array(wwd.slides.length).fill(null) : [];

  if (!wwd) {
    return <div>Article not found.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div>
            <Link to={`/whatwedo#${wwdId}`}>
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to What We Do
                </p>
              </div>
            </Link>
          </div>
          <div className="article" id={wwdId}>
            <Section
              header={wwd.title}
              description={wwd.description}
              img={wwd.img}
            />

            {wwd.sections.map((section) => (
              <div>
                <Section
                  key={section.section_id}
                  title={section.section_title}
                  img={section.section_image}
                  description={section.section_description}
                />
              </div>
            ))}
            {wwd.slides && wwd.slides.length > 0 && (
              <Slideshow slides={wwd.slides} dots={dots} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wwd;
