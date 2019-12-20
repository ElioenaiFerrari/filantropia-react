import React from "react";

import { Container } from "./styles";
import enviar from "./enviar";

export default function Enviar(props) {
  setTimeout(() => {
    document.querySelector("#enviando").style.width = "100%";
    enviar(props);
  }, 1000);
  return (
    <Container>
      <h1 id="enviando">Enviando...</h1>
    </Container>
  );
}
