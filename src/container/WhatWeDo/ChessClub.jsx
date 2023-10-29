import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, Side, Slideshow, Section } from "../../components";
import { images } from "../../constants";

const ChessClub = () => {
  const currentWwdId = "2";

  const slides = [images.chessClub4, images.chessClub5];
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
              header="Chess Club"
              instructor="Brandon"
              places="25"
              openingHours="Weekends"
              description={
                <>
                  <p>
                    As part of The Watoto Library's many engagements, we have
                    decided to invest in the game of chess. Chess is a brilliant
                    game that challenges the mind, strategy, and gives rise to
                    the children's confidence.
                  </p>
                  <p>
                    We started with a single chess board, and in July we
                    acquired two more, making the total count to be three chess
                    boards that get shared among the kids coming to the library.
                  </p>
                </>
              }
              img={images.chessClub2}
            />

            <Section
              title="The story of The Watoto Library and Chess"
              description={
                <>
                  It all begins with Messi and Chris. Two young and smart boys
                  came in, saw a chess board, and wanted to play. They had
                  interacted with the game in one of their school programs
                  before, brought to them by an independent organisation.
                  Unfortunately, when the organisation stopped coming, the boys
                  gave up the hope of ever finding a place that would
                  accommodate and give them space to learn, train and play the
                  game.
                </>
              }
              img={images.chessClub3}
            />

            <Section
              title="A Special Place"
              description={
                <>
                  This space is special for them and many others like them who
                  have continued showing up each day to learn, train and
                  challenge one another. Young kids who are determined and
                  committed to teach other young kids how to play the game of
                  chess. What makes this act to inspire us, is the fact that
                  these kids are sharing what they have as they learn
                  themselves.
                </>
              }
              img={images.chessClub1}
            />

            <Section
              title="The Future"
              description={
                <>
                  Chess is not a popular board game in Kibera. Matter of fact,
                  you find that the majority of the kids are not aware of its
                  existence, leave alone its name. However, with the kids being
                  introduced to such a brilliant game at a young age, the sky's
                  the limit.
                </>
              }
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

export default ChessClub;
