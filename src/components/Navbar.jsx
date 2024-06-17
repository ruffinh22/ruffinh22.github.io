import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.webp";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMessage,
} from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
import ButtonGithub from "./ButtonGithub";
import LanguageSelector from "./LanguageSelector";
import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const navItems = [
    { to: "/", icon: <AiOutlineHome />, text: t("home") },
    { to: "/about", icon: <AiOutlineUser />, text: t("about_me") },
    { to: "/projects", icon: <BsLaptop />, text: t("projects") },
    { to: "/contact", icon: <AiOutlineMessage />, text: t("contact") },
    { to: "/cv", icon: <CgFileDocument />, text: t("cv") },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="">
          <img src={logo} className="img logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navItems.map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  to={item.to}
                  onClick={() => updateExpanded(false)}
                >
                  {item.icon}{" "}
                  {item.text}
                </Nav.Link>
              </Nav.Item>
            ))}
            <LanguageSelector/>
            <ButtonGithub/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
