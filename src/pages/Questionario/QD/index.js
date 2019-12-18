import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import Select from "../../../components/Select";
import Input from "../../../components/Input";

export default function QD(props) {
  const [fez_enem, setFezEnem] = useState("SIM");

  useEffect(() => {
    const ano = document.querySelector("#ano").style;
    const media = document.querySelector("#media").style;

    if (fez_enem === "SIM") {
      ano.display = "flex";
      media.display = "flex";
    } else {
      ano.display = "none";
      media.display = "none";
    }
  }, [fez_enem]);

  return (
    <Container>
      <Select
        variable={setFezEnem}
        owner="fezEnem"
        text="d) O candidato realizou ENEM* nos últimos 03 anos?"
        content={props.content}
      />
      <Input variable={props.ano} text="Ano:" owner="ano" />
      <Input
        variable={props.media}
        text="Média das notas:"
        type="number"
        owner="media"
      />
    </Container>
  );
}
