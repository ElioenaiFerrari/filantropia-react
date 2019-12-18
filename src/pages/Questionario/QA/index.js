import React from "react";

import { Container } from "./styles";
import Select from "../../../components/Select";

export default function QA(props) {
  return (
    <Container>
      <Select
        variable={props.variable}
        owner="ondeCursou"
        text="a) Em que escola você cursou o ensino médio?"
        width="410px"
        content={[
          "Em escola de rede pública durante todo o ensino médio.",
          "Em escola de rede privada na condição de bolsista integral da própria instituição.",
          "Parcialmente em escola pública e parcialmente em escola privada na condição de bolsista integral da própria instituição."
        ]}
      />
    </Container>
  );
}
