import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Footer, Side, Section } from "../../components";
import { images } from "../../constants";
import Locationscroll from "../../components/Locationscroll/Locationscroll";

const GetInTouch = () => {
  return (
    <div>
      <Locationscroll />
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div className="article" id="board">
            <h2>Board</h2>
            <div className="flex-container">
              <div classNames="row2">
                <div className="column" id="brandon">
                  <div
                    className="card"
                    onclick="changeToBrandon(), openPopup()"
                  >
                    <img
                      src={images.brandon}
                      alt="Brandon"
                      style={{ width: "100%" }}
                    />
                    <div className="container">
                      <h2>Brandon Francis Okoth</h2>
                      <p className="title">
                        Founder
                        <br />
                        Executive Director
                      </p>
                      {/* <p>
                        <a className="button-design form">Contact</a>
                      </p> */}
                    </div>
                  </div>
                </div>

                <div className="column" id="magnus">
                  <div className="card" onclick="changeToMagnus(), openPopup()">
                    <img
                      src={images.magnus}
                      alt="Magnus"
                      style={{ width: "100%" }}
                    />
                    <div className="container">
                      <h2>Magnus Heide</h2>
                      <p className="title">
                        Cofounder
                        <br />
                        Director of IT and Finance
                      </p>
                      {/* <p>
                        <a className="button-design form">Contact</a>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <div className="article" id="team">
            <h2>Team</h2>
            <div class="flex-container">
              <div class="row2">
                <div class="column" id="justin">
                  <div
                    class="card"
                    style={{ marginTop: "10px", cursor: "auto" }}
                  >
                    <img
                      src={images.justin}
                      alt="Justin"
                      style={{ width: "100%" }}
                    />
                    <div class="container">
                      <h2>Justin Omondi</h2>
                      <p class="title">Educator</p>
                    </div>
                  </div>
                </div>

                <div class="column" id="bernard">
                  <div
                    class="card"
                    style={{ marginTop: "10px", cursor: "auto" }}
                  >
                    <img
                      src={images.bernard}
                      alt="Bernard"
                      style={{ width: "100%" }}
                    />
                    <div class="container">
                      <h2>Bernard Chacha</h2>
                      <p class="title">Dance Instructor</p>
                    </div>
                  </div>
                </div>

                <div class="column" id="alice">
                  <div
                    class="card"
                    style={{ marginTop: "10px", cursor: "auto" }}
                  >
                    <img
                      src={images.alice}
                      alt="Alice"
                      style={{ width: "100%" }}
                    />
                    <div class="container">
                      <h2>Alice Ngina</h2>
                      <p class="title">Library Keeper</p>
                    </div>
                  </div>
                </div>

                <div class="column" id="evans">
                  <div
                    class="card"
                    style={{ marginTop: "10px", cursor: "auto" }}
                  >
                    <img
                      src={images.evans}
                      alt="Evans"
                      style={{ width: "100%" }}
                    />
                    <div class="container">
                      <h2>Evans Mwangi</h2>
                      <p class="title">Computer Educator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          {/* <div className="article" id="contact">
            <Section
              header="Our Partners"
              description="We are able to accomplish many our our goals through our partners
              and thank them for their engagements."
              readMore="Read more"
              customReadMoreLink="/getintouch/partners"
            />
          </div>

          <br /> */}

          <div className="article" id="contact">
            <h2>Contact Us</h2>
            <p>Kindly get in touch with us per email.</p>
            <p>
              For operational enquiries:{" "}
              <u>
                <a href="mailto:brandon@thewatotolibrary.org">
                  brandon@thewatotolibrary.org
                </a>
              </u>
              <br />
              For donation enquiries:{" "}
              <u>
                <a href="mailto:brandon@thewatotolibrary.org">
                  magnus@thewatotolibrary.org
                </a>
              </u>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetInTouch;
