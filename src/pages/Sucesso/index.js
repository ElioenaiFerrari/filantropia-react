import React from "react";

import { Container } from "./styles";

export default function Sucesso() {
  return (
    <Container>
      <div>
        <h1>Inscrição concluída!</h1>
        <p>
          Fique de olho no seu email passaremos todas as informações
          necessárias. Não perca essa oportunidade!!!
        </p>
      </div>

      <a id="voltar" href="http://ucv.edu.br">
        IR PARA CATÓLICA
      </a>
    </Container>
  );
}
