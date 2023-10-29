import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { Navbar, Footer, Side, Section } from "../../components";

const Kibera = () => {
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
              img={images.kibera2}
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
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kibera;
