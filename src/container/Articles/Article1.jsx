import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import {
  Navbar,
  Footer,
  Side,
  Slideshow,
  Section,
  NextArticles,
} from "../../components";

const Article1 = () => {
  const currentArticleId = "1";

  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div>
            <Link to={`/articles#${currentArticleId}`}>
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to Newsletters
                </p>
              </div>
            </Link>
          </div>
          <div className="article" id={currentArticleId}>
            <Section
              header="How The Watoto Library Started"
              day="1"
              month="July"
              year="2022"
              author="Brandon Francis, Founder"
              description="- As I was walking around my neighbourhood in Kibera, 
              I came to a stand stop when I spotted one school moving their books 
              out of their library. They had been renting 
              the space as their own for several years."
              img={images.one6}
            />

            <Section
              title="No Public Libraries"
              description=" I had always wished that they would allow anyone from the
              community to use the space, but since it was a private school
              library, it only belonged to the students of that school. You
              rarely spot a library in Kibera, and when you do so, most the
              time it is owned or ran by a private individual or
              organization, and only those associated with them are allowed
              to access."
              img={images.one4}
            />

            <Section
              title="What I saw vs what I imagined"
              description="The space itself was not that well maintained. The electric
              wires were hanging on the ceiling and it was clear that it was
              damaged by the movers as they were un-attaching the
              bookshelves. The floor was rough and the walls had remains of
              glued papers that looked like picture charts. The room was
              dark filled with dust and dirt."
              img={images.one7}
            />

            <Section
              title="Planning and Finding Solutions"
              description="All this time as I was taking note of the space, in my
              imagination I was seeing it in a completely different way. I
              saw the place renovated, kids from different backgrounds and
              homes within Kibera using the space filled with joy. I imaged
              the place colourful and welcoming. Kids coming in to read
              books, to do their school assignments, and to get free
              academic assistance and materials."
              img={images.one3}
            />

            <Section
              title="Turning a Vision into an Action"
              description="I had visioned the place to accommodate young minds that
              needed to be actively involved in things that would later help
              them become better version of themselves. I have lived in
              Kibera my entire childhood. I believe I know and understand
              some of the challenges the kids face."
              img={images.one1}
            />

            <Section
              description=" I decided to look for the owner of the place to negotiate for
              it. After we came to an understanding, I started the process
              of transforming the empty space into becoming what it is
              today. I borrowed some of my grandma's old furniture, painted
              and brought them into the space. Without noticing kids started
              coming in one by one. I had seen an opportunity for them, one
              that I was not going to let go, and out of commitment and
              determination, The Watoto Library is serving its purpose in
              our community."
              img={images.one5}
            />
          </div>
          <NextArticles currentArticleId={currentArticleId} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article1;
