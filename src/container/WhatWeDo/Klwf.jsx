import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, Side, Slideshow, Section } from "../../components";
import { images } from "../../constants";

const Klwf = () => {
  const currentWwdId = "5";

  const slides = [images.klwf11, images.klwf8, images.klwf10, images.klwf7];
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
              header="Kibera Local Water Forum"
              instructor="Brandon"
              openingHours="Fri - Sat | 8 - 12 am"
              description={
                <>
                  Our Kibera Local Water Forum group is on a crucial mission. We
                  are dedicated to restoring and beautifying a long section of
                  the Nairobi River that flows through our community. In the
                  past, this river played a crucial role in enhancing our
                  community's well-being, serving as a source of clean water for
                  drinking, bathing, and washing clothes. It even used to be a
                  thriving fishing and swimming spot for the community.
                </>
              }
              img={images.klwf13}
            />

            <Section
              description={
                <>
                  However, as our community expanded, the increased population
                  density placed immense pressure on our limited resources.
                  Tragically, the river transformed from a lifeline into a
                  dumping ground, accumulating all sorts of waste, including
                  plastic and even human waste. The water has become so polluted
                  that it can no longer support any form of life, and its
                  appearance has drastically transformed, resembling sewage
                  water more than ever before.
                </>
              }
              img={images.klwf5}
            />

            <Section
              title="Stepping Up For Our Community"
              description={
                <>
                  To support our community, we made the decision to take care of
                  a section of the river. Over the past six months and
                  continuing, every Friday and Saturday morning, we have devoted
                  six hours a week to community service. We have been conducting
                  regular cleanup activities with the assistance of our library
                  children, their parents, friends of the library, neighbours,
                  and numerous other community volunteers.
                </>
              }
              img={images.klwf6}
            />

            <Section
              title="Our Goal"
              description={
                <>
                  Our primary goal has been to improve the water by addressing
                  the water quality of the river through the removal of
                  accumulated garbage, which had reached a point of forming
                  islands, a realization we had later on. We aim to restore the
                  clean and healthy river that Kibera used to depend on.
                </>
              }
              img={images.klwf9}
            />

            <Section
              title="Accomplishments So Far"
              description={
                <>
                  Our accomplishments so far remain dear to us, especially
                  having witnessed the condition of the river before. When we
                  began working on the river, the water wasn't flowing, and the
                  garbage had blocked the river to the extent that one could
                  walk right across it without realizing it was the river they
                  were crossing. Fabric materials, plastics, and all sorts of
                  trash had filled the river with years of accumulated garbage.
                </>
              }
              img={images.klwf3}
            />

            <Section
              description={
                <>
                  Today, the river is breathing again as we have successfully
                  restored a section to maintain a continuous flow of water.
                  This has motivated the locals to cease dumping into the river.
                  They now dispose of their waste at a designated area we've
                  established as a temporary dumping site. From there, we sort
                  and recycle the materials and then coordinate and put pressure
                  on government officials to come and collect non-recyclable
                  waste.
                </>
              }
              img={images.klwf12}
            />

            <Section
              title="Caring For Our Community"
              description={
                <>
                  We are a small organization doing great things. We believe in
                  bringing dignity to our community, and we are achieving this
                  by caring, loving, and respecting our community's children,
                  providing them a space for better childhoods to grow into. We
                  care for our environment, and that's why we remain very vocal
                  and passionate about changing the water quality of the river,
                  a river that continues to need our urgent intervention.
                </>
              }
              img={images.klwf2}
            />

            <Section
              title="A Call For Action And Support"
              description={
                <>
                  We are calling upon our friends to join and support us so that
                  we can continue to bring this positive change to our
                  community. Your support will greatly assist us in acquiring
                  more tools and materials to enable us to continue serving the
                  children, women, and youth of our community. We strongly
                  believe in UBUNTU - I Am because We are. Join us today and
                  become a part of this change.
                </>
              }
              img={images.klwf1}
            />

            <Slideshow slides={slides} dots={dots} />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Klwf;
