import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { Navbar, Footer, Side, Section } from "../../components";

const Kibera = () => {
  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div>
            <Link to="/donate#store">
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to Donate
                </p>
              </div>
            </Link>
          </div>
          <div className="article">
            <Section
              header="Store"
              description={<>Store</>}
              img={images.kibera1}
            />
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kibera;
