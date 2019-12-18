import React from "react";

import { Container } from "./styles";
import Select from "../../../components/Select";

export default function QC(props) {
  return (
    <Container>
      <Select
        variable={props.variable}
        owner="moraCom"
        text="c) Tipo de moradia:"
        content={["Própria", "Financiada", "Alugada", "Cedida", "República"]}
        width="90px"
      />
    </Container>
  );
}
