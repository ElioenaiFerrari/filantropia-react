import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import Title from "../Title";
import Input from "../Input";
import Select from "../Select";

export default function DadosDoCandidato(props) {
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [nasc, setNasc] = useState("");

  useEffect(() => {
    if (sexo === "feminino") {
      setSexo(0);
    } else if (sexo === "masculino") {
      setSexo(1);
    } else {
      setSexo(2);
    }
    props.variable({ nome, sexo, nasc });
  }, [nome, sexo, nasc]);

  return (
    <>
      <Title text="1 - Dados do candidato" />

      <Container>
        <Input owner="nome" text="Nome:" width="250px" variable={setNome} />
        <div className="row">
          <Select
            owner="sexo"
            text="Sexo"
            content={["masculino", "feminino", "outros"]}
            variable={setSexo}
          />
          <Input
            owner="nasc"
            text="Data de nascimento"
            width="90px"
            variable={setNasc}
          />
        </div>
      </Container>
    </>
  );
}
