import { t } from "i18next";
import React from "react";
import Card from "react-bootstrap/Card";
import { FaChartLine, FaCheckCircle, FaDesktop, FaHandsHelping, FaHeadset, FaLaptopCode, FaTools } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function TecSkills() {
  const softSkills = [
    { icon: <FaDesktop />, text: t("text_skills_tec_1") },
    { icon: <FaChartLine />, text: t("text_skills_tec_2") },
    { icon: <FaLaptopCode />, text: t("text_skills_tec_3") },
    { icon: <FaTools />, text: t("text_skills_tec_4") },
    { icon: <FaHandsHelping />, text: t("text_skills_tec_5") },
    { icon: <FaCheckCircle />, text: t("text_skills_tec_6") },
    { icon: <FaHeadset />, text: t("text_skills_tec_7") },
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-activity text-uppercase">
            <ImPointRight className="text-white"/>{" "}
            <strong className="purple">{t("tec_skills_title_1")}</strong>
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

export default TecSkills;
