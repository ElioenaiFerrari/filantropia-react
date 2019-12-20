import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dados from "./pages/Dados";
import Cursos from "./pages/Cursos";
import Questionario from "./pages/Questionario";
import GrupoFamiliar from "./pages/GrupoFamiliar";
import Enviar from "./pages/Enviar";
import Sucesso from "./pages/Sucesso";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dados} />
        <Route path="/cursos" exact component={Cursos} />
        <Route path="/questionario" exact component={Questionario} />
        <Route path="/grupo_familiar" exact component={GrupoFamiliar} />
        <Route path="/enviar" exact component={Enviar} />
        <Route path="/sucesso" exact component={Sucesso} />
      </Switch>
    </BrowserRouter>
  );
}
