import React from "react";

import { Container } from "./styles";
import Select from "../../../components/Select";

export default function Termos(props) {
  return (
    <Container>
      <p>
        *Se o candidato prestou ENEM nos últimos 03 anos e sua média foi
        superior a 450 pontos e não zerou na redação, não precisa prestar
        vestibular da Católica, a nota do ENEM é válida para ingresso na
        instituição. Caso não tenha prestado o ENEM ou a média seja inferior a
        450 pontos deverá fazer o vestibular da Católica para ingressar no
        Ensino Superior.
      </p>

      <Select
        variable={props.variable}
        owner="termos"
        text="Declaro ser brasileiro(a)
        ou naturalizado(a) e não ter concluído nenhum curso de nível superior,
        bem como me comprometo a apresentar toda a documentação exigida pela
        instituição na comprovação de informações, em concordância com as normas
        que regulamentam este processo seletivo.
      "
        content={["CONCORDO", "DISCORDO"]}
      />
    </Container>
  );
}
