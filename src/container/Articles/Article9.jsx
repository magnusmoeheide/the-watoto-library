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

const Article9 = () => {
  const currentArticleId = "9";

  const slides = [images.nine8];
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
              header="Serving The Community"
              day="29"
              month="June"
              year="2023"
              description={
                <>
                  This month of June has provided an opportunity for our
                  children, along with their parents and our staff, to join
                  forces. We have embarked on a mission to make a difference for
                  our community. We have joined hands with the Kibera Local
                  Water Forum, which is also headed by our own director Brandon
                  Okoth.
                </>
              }
              img={images.nine4}
            />

            <Section
              title="A River in Need of Rescue"
              description={
                <>
                  It is important for the children, together with their parents,
                  to be included in this movement of rescuing a dying river that
                  has been turned into a dumping site. The Nairobi River, once a
                  vibrant river abundant with fish, now faces a sad reality. The
                  river is heavily polluted, burdened with all kinds of garbage,
                  ranging from plastic waste to human waste. The river finds
                  itself in a critical situation, demanding immediate attention
                  and action.
                  <br />
                  <br />
                  Earlier this year, we made plans to do{" "}
                  <u>
                    <a
                      href="http://thewatotolibrary.org/articles/4.html"
                      target="_blank"
                    >
                      cleanups around Kibera
                    </a>
                  </u>{" "}
                  to improve the water quality of the community. We are thrilled
                  to see these plans being implemented, and we are proud to
                  share that our children and staff are actively volunteering
                  and devoting their time to community service activities.
                </>
              }
              img={images.nine6}
            />

            <Section
              title="Our Participation in The River Cleanup"
              description={
                <>
                  An active participation in the river clean-up has been
                  witnessed by our children and staff members. The children's
                  involvement is crucial in achieving sustainable change. Over
                  the past three Saturdays, they have actively taken part in the
                  river clean-up, assisting in collecting and sorting garbage in
                  and around the river area.
                  <br />
                  <br />
                  Their participation is highly valued as we recognize their
                  potential to make a significant impact on their environment
                  and the Kibera community. We aim to provide the children with
                  opportunities to observe, learn, and actively participate,
                  nurturing them to become the future leaders who genuinely
                  understand the necessary actions for a better tomorrow.
                </>
              }
              img={images.nine5}
            />

            <Section
              title="Connecting Communities and Sharing Solutions"
              description={
                <>
                  The struggles of our community are similar to those of the
                  Korogocho community. Twenty of our children had the privilege
                  to visit and interact with the team from KombGreens Solutions
                  in Korogocho Slums. Their remarkable efforts have transformed
                  a once-dumping site into a beautiful park, where the residents
                  of Korogocho can now relax, hold meetings, or even read a book
                  under the shade of the trees they have planted.
                </>
              }
              img={images.nine3}
            />

            <Section
              description={
                <>
                  The children were deeply impressed and expressed their
                  aspirations to have similar green spaces in Kibera, where they
                  can enjoy and connect with nature. The children had a
                  wonderful opportunity to explore and learn about vegetable
                  farming, witnessing firsthand the remarkable transformation
                  that has taken place in Korogocho.
                </>
              }
              img={images.nine2}
            />

            <Section
              title="Introducing Chess To The Korogocho Slums"
              description={
                <>
                  Our library children shared their knowledge and played chess
                  with the children at KombGreens Solutions, bringing immense
                  joy to our hearts. Witnessing our children introduce, teach,
                  and play chess with the children in Korogocho, who were
                  encountering the game for the first time, was a heartwarming
                  and remarkable experience.
                </>
              }
              img={images.nine1}
            />

            <Section
              description={
                <>
                  We aspire for our library children to become ambassadors of
                  change, leading by example. We all have a role to play in
                  supporting and encouraging them to maintain their passion and
                  dedication towards their community. Let us engage and support
                  the children by placing our trust in them and providing
                  opportunities for them to showcase their abilities.
                </>
              }
              img={images.nine7}
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

export default Article9;
