import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import Title from "../../components/Title";
import Divider from "../../components/Divider";
import AdvanceBtn from "../../components/AdvanceBtn";

import QA from "./QA";
import QB from "./QB";
import QC from "./QC";
import QD from "./QD";

export default function GrupoFamiliar() {
  const [mora_com, setMoraCom] = useState("Família");
  const [total_de_membros, setTotalMembros] = useState("Família");
  const [moradia, setMoradia] = useState("Própria");

  const [temVeiculo, setTemVeiculo] = useState("SIM");
  const [marca_modelo, setMarcaModelo] = useState("");
  const [ano, setAno] = useState("");
  const [tipo, setTipo] = useState("COMERCIAL");

  const grupo_familiar = {
    mora_com,
    total_de_membros: Number(total_de_membros),
    moradia,
    temVeiculo: temVeiculo === "SIM" ? 1 : 0,
    veiculos: [
      {
        marca_modelo,
        ano,
        tipo
      }
    ]
  };

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
