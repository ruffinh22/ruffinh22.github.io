import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/contact.svg";
import ContactText from "./ContactText";
import SocialNetworks from "./SocialNetWorks";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "15px",
            }}
          >
            <ContactText />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ maxHeight: "450px", marginBottom: "10%" }}
            />
          </Col>
        </Row>
        <ContactForm/>
        <SocialNetworks />
      </Container>
    </Container>
  );
}

export default Contact;
