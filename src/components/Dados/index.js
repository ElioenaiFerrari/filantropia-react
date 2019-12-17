import React from "react";

import { Container } from "./styles";
import Title from "../Title";
import Input from "./components/Input";
import Select from "../Select";

export default function Dados() {
  return (
    <Container>
      <Title text="1 - Dados do candidato" />
      <Input owner="nome" width="250px" />
      <div className="row">
        <Select owner="sexo" content={["masculino", "feminino", "outros"]} />
        <Input owner="nascimento" width="90px" />
      </div>
    </Container>
  );
}
