import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="navbar-2" id="nav2" onClick={toggleMenu}>
        <span className="notranslate" style={{ userSelect: "none" }}>
          <a className="box-1-navbar-2">THE WATOTO LIBRARY</a>
        </span>
        <a href="javascript:void(0);" className="icon">
          {isMenuOpen ? (
            <i className="fa fa-remove white-color" id="deactivate-menu"></i>
          ) : (
            <i className="fa fa-bars white-color" id="activate-menu"></i>
          )}
        </a>
      </nav>

      <ul className={`navigation ${isMenuOpen ? "mobile-open" : ""}`} id="nav">
        <li className={isActive("/")}>
          <Link to="/">HOME</Link>
        </li>

        <li className={isActive("/whatwedo")}>
          <Link to="/whatwedo">WHAT WE DO</Link>
          <ul className="submenu">
            <li className="header-category">
              <Link to="/articles">
                <i className="fa-regular fa-newspaper"></i>
                <span>Newsletters</span>
              </Link>
            </li>
            <li className="header-category">
              <Link to="/whatwedo">
                <i className="fa-regular fa-newspaper"></i>
                <span>All programs</span>
              </Link>
            </li>
            <li>
              <Link to="/whatwedo/1">
                <i className="fa-solid fa-laptop"></i>
                <span>Computer Class</span>
              </Link>
            </li>
            <li>
              <Link to="/whatwedo/2">
                <i className="fa-solid fa-chess"></i>
                <span>Chess Club</span>
              </Link>
            </li>
            <li>
              <Link to="/whatwedo/3">
                <i className="fa-solid fa-graduation-cap"></i>
                <span>Study Group</span>
              </Link>
            </li>
            <li>
              <Link to="/whatwedo/4">
                <i className="fa-solid fa-child-reaching"></i>
                <span>Dance Group</span>
              </Link>
            </li>

            <li>
              <Link to="/whatwedo/5">
                <i className="fa-solid fa-person-digging"></i>
                <span>River Cleanup</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className={isActive("/about")}>
          <Link to="/about">ABOUT US</Link>
          <ul className="submenu">
            <li className="header-category">
              <Link to="/about">
                <i className="fa-solid fa-book"></i>
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/about/kibera">
                <i className="fa-solid fa-house"></i>
                <span>Where We Work</span>
              </Link>
            </li>
            <li>
              <Link to="/about/founder">
                <i className="fa-solid fa-book-open-reader"></i>
                <span>Our Founder</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className={isActive("/getintouch")}>
          <Link to="/getintouch">TEAM & CONTACT</Link>
          <ul className="submenu">
            <li>
              <Link to="/getintouch#board">
                <i className="fa-solid fa-users-line"></i>
                <span>Our Board</span>
              </Link>
            </li>
            <li>
              <Link to="/getintouch#team">
                <i className="fa-solid fa-people-group"></i>
                <span>Our Team</span>
              </Link>
            </li>
            {/* <li>
              <Link to="/getintouch#partners">
                <i className="fa-solid fa-handshake"></i>
                <span>Our Partners</span>
              </Link>
            </li> */}
            <li>
              <Link to="/getintouch#contact">
                <i className="fa-regular fa-address-book"></i>
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className={isActive("/donate")}>
          <Link to="/donate">DONATE</Link>
          {/* <ul className="submenu">
            <li>
              <Link to="/donate#vipps">
                <i className="fa-solid fa-hand-holding-medical"></i>
                <span>Make a donation</span>
              </Link>
            </li>
            <li>
              <Link to="/donate#store">
                <i className="fa-solid fa-shop"></i>
                <span>Our store</span>
              </Link>
            </li>
          </ul> */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
