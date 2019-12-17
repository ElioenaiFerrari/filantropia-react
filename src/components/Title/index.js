import React, { useState } from "react";

import { Container } from "./styles";

export default function Title(props) {
  return (
    <Container>
      <h5>{props.text}</h5>
    </Container>
  );
}
