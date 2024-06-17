import { t } from "i18next";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit, DiGithubBadge } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiApachenetbeanside,
  SiWindows,
  SiFigma,
  SiZoom,
  SiDiscord,
  SiJira,
  SiTrello,
  SiNotion,
  SiMiro,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiWindows />, name: "Windows" },
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiDiscord />, name: "Discord" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiApachenetbeanside />, name: "Apache NetBeans" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <DiGithubBadge />, name: "GitHub" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiZoom />, name: "Zoom" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiJira />, name: "Jira" },
    { icon: <SiTrello />, name: "Trello" },
    { icon: <SiNotion />, name: "Notion" },
    { icon: <SiMiro />, name: "Miro" },
  ];

  return (
    <>
      <h1 className="project-heading text-uppercase">
        <strong className="purple">{t("title_tool_stack_1")}</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((tool, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            {tool.icon}
            <div className="text-white fs-6">{tool.name}</div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Toolstack;
