import React from "react";
import MyLink from "../MyLink/MyLink";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="container-row">
          <div className="footer-col">
            <MyLink to="/">
              <h4>
                <a style={{ color: "white" }}>
                  <span className="notranslate">The Watoto Library</span>
                </a>
              </h4>
            </MyLink>

            <ul>
              <MyLink to="/">
                <li>
                  <a>Home</a>
                </li>
              </MyLink>
              <MyLink to="/articles">
                <li>
                  <a>Newsletters</a>
                </li>
              </MyLink>
              <MyLink to="/programs">
                <li>
                  <a>Our programs</a>
                </li>
              </MyLink>
            </ul>
          </div>
          <div className="footer-col">
            <MyLink to="/about">
              <h4>
                <a style={{ color: "white" }}>About</a>
              </h4>
            </MyLink>

            <ul>
              <MyLink to="/about">
                <li>
                  <a>About Us</a>
                </li>
              </MyLink>

              <MyLink to="/getintouch#team">
                <li>
                  <a>Our Team</a>
                </li>
              </MyLink>
              <MyLink to="/about/founder">
                <li>
                  <a>Our Founder</a>
                </li>
              </MyLink>
            </ul>
          </div>
          <div className="footer-col">
            <MyLink to="/donate">
              <h4>
                <a style={{ color: "white" }}>Engage</a>
              </h4>
            </MyLink>
            <ul>
              <MyLink to="/donate">
                <li>
                  <a>Donate</a>
                </li>
              </MyLink>

              <MyLink to="/getintouch#contact">
                <li>
                  <a>Contact Us</a>
                </li>
              </MyLink>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/thewatotolibraryprojectkenya"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/thewatotolibrary/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCBiw_orAp_qbgRQc-_zUZ7w"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <ul>
              <li>
                <p>@thewatotolibrary</p>
                {/* <MyLink to="login">
                  <p className="developed">Admin login</p>
                </MyLink> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="footer-item left">© 2023 The Watoto Library</div>
        <div className="footer-item center">
          <span className="item-block">KBR/CBO/5/4/2023(439) (Kenya)</span>
          <span class="separator">|</span>
          <span className="item-block">Org. nr. 931 464 817 (Norway)</span>
        </div>
        <div className="footer-item right">
          Developed and designed by Magnus Heide
        </div>
      </div>
    </div>
  );
};

export default Footer;
