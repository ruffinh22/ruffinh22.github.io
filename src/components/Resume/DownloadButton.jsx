import React from 'react';
import { Button } from "react-bootstrap";
import { AiOutlineCloudDownload } from "react-icons/ai";

function DownloadButton({ href, language }) {
    return (
        <Button
            variant="primary"
            href={href}
            target="_blank"
            style={{ maxWidth: "250px"}}
        >
            <AiOutlineCloudDownload />
            &nbsp;{language === 'es' ? "Descargar CV" : "Download CV"}
        </Button>
    );
}

export default DownloadButton;
