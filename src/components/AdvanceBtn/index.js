import React from "react";

import { Container } from "./styles";

export default function AdvanceBtn(props) {
  async function handleSubmit() {
    await localStorage.setItem(props.name, JSON.stringify(props.variable));
  }

  return (
    <Container>
      <a
        href={`http://localhost:3000/${props.route}`}
        onClick={() => handleSubmit()}
      >
        {props.text}
      </a>
    </Container>
  );
}
