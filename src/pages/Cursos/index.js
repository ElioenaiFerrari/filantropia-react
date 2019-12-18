import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import Select from "../../components/Select";
import Title from "../../components/Title";
import AdvanceBtn from "../../components/AdvanceBtn";
import { cursos } from "./cursos";

export default function Cursos() {
  const [primeiraOp, setPrimeiraOp] = useState("ADMINISTRAÇÃO");
  const [segundaOp, setSegundaOp] = useState("ADMINISTRAÇÃO");
  // Salva os cursos no localStorage
  const [curso, setCursos] = useState({});
  useEffect(() => {
    setCursos({ primeiraOp, segundaOp });
  }, [primeiraOp, segundaOp]);

  return (
    <>
      <Title text="3 - Cursos" />
      <Container>
        <Select
          variable={setPrimeiraOp}
          owner="primeiraOp"
          text="1° Opção"
          content={cursos}
        />
        <Select
          variable={setSegundaOp}
          owner="segundaOp"
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
