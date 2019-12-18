import React from "react";

import { Container } from "./styles";

export default function Input(props) {
  return (
    <Container props={props}>
      <label htmlFor={props.owner}>
        {props.text}
        <input
          placeholder="Digite aqui..."
          type="text"
          id={props.owner}
          onChange={event => props.variable(event.target.value)}
        />
      </label>
    </Container>
  );
}
