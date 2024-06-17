import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV_1.pdf";
import pdf2 from "../../Assets/../Assets/CV_2.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useTranslation } from "react-i18next";
import DownloadButton from './DownloadButton';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const { i18n } = useTranslation();
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const currentLanguage = i18n.language;
  const isSpanish = currentLanguage === 'es';

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <DownloadButton href={isSpanish ? pdf : pdf2} language={currentLanguage} />
        </Row>
        <Row className="resume">
          <Document file={isSpanish ? pdf : pdf2} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <DownloadButton href={isSpanish ? pdf : pdf2} language={currentLanguage} />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
