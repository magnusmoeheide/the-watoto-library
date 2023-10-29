import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { Navbar, Footer, Side } from "../../components";

const Partners = () => {
  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div>
            <Link to="/getintouch#partners">
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to Team &
                  Contact
                </p>
              </div>
            </Link>
          </div>
          <div className="article">
            <h2>Partners</h2>
            <p>
              We are able to accomplish many our our goals through our partners
              and thank them for their engagements.
            </p>
            <br />

            <div class="flex-image-text">
              <div>
                <h3>Skullerud skole</h3>
                <p>
                  Skullerud skole has continously supported us with digital
                  tools and we are exited to have them as partners for our new
                  school, The Watoto Academy.
                </p>
              </div>
              <img src={images.skullerudSkole} className="img" />
            </div>
            <br />

            <div class="flex-image-text">
              <div>
                <h3>Opsahlgruppen</h3>
                <p>
                  Opsahlgruppen has sponsored toilet facilities for our new
                  school and we are very thankful to have them as partners.
                </p>
              </div>
              <img src={images.opsahlGruppen} className="img" />
            </div>
            <br />

            <div class="flex-image-text">
              <div>
                <h3>WWQA</h3>
                <p>
                  We are proud to be partners with the UN Environment Program,
                  World Water Quality Alliance and work together to change the
                  Kibera river.
                </p>
              </div>
              <img src={images.wwqa} className="img" />
            </div>
            <br />

            <div class="flex-image-text">
              <div>
                <h3>Youcanyole</h3>
                <p>
                  Our library is part of their anual free medical camp in
                  Kibera.
                </p>
              </div>
              <img src={images.youcanyole} className="img" />
            </div>
            <br />
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partners;
