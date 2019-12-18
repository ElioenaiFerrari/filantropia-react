import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dados from "./pages/Dados";
import Cursos from "./pages/Cursos";
import Questionario from "./pages/Questionario";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dados} />
        <Route path="/cursos" exact component={Cursos} />
        <Route path="/questionario" exact component={Questionario} />
      </Switch>
    </BrowserRouter>
  );
}
