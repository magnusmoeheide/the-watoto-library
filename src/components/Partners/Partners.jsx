import React from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";

const partners = [
  {
    name: "Skullerud skole",
    img: images.skullerudSkole,
    text: "Hello",
    website: "https://skullerud.osloskolen.no",
  },
  {
    name: "Opsahlgruppen",
    img: images.opsahlGruppen,
    text: "Hello",
    website: "https://opsahlgruppen.no",
  },
  {
    name: "WWQA",
    img: images.wwqa,
    text: "Hello",
    website:
      "https://www.unep.org/explore-topics/water/what-we-do/improving-and-assessing-world-water-quality-partnership-effort",
  },
  {
    name: "Youcanyole",
    img: images.youcanyole,
    text: "Hello",
    website: "https://youcanyole.org/es/",
  },
  {
    name: "SOS Odontología Social",
    img: images.sos,
    text: "Hello",
    website:
      "https://sos-odontologiasocial.blogspot.com/?fbclid=IwAR0id-cFGRhDoo-hNHeLPSE-AX8R4ntASKcsGp2Eu5IWszGQakR1YLSjEWQ",
  },
];

const Partners = () => {
  return (
    <div className="partners-section">
      <h2>Our Partners</h2>
      <div className="partners-list">
        {partners.map((partner, index) => (
          <div key={index} className="partner-item">
            <a href={partner.website} target="_blank">
              <img src={partner.img} alt={partner.name} />
            </a>
            {/* <h3>{partner.name}</h3>
            <p>{partner.text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
