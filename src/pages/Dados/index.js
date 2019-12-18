import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import DadosDoCandidato from "../../components/DadosDoCandidato";
import DadosDeContato from "../../components/DadosDeContato";

import AdvanceBtn from "../../components/AdvanceBtn";

export default function Dados() {
  const [pessoais, setPessoais] = useState({});
  const [contatos, setContatos] = useState({});
  // Salva os dados pessoais e de contatos no lcoalStorage
  const [dados, setDados] = useState({});
  useEffect(() => {
    setDados({ pessoais, contatos });
  }, [pessoais, contatos]);

  return (
    <Container>
      <DadosDoCandidato variable={setPessoais} />
      <DadosDeContato variable={setContatos} />
      <AdvanceBtn text="CURSOS" route="cursos" name="dados" variable={dados} />
    </Container>
  );
}
