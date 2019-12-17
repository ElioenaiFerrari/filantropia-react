import React from "react";

import { Container } from "./styles";
import Title from "../Title";
import Input from "../Input";
import Select from "../Select";

export default function DadosDoCandidato() {
  return (
    <>
      <Title text="1 - Dados do candidato" />

      <Container>
        <Input owner="nome" text="Nome:" width="250px" />
        <div className="row">
          <Select
            owner="sexo"
            text="Sexo"
            content={["masculino", "feminino", "outros"]}
          />
          <Input owner="nasc" text="Data de nascimento" width="90px" />
        </div>
      </Container>
    </>
  );
}
