import React from "react";

import { Container } from "./styles";

import Select from "../../components/Select";
import Title from "../../components/Title";
import AdvanceBtn from "../../components/AdvanceBtn";

export default function Cursos() {
  const cursos = [
    "ADMINISTRAÇÃO",
    "ARQUITETURA E URBANISMO",
    "BIOMEDICINA",
    "CIÊNCIAS BIOLÓGICAS (BACHARELADO)",
    "CIÊNCIAS BIOLÓGICAS (LICENCIATURA)",
    "CIÊNCIAS CONTÁBEIS",
    "DIREITO",
    "EDUCAÇÃO FÍSICA (BACHARELADO)",
    "EDUCAÇÃO FÍSICA (LICENCIATURA)",
    "ENFERMAGEM",
    "ENGENHARIA CIVIL",
    "ENGENHARIA MECÂNICA",
    "ENGENHARIA ELÉTRICA",
    "FARMÁCIA",
    "FILOSOFIA (BACHARELADO)",
    "FISIOTERAPIA",
    "NUTRIÇÃO",
    "PEDAGOGIA",
    "PSICOLOGIA",
    "SERVIÇO SOCIAL",
    "SISTEMAS DE INFORMAÇÃO"
  ];
  return (
    <>
      <Title text="3 - Cursos" />
      <Container>
        <Select owner="primeiraOp" text="1° Opção" content={cursos} />
        <Select owner="segundaOp" text="2° Opção" content={cursos} />
      </Container>
      <AdvanceBtn text="QUESTIONÁRIO" route="questionario" />
    </>
  );
}
