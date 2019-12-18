import React from "react";

import { Container } from "./styles";

export default function Input(props) {
  return (
    <Container props={props}>
      <label htmlFor={props.owner}>
        {props.text}
        <input
          type={props.type}
          placeholder="Digite aqui..."
          id={props.owner}
          onChange={event => props.variable(event.target.value)}
        />
      </label>
    </Container>
  );
}
