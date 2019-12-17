import React from "react";

import { Container } from "./styles";
import DadosDoCandidato from "../../components/DadosDoCandidato";
import DadosDeContato from "../../components/DadosDeContato";

export default function Dados() {
  return (
    <Container>
      <DadosDoCandidato />
      <DadosDeContato />
    </Container>
  );
}
