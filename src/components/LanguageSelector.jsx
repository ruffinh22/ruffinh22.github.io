import React, { useState, useEffect } from "react";
import { Button, Nav } from "react-bootstrap";
import usFlag from "../Assets/Flags/us.svg"; // Assuming this is the flag for English
import frFlag from "../Assets/Flags/fr.svg"; // Assuming this is the flag for French
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "fr");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr";
    setLanguage(newLanguage);
  };

  return (
    <Nav.Item className="fork-btn">
      <Button onClick={toggleLanguage} className="language-btn fork-btn-inner">
        <img
          src={language === "fr" ? usFlag : frFlag}
          alt={language === "fr" ? "US Flag" : "FR Flag"}
          style={{
            width: "23px",
            height: "23px",
            borderRadius: "100%",
          }}
        />
      </Button>
    </Nav.Item>
  );
}

export default LanguageSelector;


// Otro estilo de botón
    // <Nav.Item className="fork-btn">
    //   <Button onClick={toggleLanguage} className="language-btn fork-btn-inner">
    //     <img
    //       src={esFlag}
    //       alt="es-flag"
    //       style={{
    //         width: "23px",
    //         height: "23px",
    //         borderRadius: "100%",
    //         marginRight: "5px",
    //         opacity: language === "es" ? 1 : 0.5
    //       }}
    //     />
    //     <img
    //       src={usFlag}
    //       alt="us-flag"
    //       style={{
    //         width: "23px",
    //         height: "23px",
    //         borderRadius: "100%",
    //         opacity: language === "en" ? 1 : 0.5
    //       }}
    //     />
    //   </Button>
    // </Nav.Item>