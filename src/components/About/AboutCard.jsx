import { t } from "i18next";
import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <h1
          className="text-uppercase"
          style={{ fontSize: "2.1em", paddingBottom: "20px" }}
        >
          <strong className="purple"> {t("about_tile_1")}</strong>
        </h1>
        <blockquote
          className="blockquote mb-0"
          style={{ textAlign: "justify" }}
        >
          <p className="text-white">{t("about_text_1")}</p>
          <ul className="about-activity">
            <li>
              <strong className="purple">{t("about_text_2")}</strong>
            </li>
            <li>
              <strong className="purple">{t("about_text_3")}</strong>
            </li>
            <li>
              <strong className="purple">{t("about_text_4")}</strong>
            </li>
          </ul>
          <p className="text-white">{t("about_text_5")}</p>
          <p><strong className="purple">{t("about_text_6")}</strong></p>
          <p className="text-white">{t("about_text_7")}</p>
          <p><strong className="purple">{t("about_text_8")}</strong></p>
          <p className="text-white">{t("about_text_9")}</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
