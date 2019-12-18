import React from "react";

import { Container } from "./styles";

import Input from "../../../components/Input";

export default function QB(props) {
  return (
    <Container>
      <Input
        variable={props.variable}
        text="b) Total de mebros (Você + Grupo familiar):"
        type="number"
        owner="totalDeMembros"
        width="100px"
      />
    </Container>
  );
}
