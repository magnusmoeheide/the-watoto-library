import React from "react";
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
  },
  {
    id: 2,
    role: "Board",
    name: "Magnus Heide",
    description_1: "Cofounder",
    description_2: "Director of Finance and IT",
    img: images.magnus,
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

const renderMember = (member) => (
  <div className="column" id={member.name.toLowerCase().replace(/\s/g, "")}>
    <div className="card">
      <img src={member.img} alt={member.name} style={{ width: "100%" }} />
      <div className="container">
        <h2>{member.name}</h2>
        <p className="title">
          {member.description_1}
          <br />
          {member.description_2 && `${member.description_2}`}
        </p>
      </div>
    </div>
  </div>
);

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

          <br />

          <div className="article" id="contact">
            <h2>Contact Us</h2>
            <p>Kindly get in touch with us per email.</p>
            <p className="email">
              For operational enquiries:{" "}
              <u>
                <a href="mailto:brandon@thewatotolibrary.org">
                  brandon@thewatotolibrary.org
                </a>
              </u>
            </p>
            <p className="email">
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
