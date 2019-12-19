import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { parentesco, titulo, estado_civil, escolaridade } from "./dados";

export default function Familia(props) {
  var [total, setTotal] = useState([]);

  useEffect(() => {
    total.length = 0;
  }, [props.total]);

  for (let i = 1; i <= props.total; i++) {
    total.push(i);
  }
  function createTable(position) {
    return (
      <tr>
        <td>
          <input id={`nome${position}`} type="text" />
        </td>
        <td>
          <input id={`idade${position}`} type="text" />
        </td>
        <td>
          <select id={`parentesco${position}`}>
            {parentesco.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </td>
        <td>
          <select id={`parentesco${position}`}>
            {estado_civil.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </td>
        <td>
          <select id={`parentesco${position}`}>
            {escolaridade.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </td>
        <td>
          <input id={`prof${position}`} type="text" />
        </td>
        <td>
          <input id={`renda${position}`} type="number" />
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
        {total.map((item, index) => createTable(item))}
      </table>
    </Container>
  );
}
