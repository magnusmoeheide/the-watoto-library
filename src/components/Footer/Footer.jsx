import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="container-row">
          <div className="footer-col">
            <Link to="/">
              <h4>
                <a style={{ color: "white" }}>
                  <span className="notranslate">The Watoto Library</span>
                </a>
              </h4>
            </Link>

            <ul>
              <Link to="/">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/articles">
                <li>
                  <a>Newsletters</a>
                </li>
              </Link>
              <Link to="/whatwedo">
                <li>
                  <a>What We Do</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="footer-col">
            <Link to="/about">
              <h4>
                <a style={{ color: "white" }}>About</a>
              </h4>
            </Link>

            <ul>
              <Link to="/about">
                <li>
                  <a>About Us</a>
                </li>
              </Link>

              <Link to="/getintouch#team">
                <li>
                  <a>Our Team</a>
                </li>
              </Link>
              <Link to="/about/founder">
                <li>
                  <a>Our Founder</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="footer-col">
            <Link to="/donate">
              <h4>
                <a style={{ color: "white" }}>Engage</a>
              </h4>
            </Link>
            <ul>
              <Link to="/getintouch#contact">
                <li>
                  <a>Contact Us</a>
                </li>
              </Link>
              {/* <Link to="/getintouch#partners">
                <li>
                  <a>Partners</a>
                </li>
              </Link> */}
              <Link to="/donate">
                <li>
                  <a>Donate</a>
                </li>
              </Link>
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
                <p>
                  © 2023
                  <span className="notranslate"> The Watoto Library</span>
                  <br />
                  <span className="orgnr">Org. nr. 931 464 817 (Norway)</span>
                </p>

                <p className="developed">
                  Developed and designed by Magnus Heide
                </p>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
