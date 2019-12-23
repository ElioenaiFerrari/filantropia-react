import React from "react";

import { Container } from "./styles";
import setVeiculos from "./setVeiculos";

export default function Veiculos(props) {
  const head = ["Marca/Modelo", "Ano de fabricação", "Utilização"];

  function createTable(position) {
    return (
      <tr>
        <td>
          <input
            id={`marca_modelo${position}`}
            type="text"
            onBlur={event => setVeiculos(position, props.veiculos)}
          />
        </td>
        <td>
          <input
            id={`ano${position}`}
            type="text"
            onBlur={event => setVeiculos(position, props.veiculos)}
          />
        </td>
        <select
          id={`tipo${position}`}
          onBlur={event => setVeiculos(position, props.veiculos)}
        >
          <option value="pessoal">Pessoal</option>
          <option value="comercial">Comercial</option>
        </select>
      </tr>
    );
  }

  return (
    <Container>
      <table border="1" width={props.width}>
        {head.map(item => (
          <th>{item}</th>
        ))}
        {createTable(0)}
        {createTable(1)}
        {createTable(2)}
      </table>
    </Container>
  );
}
