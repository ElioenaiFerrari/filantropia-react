import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import Title from "../../components/Title";
import Divider from "../../components/Divider";
import AdvanceBtn from "../../components/AdvanceBtn";

import QA from "./QA";
import QB from "./QB";
import QC from "./QC";
import QD from "./QD";
import Veiculos from "./Veiculos";
import Familia from "./Familia";

export default function GrupoFamiliar() {
  // Info
  const [mora_com, setMoraCom] = useState("Sozinho");
  const [total_de_membros, setTotalMembros] = useState(0);
  const [moradia, setMoradia] = useState("Própria");

  //Familiares
  const [familiares, setFamiliares] = useState([]);
  // Veículo
  const [temVeiculo, setTemVeiculo] = useState("SIM");

  let [veiculos] = useState([{}]);
  //Dados
  const grupo_familiar = {
    mora_com,
    total_de_membros: Number(total_de_membros),
    moradia,
    temVeiculo: temVeiculo === "SIM" ? 1 : 0,
    veiculos,
    familiares
  };

  useEffect(() => {
    console.log(veiculos);
  }, [veiculos]);

  return (
    <>
      <Title text="5 - Grupo familiar" />
      <Container>
        <QA variable={setMoraCom} />
        <Divider />
        <QB variable={setTotalMembros} />
        <Divider />
        <QC variable={setMoradia} />
        <Divider />
        <QD variable={setTemVeiculo} />
        <Veiculos width="40%" veiculos={veiculos} />
        <Divider />
        <Familia
          width="95%"
          familiares={familiares}
          total={total_de_membros}
          mora_com={mora_com}
        />
      </Container>
      <AdvanceBtn
        text="ENVIAR DADOS"
        route="enviar"
        name="grupo_familiar"
        variable={grupo_familiar}
      />
    </>
  );
}
