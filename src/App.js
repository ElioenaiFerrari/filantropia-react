import React from "react";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

import { Container } from "./styles";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Routes />
    </Container>
  );
}

export default App;
