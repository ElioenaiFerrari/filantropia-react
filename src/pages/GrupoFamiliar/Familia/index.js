import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { parentesco, titulo, estado_civil, escolaridade } from "./dados";
import setFamiliares from "./setFamiliares";

export default function Familia(props) {
  var [total] = useState([]);

  useEffect(() => {
    total.length = 0;
  }, [props.total]);

  for (let i = 0; i < props.total; i++) {
    total.push(i);
  }

  function createTable(position) {
    return (
      <tr>
        <td>
          <input
            id={`nome${position}`}
            type="text"
            onBlur={event => setFamiliares(position, props.familiares)}
          />
        </td>
        <td>
          <input
            id={`idade${position}`}
            type="number"
            onBlur={event => setFamiliares(position, props.familiares)}
          />
        </td>
        <td>
          <select
            id={`parentesco${position}`}
            onBlur={event => setFamiliares(position, props.familiares)}
          >
            {parentesco.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </td>
        <td>
          <select
            id={`estado_civil${position}`}
            onBlur={event => setFamiliares(position, props.familiares)}
          >
            {estado_civil.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </td>
        <td>
          <select
            id={`escolaridade${position}`}
            onBlur={event => setFamiliares(position, props.familiares)}
          >
            {escolaridade.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </td>
        <td>
          <input
            id={`profissao${position}`}
            type="text"
            onBlur={event => setFamiliares(position, props.familiares)}
          />
        </td>
        <td>
          <input
            id={`renda_bruta${position}`}
            type="number"
            onBlur={event => setFamiliares(position, props.familiares)}
          />
        </td>
      </tr>
    );
  }

  return (
    <Container>
      <table border="1" width={props.width}>
        {titulo.map(item => (
          <th>{item}</th>
        ))}
        {total.map((item, index) => createTable(index))}
      </table>
    </Container>
  );
}
