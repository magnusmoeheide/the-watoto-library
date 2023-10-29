import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, Side, Slideshow, Section } from "../../components";
import { images } from "../../constants";

const DanceGroup = () => {
  const currentWwdId = "4";

  const slides = [
    images.studyGroup1,
    images.studyGroup2,
    images.studyGroup5,
    images.studyGroup9,
    images.studyGroup8,
  ];
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
              header="Dance Group"
              instructor="Bernard"
              places="25"
              openingHours="Sat - Sun | 2pm - 6pm"
              description={
                <>
                  Every Saturday our dance teacher Bernard Chacha organizes a
                  dancing class for the kids. He is a passionate street dancer
                  who has grown to love and appreciate the movements of dancing.
                  Himself has benefited from dancing mentally, physically and
                  emotionally. He believes that dance is a form of discipline
                  and one way to keep the youths of Kibera out of the street.
                </>
              }
              img={images.danceGroup1}
            />

            <Section
              title="Every Saturday"
              description={
                <>
                  On Saturday afternoon, the kids use the library to do their
                  dance training. Young kids from 2:00 - 3:30pm and older kids
                  from 4:00 - 6:00pm, after which the library is turned back to
                  the usual to allow Chess players to have time to play chess
                  from 6:00 - 7:30pm. On Saturday mornings and Sundays, the kids
                  are usually engaged with their studies, finishing assignments
                  and doing revisions.
                </>
              }
              img={images.danceGroup4}
            />

            <Section
              title="Why Learn Dancing?"
              description={
                <>
                  Dance doesn't just offer a chance for children to to meet new
                  friends and stay active. It is a brilliant way for them to
                  learn preseverance and self-motivation. It encourages them to
                  experiment and find their own ways to solve challenges. It
                  also teaches them to be comfortable with trying and failing,
                  and learning from that.
                </>
              }
              img={images.danceGroup2}
            />

            <Section
              title="A Sense of Accomplisment"
              description={
                <>
                  The sense of success and accomplisment they experience after
                  mastering a move will give them the courage to also try and
                  fail in other aspects of life. These benefits are especially
                  rewarding to a child who is shy, has low self-esteem, or has
                  shown no interest in performing.
                </>
              }
              img={images.danceGroup5}
            />

            <Section
              title="Growth"
              description={
                <>
                  <p>
                    This can help them start to believe in themselves more. Over
                    time their confidence will grow, and some might find out
                    they enjoy performing in front of other people.
                  </p>
                  <p>
                    Being active and dancing also stimulates the mind and helps
                    with memory. Learning body movement and gestures help
                    children absorb ideas better and enhances their creativity.
                    We therefore encourage all the kids to actively participate,
                    no matter their age or current level.
                  </p>
                </>
              }
              img={images.danceGroup3}
            />
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DanceGroup;
