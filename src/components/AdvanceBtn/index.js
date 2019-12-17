import React from "react";

import { Container } from "./styles";

export default function AdvanceBtn(props) {
  return (
    <Container>
      <a href={`http://localhost:3000/${props.route}`}>{props.text}</a>
    </Container>
  );
}
