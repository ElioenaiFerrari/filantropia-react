import React from "react";

import { Container } from "./styles";
import Select from "../../../components/Select";

export default function QA(props) {
  return (
    <Container>
      <Select
        variable={props.variable}
        owner="comQuemMora"
        text="a) Com quem o candidato mora?"
        width="100px"
        content={["Sozinho", "Família"]}
      />
    </Container>
  );
}
