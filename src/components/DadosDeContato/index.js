import React from "react";

import { Container } from "./styles";
import Input from "../Input";
import Title from "../Title";
import AdvanceBtn from "../AdvanceBtn";

export default function DadosDeContato() {
  return (
    <>
      <Title text="2 - Dados de contato" />

      <Container>
        <div className="column">
          <Input owner="celular" text="Celular:" width="120px" />
          <Input owner="email" text="Email:" width="200px" />
          <Input owner="Cidade" text="Cidade:" width="200px" />
          <Input owner="numero" text="N°:" width="100px" />
        </div>
        <div className="column">
          <Input owner="telefone" text="Telefone:" width="120px" />
          <Input owner="endereco" text="Endereço:" width="200px" />
          <Input owner="bairro" text="Bairro:" width="200px" />
          <Input owner="complemento" text="Complemento:" width="200px" />
        </div>
      </Container>
      <AdvanceBtn text="CURSOS" route="cursos" />
    </>
  );
}
