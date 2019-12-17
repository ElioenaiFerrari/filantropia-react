import React from "react";

import { Container } from "./styles";

export default function Select(props) {
  return (
    <Container>
      <label htmlFor={props.owner}>{props.text}</label>
      <select id={props.owner}>
        {props.content.map(item => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </Container>
  );
}
