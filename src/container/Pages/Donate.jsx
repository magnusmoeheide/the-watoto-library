import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Footer, Side, Section } from "../../components";
import { images } from "../../constants";
import Locationscroll from "../../components/Locationscroll/Locationscroll";

const Donate = () => {
  return (
    <div>
      <Locationscroll />
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div className="article">
            <div className="flex-image-text">
              <div>
                <h2>Donate</h2>
                <p>
                  We greatly appreciate any donations coming in that will help
                  better the lives of children in Kibera.
                </p>
                <p>Asante sana - Thank you very much.</p>
                <p>
                  100% of your donation goes directly to its purpose. Our only
                  expenses are transaction fees.
                </p>
              </div>
              <img src={images.kidLooking} className="img" />
            </div>
          </div>

          <br />

          {/* <div className="article" id="contact">
            <Section
              title="Our Store"
              description="Support us through our store."
              readMore="Read more"
              customReadMoreLink="/donate/store"
            />
          </div>

          <br /> */}

          <div className="article" id="payment">
            <div className="flex-image-text">
              <div style={{ alignItems: "left", width: "100%" }}>
                <h3>Vipps</h3>
                <a
                  className="button-design paypal"
                  id="vippsPc"
                  href={images.scanVipps}
                  target="_blank"
                >
                  Donate through Vipps
                </a>
                <a
                  className="button-design paypal"
                  id="vippsMobile"
                  href="https://qr.vipps.no/28/2/05/031/9z2ImrLtM"
                  target="_blank"
                >
                  Donate through Vipps
                </a>
                <p>
                  Vippsnr: 821346 (The Watoto Youth Community And Library
                  Norway)
                  <br />
                  This solution is only available in Norway.
                </p>
              </div>
              <img
                src={images.vippsLogo}
                className="img-nozoom paypal"
                style={{ width: "15em", marginTop: "-0.3em" }}
              />
            </div>
          </div>

          <br />

          <div className="article">
            <div className="flex-image-text">
              <div style={{ alignItems: "left", width: "100%" }}>
                <h3>Donorbox</h3>
                <a
                  className="button-design paypal"
                  id="donorbox"
                  href="https://donorbox.org/embed/donate-to-the-watoto-library"
                  target="_blank"
                >
                  Donate through Donorbox
                </a>
                <p>
                  For one-time or monthly donations with VISA or Mastercard.
                </p>
              </div>
              <img
                src={images.donorBoxLogo}
                className="img-nozoom paypal"
                style={{ width: "15em" }}
              />
            </div>
          </div>

          <br />

          <div className="article">
            <div className="flex-image-text">
              <div style={{ alignItems: "left", width: "100%" }}>
                <h3>PayPal</h3>
                <a
                  className="button-design paypal"
                  href="https://www.paypal.com/donate/?hosted_button_id=F9WFK8JFMH49E"
                  target="_blank"
                >
                  Donate through PayPal
                </a>
                <p>
                  We accept both one-time donations and monthly donations
                  through PayPal.
                </p>
              </div>
              <img
                src={images.paypalLogo}
                className="img-nozoom paypal"
                style={{ width: "15em", marginBottom: "0.8em" }}
              />
            </div>
          </div>

          <br />

          <div className="article">
            <h3>Bank Transfer</h3>
            <p>
              Name: The Watoto Youth Community And Library Norway
              <br />
              Account number: 1506 93 25022
            </p>
            <p>
              Electronic/paper IBAN: NO55 1506 9325 022
              <br />
              Address: DNB Bank ASA, Postboks 1600 Sentrum, 0021 Oslo
              <br />
              BIC: DNBANOKKXXX | Swift: DNBANOKK
            </p>
          </div>

          <br />

          <div className="article" id="legal">
            <h3>Legal</h3>
            <p>
              The Watoto Library is registered under{" "}
              <u>
                <a
                  href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=931464817"
                  target="_blank"
                >
                  The Watoto Youth Community And Library Norway
                </a>
              </u>
              , org. nr. 931 464 817.
            </p>
            <p>
              For Norwegian sales terms,{" "}
              <u>
                <a href="./articles/termsOfSale.html">click here</a>
              </u>
              .
            </p>
            <p>
              To end monthly, recurring payments, kindly get in touch with us at{" "}
              <u>
                <a href="mailto:magnus@thewatotolibrary.org">
                  magnus@thewatotolibrary.org
                </a>
              </u>
              .
              <br />
              All recurring payments are of course not binding and can be
              terminated at your discretion.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
