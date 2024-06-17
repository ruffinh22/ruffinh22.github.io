import React from "react";
import { Row, Col } from "react-bootstrap";
import SocialIcon from "./SocialIcon";
import { t } from "i18next";

function SocialNetworks() {
  return (
    <Row>
      <Col md={12} className="home-about-social text-uppercase">
        <h1>
          <strong className="purple">{t("contact_icon_title_1")}</strong>
        </h1>
        <ul className="home-about-social-links">
          {SocialIcon.map((link, index) => (
            <li key={index} className="social-icons">
              <a
                href={link.href}
                style={{ color: "#700c86" }}
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
              >
                <link.icon />
              </a>
            </li>
          ))}
        </ul>
        <p>
          {t("contact_icon_subtitle_1")}
        </p>
      </Col>
    </Row>
  );
}

export default SocialNetworks;
