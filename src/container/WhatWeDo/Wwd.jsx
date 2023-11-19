import React from "react";
import {
  Navbar,
  Footer,
  Side,
  Slideshow,
  Section,
  MyLink,
} from "../../components";
import { useParams } from "react-router-dom";
import { whatwedo } from "./WhatWeDo";
import NextItems from "../../components/NextItems/NextItems";

const Wwd = ({ isAdmin }) => {
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
            <MyLink to={`/programs#${wwdUrl}`}>
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to Programs
                </p>
              </div>
            </MyLink>
            {isAdmin && (
              <>
                <span className={`status-${wwd.status.toLowerCase()}`}>
                  {wwd.status === "Published" ? (
                    <>
                      {wwd.status} <i className="fa fa-check-circle"></i>
                    </>
                  ) : (
                    <>
                      {wwd.status} <i className="fa fa-pencil-alt"></i>
                    </>
                  )}
                </span>
                <span className="div-readmore status">
                  {" "}
                  {wwd.status === "Published" ? <>Unpublish</> : <>Publish</>}
                </span>
              </>
            )}
          </div>
          <div className="article" id={wwdUrl}>
            <Section
              header={wwd.title}
              coming={wwd.coming}
              instructor={wwd.instructor}
              places={wwd.places}
              openingHours={wwd.openingHours}
              description={wwd.description}
              img={wwd.img}
              isAdmin={isAdmin}
            />

            {wwd.sections.map((section) => (
              <div>
                <Section
                  key={section.section_id}
                  title={section.section_title}
                  img={section.section_image}
                  description={section.section_description}
                  isAdmin={isAdmin}
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
