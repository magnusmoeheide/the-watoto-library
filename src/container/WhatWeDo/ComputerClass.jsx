import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, Side, Slideshow, Section } from "../../components";
import { images } from "../../constants";

const ComputerClass = () => {
  const currentWwdId = "1";

  const slides = [images.computerClass9];
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
            <Section
              header="Computer Class"
              instructor="Evans"
              places="20"
              openingHours="Sat 8am - 12pm"
              description={
                <>
                  The Watoto Library is excited to announce the launch of our
                  new computer classes, made possible by a generous donation of
                  computers from{" "}
                  <a href="https://skullerud.osloskolen.no/" target="_blank">
                    <u>
                      Skullerud lower secondary school{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </u>
                  </a>{" "}
                  in Oslo, Norway. These classes will provide the Kibera
                  children with valuable skills that will help them connect with
                  the digital world.
                </>
              }
              img={images.computerClass2}
            />

            <Section
              title="Expanding The Library"
              description={
                <>
                  To accommodate the computer classes, we have purchased and
                  refurbished a room next to the library, creating a dedicated
                  space for the children to learn and explore the world of
                  technology. The room is equipped with desks and benches,
                  computers and necessary equipment, ensuring that the children
                  have access to the tools they need to succeed.
                  <br />
                  Read about the expansion{" "}
                  <Link to="/articles/6" target="_blank">
                    <u>here</u>.
                  </Link>
                </>
              }
              img={images.computerClass4}
            />

            <Section
              title="Our Trainer"
              description={
                <>
                  Malcom, an experienced computer trainer, will be leading the
                  classes, teaching the children how to use the computer.
                  Through the classes they will learn everything from how to
                  operate a computer, to how to create graphic designs and work
                  with Adobe programs. Malcom will be working closely with the
                  children, providing individualized instruction and support to
                  help them achieve their goals.
                </>
              }
              img={images.computerClass7}
            />

            <Section
              title="Building Skills"
              description={
                <>
                  The computer classes will not only provide the children with
                  valuable technical skills, but they will also help to promote
                  creativity, critical thinking, and problem-solving. These are
                  all essential skills that will help the children succeed, and
                  will give them the tools they need to make a better life for
                  themselves and their families.
                </>
              }
              img={images.computerClass7}
            />

            <Section
              title="Thank You"
              description={
                <>
                  The Watoto Library is committed to providing the children in
                  the community with the resources and support they need to
                  succeed. With the addition of computer classes, the library is
                  expanding its offerings and providing the children with the
                  opportunity to learn valuable skills that will help them
                  thrive in the digital age. The kids are very grateful for and
                  make sure to utalize this opportunity.
                </>
              }
              img={images.computerClass1}
            />

            <Slideshow slides={slides} dots={dots} />
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComputerClass;
