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

const Article10 = () => {
  const currentArticleId = "10";

  const slides = [images.ten8];
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
              header="Building Bonds of Joy and Hope"
              day="27"
              month="July"
              year="2023"
              description={
                <>
                  Our best gifts come from our library children. The gifts of
                  joy and hope, as we shower them with lots of love and care.
                  They have taught us to be good listeners as they share their
                  life stories with us. We are grateful to them for the trust
                  they have placed in our devoted staff. We are walking a
                  beautiful journey with the children, reminding each other that
                  we are here for one another.
                </>
              }
              img={images.ten10}
            />

            <Section
              title="A Safe Space"
              description={
                <>
                  We have created an environment where the children are not only
                  encouraged to learn, laugh, play, and engage in debates, but
                  also forge friendships with one another. At The Watoto
                  Library, we provide a safe space for our children to express
                  themselves, enabling them to grow in harmony with their true
                  selves, discovering their potentials, and embarking on their
                  unique life journeys. It is within these library walls that
                  the children confide in us, sharing their struggles, opinions,
                  and, often, their dreams and aspirations.
                </>
              }
              img={images.ten7}
            />

            <Section
              title="The Story of a Resilient 15-Year-Old Boy"
              description={
                <>
                  Allow me to share with all of you the story of Stephen
                  Kalonzo, a 15-year-old boy whose life has been transformed,
                  all thanks to the support of our library through a generous
                  friend who has agreed to support his high school education. We
                  listened to his story and took the needed action by sharing it
                  out. He had given up hope of ever stepping into a classroom
                  again. We are happy to report that he has joined a boarding
                  high school facility that will be able to cater to his
                  academic and well-being needs.
                </>
              }
              img={images.ten1}
            />

            <Section
              description={
                <>
                  He will receive quality education, nutritious meals, and a bed
                  to sleep on. A place for him to foster new beginnings as he
                  strives to become a doctor in the days ahead. He is a child
                  with so much to offer, a child who only needed a listening
                  ear. Stephen comes from a very humble background, one that
                  possesses much less for survival. The mother got married to a
                  different family and couldn’t come with her children, leaving
                  Stephen with his alcoholic father who he rarely sees. Last
                  year, in 2022, Stephen sat for his primary school national
                  examination alongside his classmates who started high school
                  in January of this year, 2023. Sadly, due to challenging
                  circumstances within his family's home, he was unable to make
                  the transition to high school.
                </>
              }
              img={images.ten6}
            />

            <Section
              description={
                <>
                  We can't hide our joy to know that we have been able to get
                  him to school even though he has had to stay home for months,
                  and not just him alone, but also four others who, thanks to
                  different partners, we have been able to provide with small
                  bits to keep them in school. We are committed to ensuring that
                  their educational needs are met. These are children who have
                  shown and proven that they are willing but unable to provide
                  for themselves the opportunity to have an education.
                </>
              }
              img={images.ten4}
            />

            <Section
              title="Thank You"
              description={
                <>
                  With your continued support, we can create an even more
                  profound impact on the lives of children like Stephen.
                  Together, let's build a brighter future, empowering these
                  young minds to reach their full potential and achieve
                  greatness in their lives. Your kindness and generosity make
                  all the difference. Thank you for being a part of this
                  beautiful journey!
                </>
              }
              img={images.ten9}
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

export default Article10;
