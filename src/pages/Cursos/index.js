import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import Select from "../../components/Select";
import Title from "../../components/Title";
import AdvanceBtn from "../../components/AdvanceBtn";
import { cursos } from "./cursos";

export default function Cursos() {
  const [primeira_op, setPrimeiraOp] = useState("ADMINISTRAÇÃO");
  const [segunda_op, setSegundaOp] = useState("ADMINISTRAÇÃO");
  // Salva os cursos no localStorage
  const [curso, setCursos] = useState({});
  useEffect(() => {
    setCursos({ primeira_op, segunda_op });
  }, [primeira_op, segunda_op]);

  return (
    <>
      <Title text="3 - Cursos" />
      <Container>
        <Select
          width="150px"
          variable={setPrimeiraOp}
          owner="primeira_op"
          text="1° Opção"
          content={cursos}
        />
        <Select
          width="150px"
          variable={setSegundaOp}
          owner="segunda_op"
          text="2° Opção"
          content={cursos}
        />
      </Container>
      <AdvanceBtn
        text="QUESTIONÁRIO"
        route="questionario"
        variable={curso}
        name="cursos"
      />
    </>
  );
}
