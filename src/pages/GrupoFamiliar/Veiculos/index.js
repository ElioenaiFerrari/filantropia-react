import React from "react";

import { Container } from "./styles";

export default function Veiculos(props) {
  const head = ["Marca/Modelo", "Ano de fabricação", "Utilização"];

  function createTable(position) {
    return (
      <tr>
        <td>
          <input
            id={`marca_modelo${position}`}
            type="text"
            onBlur={event => {
              props.veiculos[position] = {
                marca_modelo: document.querySelector(`#marca_modelo${position}`)
                  .value,
                ano: document.querySelector(`#ano${position}`).value,
                tipo:
                  document.querySelector(`#tipo${position}`).value === "pessoal"
                    ? 0
                    : 1
              };
            }}
          />
        </td>
        <td>
          <input
            id={`ano${position}`}
            type="text"
            onBlur={event => {
              props.veiculos[position] = {
                marca_modelo: document.querySelector(`#marca_modelo${position}`)
                  .value,
                ano: document.querySelector(`#ano${position}`).value,
                tipo:
                  document.querySelector(`#tipo${position}`).value === "pessoal"
                    ? 0
                    : 1
              };
            }}
          />
        </td>
        <select
          id={`tipo${position}`}
          onBlur={event => {
            props.veiculos[position] = {
              marca_modelo: document.querySelector(`#marca_modelo${position}`)
                .value,
              ano: document.querySelector(`#ano${position}`).value,
              tipo:
                document.querySelector(`#tipo${position}`).value === "pessoal"
                  ? 0
                  : 1
            };
          }}
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
        {createTable(3)}
        {createTable(4)}
      </table>
    </Container>
  );
}
