import React from "react";

import { Container } from "./styles";
import Select from "../../../components/Select";

export default function QB(props) {
  return (
    <Container>
      <Select
        variable={props.variable}
        owner="eProfessor"
        text="b) O candidato é professor da rede pública de ensino, no efetivo
          exercício do magistério da educação básica, integrando o quadro de
          pessoal permanente?"
        content={props.content}
      />
    </Container>
  );
}
