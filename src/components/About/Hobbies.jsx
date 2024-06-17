import React from "react";
import Card from "react-bootstrap/Card";
import { t } from "i18next";
import { ImPointRight } from "react-icons/im";
import {
  FaPlane,
  FaCamera,
  FaCar,
  FaBaseballBall,
  FaFutbol,
  FaHeadphones,
} from "react-icons/fa";

function Hobbies() {
  const hobbies = [
    { icon: <FaCamera />, text: t("text_hobbie_1") },
    { icon: <FaCar />, text: t("text_hobbie_2") },
    { icon: <FaBaseballBall />, text: t("text_hobbie_3") },
    { icon: <FaFutbol />, text: t("text_hobbie_4") },
    { icon: <FaPlane />, text: t("text_hobbie_5") },
    { icon: <FaHeadphones />, text: t("text_hobbie_6") },
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-activity text-uppercase">
            <ImPointRight className="text-white"/>{" "}
            <strong className="purple">{t("hobbies_title_1")}</strong>
          </p>
          <ul className="text-white">
            {hobbies.map((hobby, index) => (
              <li key={index} className="about-activity">
                {hobby.icon} {hobby.text}
              </li>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Hobbies;

// import {
//     FaBaseballBall,
//     FaCamera,
//     FaCar,
//     FaFutbol,
//     FaHeadphones,
//     FaPlane,
//   } from "react-icons/fa";
