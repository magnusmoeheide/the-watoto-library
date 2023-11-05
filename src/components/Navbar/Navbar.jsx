import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { whatwedo } from "../../container/WhatWeDo/WhatWeDo";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = window.innerWidth <= 670;

  const isActive = (item) => {
    if (location.pathname === item.path) {
      return "active";
    }

    if (item.submenu) {
      // Check if any of the submenu items' path is part of the current path
      const match = item.submenu.some((subItem) => {
        return location.pathname.includes(subItem.path);
      });

      if (match) {
        return "active";
      }
    }

    return "";
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navItems = [
    { name: "HOME", path: "/" },
    {
      name: "WHAT WE DO",
      path: "/whatwedo",
      submenu: [
        {
          name: "Newsletters",
          path: "/articles",
          className: "header-category",
          icon: <i class="fa-solid fa-newspaper"></i>,
        },
        {
          name: "What We Do",
          path: "/whatwedo",
          className: "header-category",
          icon: <i class="fa-solid fa-people-roof"></i>,
        },
        ...whatwedo
          .filter((wwd) => wwd.status === "Published")
          .map((program) => {
            let programName = program.title;
            // if (program.id === 5) {
            //   programName = "River Cleanup";
            // }
            return {
              name: programName,
              path: `/whatwedo/${program.url}`,
              icon: program.icon,
            };
          }),
      ],
    },
    {
      name: "ABOUT US",
      path: "/about",
      submenu: [
        {
          name: "About Us",
          icon: <i className="fa-solid fa-book"></i>,
          className: "header-category",
          path: "/about",
        },
        {
          name: "Where We Work",
          icon: <i className="fa-solid fa-house"></i>,
          path: "/about#kibera",
        },
        {
          name: "Our Founder",
          icon: <i className="fa-solid fa-book-open-reader"></i>,
          path: "/about#founder",
        },
      ],
    },
    {
      name: "TEAM & CONTACT",
      path: "/getintouch",
      submenu: [
        {
          name: "Our Board",
          icon: <i className="fa-solid fa-users-line"></i>,
          path: "/getintouch#board",
        },
        {
          name: "Our Team",
          icon: <i className="fa-solid fa-people-group"></i>,
          path: "/getintouch#team",
        },
        {
          name: "Contact Us",
          icon: <i className="fa-regular fa-address-book"></i>,
          path: "/getintouch#contact",
        },
      ],
    },
    {
      name: "DONATE",
      path: "/donate",
    },
  ];

  return (
    <div>
      <nav className="navbar-2" id="nav2" onClick={toggleMenu}>
        <span className="notranslate" style={{ userSelect: "none" }}>
          <span className="box-1-navbar-2">THE WATOTO LIBRARY</span>
        </span>
        <span className="icon">
          {isMenuOpen ? (
            <i className="fa fa-remove white-color" id="deactivate-menu"></i>
          ) : (
            <i className="fa fa-bars white-color" id="activate-menu"></i>
          )}
        </span>
      </nav>

      <ul className={`navigation ${isMenuOpen ? "mobile-open" : ""}`} id="nav">
        {navItems.map((item) => (
          <li key={item.name} className={`${isActive(item)} main-nav-item`}>
            <Link
              to={item.path}
              className="main-link"
              // onClick={(e) => isMobile && item.submenu && e.preventDefault()}
            >
              {item.name}
            </Link>
            {!isMobile && item.submenu && (
              <ul className="submenu">
                {item.submenu.map((subItem) => (
                  <li
                    key={subItem.name}
                    className={`${
                      subItem.className ? subItem.className : "submenu-item"
                    }`}
                  >
                    <Link to={subItem.path} className="submenu-link">
                      {subItem.icon}
                      <span>{subItem.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
