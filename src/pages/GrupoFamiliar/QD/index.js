import React from "react";

import { Container } from "./styles";
import Select from "../../../components/Select";

export default function QD(props) {
  return (
    <Container>
      <Select
        variable={props.variable}
        owner="temVeiculo"
        text="d) Possui veículo?"
        content={["SIM", "NÃO"]}
        width="70px"
      />
    </Container>
  );
}
