import React from "react";

import { Container } from "./styles";
import Select from "../../../components/Select";

export default function QC(props) {
  return (
    <Container>
      <Select
        variable={props.variable}
        owner="temVinculoComACatolica"
        text="c) O candidato possui vínculo acadêmico (ativo ou trancado) com a
          católica de vitória?"
        content={props.content}
      />
    </Container>
  );
}
