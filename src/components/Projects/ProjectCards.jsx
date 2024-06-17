import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function ProjectCards(props) {
  const { t, i18n } = useTranslation();
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription(t(props.description));
  }, [props.description, t, i18n.language]);

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>
          <strong className="purple">—</strong>
          <strong> {t(props.title)} </strong>
          <strong className="purple">—</strong>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Button variant="primary" href={t(props.ghLink)} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}
        {!props.isBlog && t(props.demoLink) && (
          <Button
            variant="primary"
            href={t(props.demoLink)}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {t("Deployer")}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
