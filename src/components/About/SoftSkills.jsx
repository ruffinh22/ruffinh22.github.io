import { t } from "i18next";
import React from "react";
import Card from "react-bootstrap/Card";
import {
  FaBrain,
  FaClock,
  FaComments,
  FaLightbulb,
  FaSearch,
  FaSyncAlt,
  FaUsers,
} from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function SoftSkills() {
  const softSkills = [
    { icon: <FaBrain />, text: t("text_skills_soft_1") },
    { icon: <FaComments />, text: t("text_skills_soft_2") },
    { icon: <FaSearch />, text: t("text_skills_soft_3") },
    { icon: <FaClock />, text: t("text_skills_soft_4") },
    { icon: <FaUsers />, text: t("text_skills_soft_5") },
    { icon: <FaSyncAlt />, text: t("text_skills_soft_6") },
    { icon: <FaLightbulb />, text: t("text_skills_soft_7") },
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-activity text-uppercase">
            <ImPointRight className="text-white"/>{" "}
            <strong className="purple">{t("soft_skills_title_1")}</strong>
          </p>
          <ul className="text-white">
            {softSkills.map((hobby, index) => (
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

export default SoftSkills;
