import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ProjectList from "./ProjectList";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t, i18n } = useTranslation();
  const isDesktop = window.innerWidth >= 768 && window.innerWidth <= 1223;
  const [projectListData, setProjectListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ProjectList();
      setProjectListData(data);
    };
    fetchData();
  },  [i18n.language]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-uppercase">
          <strong className="purple">{t("title_project_section_1")}</strong>
        </h1>
        <p style={{ color: "white" }}>{t("subtitle_project_section_1")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectListData.map((project, index) => (
            <Col key={index} md={isDesktop ? 6 : 4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

