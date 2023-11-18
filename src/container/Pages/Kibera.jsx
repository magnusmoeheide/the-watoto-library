import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { Navbar, Footer, Side, Section, Slideshow } from "../../components";

const Kibera = () => {
  const slides = [images.kibera6];
  const dots = slides ? Array(slides.length).fill(null) : [];

  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div>
            <Link to="/about#kibera">
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to About
                </p>
              </div>
            </Link>
          </div>
          <div className="article">
            <Section
              header="Kibera"
              description={
                <>
                  The Watoto Library is located in Kibera, in Nairobi, Kenya.
                  Kibera is the largest urban slum in Africa. Around 2,000,000
                  people live here in what is defined as extreme poverty,
                  earning less than US$2 per day. Unemployment rates are high
                  and many people cannot afford education for their children.
                </>
              }
              img={images.kibera1}
            />

            <Section
              title="Who We Are Engaging With"
              description={
                <>
                  Any time you visit Kibera, you will be met with vibrant,
                  loving, brilliant young kids, filled with love and care for
                  one another. Kids, who should be allowed to just remain kids,
                  but who are faced with challenges that require them to tackle
                  with resilience, patience and hope. As young as four, the kids
                  know that they must work extra hard for a better future for
                  themselves and their families.
                </>
              }
              img={images.kibera2}
            />

            <Section
              title="The Life of A Kibera Child"
              description={
                <>
                  <p>
                    The kids come from very humble backgrounds, from families
                    that can barely maintain or even afford their basic needs.
                    They live to survive each day. Sharing in the struggles of
                    their parents, neighbours and friends, hoping for brighter
                    days ahead.
                  </p>
                  <p>
                    They are faced with challenges as early as childhood and are
                    filled with many responsibilities. The children are not
                    given the space to express themselves and the freedom to be
                    children.
                  </p>
                </>
              }
              img={images.kibera3}
            />

            <Section
              title="Suffering in Silence"
              description={
                <>
                  Most of the time they become co-parents to their siblings or
                  young ones when their parents are out in search of food.
                  Living in single rooms, without running water and having to
                  share a bathroom or washroom with more than hundreds of
                  strangers, these kids live in the traumas of poverty. They
                  witness domestic violence happening at home. They struggle to
                  find guidance and support, hence ending up not knowing where
                  they belong.
                </>
              }
              img={images.kibera4}
            />

            <Section
              title="The School Situation in Kibera"
              description={
                <>
                  Some kids go to public schools around them, and the majority
                  of these schools are overwhelmed by the number of kids
                  attending. The resources provided by the government are
                  scarce, leaving the schools surviving for excistance. When a
                  classroom is filled with over ninety children and only one
                  class teacher, you will find that many of the kids go
                  unnoticed, unappreciated, and not well taken care of.
                </>
              }
              img={images.kibera5}
            />

            {/* <Section
              title="Kibera Statistics"
              description={
                <>
                  <p>
                    Only 40% of the children attend school. <br />
                    Only 1 out of 2 girls will ever attend school. <br />
                    19% of children will not live to see their 5th birthday.{" "}
                    <br />
                    50% of Kibera's eligeble workforce is unemployed. <br />
                    Only 20% of the houses have electricity. <br />
                    The average home measures 3.5 x 3.5 meters with an average
                    of 8 people living together.
                  </p>

                  <p>
                    Source:{" "}
                    <Link
                      to="https://www.chaffinch.org.uk/kibera-slum/"
                      target="_blank"
                    >
                      <u>chaffinch.org.uk</u>
                    </Link>
                  </p>
                </>
              }
              img={images.kibera6}
            /> */}
            <Slideshow slides={slides} dots={dots} />
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kibera;
