import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, Side, Slideshow, Section } from "../../components";
import { useParams } from "react-router-dom";
import { whatwedo } from "./WhatWeDo";
import NextItems from "../../components/NextItems/NextItems";

const Wwd = () => {
  const { wwdUrl } = useParams();
  const wwd = whatwedo.find((item) => item.url === wwdUrl);
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
            <Link to={`/whatwedo#${wwdUrl}`}>
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to What We Do
                </p>
              </div>
            </Link>
          </div>
          <div className="article" id={wwdUrl}>
            <Section
              header={wwd.title}
              coming={wwd.coming}
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
          <br />
          <div className="article">
            <NextItems
              items={whatwedo}
              currentIdentifier={wwdUrl}
              identifierType="url"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wwd;
