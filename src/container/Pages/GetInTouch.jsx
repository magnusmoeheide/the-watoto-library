import React, { useState } from "react";
import { Navbar, Footer, Side, Section } from "../../components";
import { images } from "../../constants";
import Locationscroll from "../../components/Locationscroll/Locationscroll";

const team = [
  {
    id: 1,
    role: "Board",
    name: "Brandon Francis Okoth",
    description_1: "Founder",
    description_2: "Executive Director",
    img: images.brandon,
    message: (
      <>
        Thank you for taking the time to learn about us and the work we do. Your
        support is crucial to ensure brighter futures for vulnerable children.
      </>
    ),
  },
  {
    id: 2,
    role: "Board",
    name: "Magnus Heide",
    description_1: "Co-Founder",
    description_2: "Director of Finance and IT",
    img: images.magnus,
    message: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
        quisquam, dolor explicabo eaque sapiente. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Reiciendis quos explicabo ipsum magnam
        saepe a iste sequi officiis nobis doloribus delectus in ratione quidem
        qui accusamus amet minima, fuga fugiat?
      </>
    ),
  },
  {
    id: 3,
    role: "Team",
    name: "Justin Omondi",
    description_1: "Educator",
    img: images.justin,
  },
  {
    id: 4,
    role: "Team",
    name: "Bernard Chacha",
    description_1: "Dance Instuctor",
    img: images.bernard,
  },
  {
    id: 5,
    role: "Team",
    name: "Alice Ngina",
    description_1: "Library Keeper",
    img: images.alice,
  },
  {
    id: 6,
    role: "Team",
    name: "Evans Mwangi",
    description_1: "Computer Educator",
    img: images.evans,
  },
];

export const boardMembers = team.filter((member) => member.role === "Board");
export const teamMembers = team.filter((member) => member.role === "Team");

const GetInTouch = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  const openPopup = (member) => {
    setCurrentMember(member);
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentMember(null);
  };

  const renderMember = (member) => {
    const firstName = member.name.split(" ")[0].toLowerCase();

    return (
      <div className="column" id={firstName}>
        <div className="card">
          <img src={member.img} alt={member.name} style={{ width: "100%" }} />
          <div className="container">
            <h2>{member.name}</h2>
            <p className="title">
              {member.description_1}
              <br />
              {member.description_2 && `${member.description_2}`}
            </p>
            {/* <p onClick={() => openPopup(member)}>
              <a className="button-design form">Read message</a>
            </p> */}
          </div>
        </div>
      </div>
    );
  };

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
              <div className="row2">
                {boardMembers.map((member) => renderMember(member))}
              </div>
            </div>
          </div>

          <br />

          <div className="article" id="team">
            <h2>Team</h2>
            <div className="flex-container">
              <div className="row2">
                {teamMembers.map((member) => renderMember(member))}
              </div>
            </div>
          </div>

          {isPopupOpen && currentMember && (
            <div
              className={`popup-container ${isPopupOpen ? "open-popup" : ""}`}
              id="popup"
            >
              <img src={images.logo} className="popup-img" />
              <h3>Message from {currentMember.name}</h3>
              <p>"{currentMember.message}"</p>
              <br />
              <br />
              <p>
                <a className="button-design form" onClick={closePopup}>
                  Close
                </a>
              </p>
            </div>
          )}

          <br />

          <div className="article" id="contact">
            <h2>Contact Us</h2>
            <p>Kindly get in touch with us per email.</p>
            <br />
            <p className="email">
              For operational enquiries:{" "}
              <u>
                <a
                  className="button"
                  href="mailto:brandon@thewatotolibrary.org"
                >
                  brandon@thewatotolibrary.org
                </a>
              </u>
            </p>
            <p className="email">
              For donation enquiries:{" "}
              <u>
                <a
                  className="button"
                  href="mailto:brandon@thewatotolibrary.org"
                >
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
