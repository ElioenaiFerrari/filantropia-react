import React from "react";

import { Container } from "./styles";
import Title from "../../components/Title";
import AdvanceBtn from "../../components/AdvanceBtn";

export default function Questionario() {
  return (
    <>
      <Title text="4 - Questionário" /> <Container></Container>{" "}
      <AdvanceBtn
        text="GRUPO FAMILIAR"
        route="questionario"
        name="grupo_familiar"
      />
    </>
  );
}
