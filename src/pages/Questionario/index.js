import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import Title from "../../components/Title";
import AdvanceBtn from "../../components/AdvanceBtn";
import Divider from "../../components/Divider";

import QA from "./QA";
import QB from "./QB";
import QC from "./QC";
import QD from "./QD";
import Termos from "./Termos";

export default function Questionario() {
  const [bool] = useState(["SIM", "NÃO"]);
  const [onde_cursou, setOndeCursou] = useState(
    "Em escola de rede pública durante todo o ensino médio."
  );
  const [e_professor, setEProfessor] = useState("SIM");
  const [tem_vinculo_com_a_catolica, setVinculo] = useState("SIM");

  const [ano, setAno] = useState("");
  const [media, setMedia] = useState("");
  const [termos, setTermos] = useState("CONCORDO");

  const grupo_familiar = {
    onde_cursou,
    termos: termos === "CONCORDO" ? 1 : 0,
    e_professor: e_professor === "SIM" ? 1 : 0,
    tem_vinculo_com_a_catolica: tem_vinculo_com_a_catolica === "SIM" ? 1 : 0,
    ano,
    media
  };

  return (
    <>
      <Title text="4 - Questionário" />

      <Container>
        <QA variable={setOndeCursou} />
        <Divider />
        <QB variable={setEProfessor} content={bool} />
        <Divider />
        <QC variable={setVinculo} content={bool} />
        <Divider />
        <QD content={bool} ano={setAno} media={setMedia} />
        <Divider />
        <Termos variable={setTermos} />
      </Container>

      <AdvanceBtn
        text="GRUPO FAMILIAR"
        route="questionario"
        name="grupo_familiar"
        variable={grupo_familiar}
      />
    </>
  );
}
