import React from "react";
import { images } from "../../constants";
import { Navbar, Footer, Side, Section, MyLink } from "../../components";

const Kibera = () => {
  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div>
            <MyLink to="/donate#store">
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to Donate
                </p>
              </div>
            </MyLink>
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
