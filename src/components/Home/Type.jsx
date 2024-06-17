import { t } from "i18next";
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  const stringsArray = Array.from({ length: 6 }, (_, index) =>
    t(`strings_type.${index}`)
  );

  return (
    <Typewriter
      className="text-uppercase"
      options={{
        strings: stringsArray,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
