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

const Article7 = () => {
  const currentArticleId = "7";

  const slides = [images.seven5, images.seven1, images.seven2, images.seven6];
  const dots = Array(slides.length).fill(null);

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
              header="Nurturing The Academic Growth Of Children"
              day="19"
              month="March"
              year="2023"
              description={
                <>
                  We all have something that brings us joy and hope in our
                  lives. Justin Omondi, our library keeper, has been in the
                  frontline encouraging, supporting and sharing his mathematic
                  skills with our library children for the past three months.
                  Twenty grade eight pupils, who will be sitting for their
                  national primary school exams in November, have taken
                  advantage of his commitment to help them improve in their
                  grades.
                </>
              }
              img={images.seven8}
            />

            <Section
              title="Making Good Use Of The Library"
              description={
                <>
                  Together they have maintained a routine of doing academic
                  revisions both individually and as a team every single day
                  after school. The children have continuously showcased their
                  determination, commitment, focus and a great sense of desire
                  to improve and achieve better grades. They have been using the
                  library as an important accessible and available space to as
                  late as 10:00 pm in the evenings.
                </>
              }
              img={images.seven3}
            />

            <Section
              title="Parents Supporting Their Children"
              description={
                <>
                  Parents are appreciating their children's sacrifices and have
                  been supporting them to have enough time at the library. This
                  has been seen when parents have taken upon themselves to do
                  some of the house chores to allow the children the opportunity
                  to be at the library. The children can now fully focus and
                  work extra hard in their academics. We have truly been able to
                  provide the children with a safe learning space, revision and
                  study materials and a conducive environment for them to
                  achieve academic excellence.
                </>
              }
              img={images.seven4}
            />

            <Section
              title="Remarkable and Improved Results"
              description={
                <>
                  A week ago, the children sat for their mid-term exams at their
                  respective schools. We are happy to share some good news on
                  how they performed. We had six children who were able to score
                  more than 80% percent in their mathematics test, and the
                  highest was a young girl who scored over 90%. It is important
                  for us to mention their achievements and to take pride in
                  these results because we understand the difficulties and
                  challenges the children go through to achieve such grades. We
                  hope that in the coming weeks, we shall be able to bring in
                  teachers from different schools to come and tutor the children
                  in different subjects.
                </>
              }
              img={images.seven7}
            />

            <Slideshow slides={slides} dots={dots} />
          </div>
          <NextArticles currentArticleId={currentArticleId} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article7;
