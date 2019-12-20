import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { parentesco, titulo, estado_civil, escolaridade } from "./dados";

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
            onBlur={event =>
              (props.familiares[position] = {
                nome: document.querySelector(`#nome${position}`).value,
                idade: Number(
                  document.querySelector(`#idade${position}`).value
                ),
                parentesco: document.querySelector(`#parentesco${position}`)
                  .value,
                estado_civil: document.querySelector(`#estado_civil${position}`)
                  .value,
                escolaridade: document.querySelector(`#escolaridade${position}`)
                  .value,
                profissao: document.querySelector(`#profissao${position}`)
                  .value,
                renda_bruta: Number(
                  document.querySelector(`#renda_bruta${position}`).value
                )
              })
            }
          />
        </td>
        <td>
          <input
            id={`idade${position}`}
            type="number"
            onBlur={event =>
              (props.familiares[position] = {
                nome: document.querySelector(`#nome${position}`).value,
                idade: Number(
                  document.querySelector(`#idade${position}`).value
                ),
                parentesco: document.querySelector(`#parentesco${position}`)
                  .value,
                estado_civil: document.querySelector(`#estado_civil${position}`)
                  .value,
                escolaridade: document.querySelector(`#escolaridade${position}`)
                  .value,
                profissao: document.querySelector(`#profissao${position}`)
                  .value,
                renda_bruta: Number(
                  document.querySelector(`#renda_bruta${position}`).value
                )
              })
            }
          />
        </td>
        <td>
          <select
            id={`parentesco${position}`}
            onBlur={event =>
              (props.familiares[position] = {
                nome: document.querySelector(`#nome${position}`).value,
                idade: Number(
                  document.querySelector(`#idade${position}`).value
                ),
                parentesco: document.querySelector(`#parentesco${position}`)
                  .value,
                estado_civil: document.querySelector(`#estado_civil${position}`)
                  .value,
                escolaridade: document.querySelector(`#escolaridade${position}`)
                  .value,
                profissao: document.querySelector(`#profissao${position}`)
                  .value,
                renda_bruta: Number(
                  document.querySelector(`#renda_bruta${position}`).value
                )
              })
            }
          >
            {parentesco.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </td>
        <td>
          <select
            id={`estado_civil${position}`}
            onBlur={event =>
              (props.familiares[position] = {
                nome: document.querySelector(`#nome${position}`).value,
                idade: Number(
                  document.querySelector(`#idade${position}`).value
                ),
                parentesco: document.querySelector(`#parentesco${position}`)
                  .value,
                estado_civil: document.querySelector(`#estado_civil${position}`)
                  .value,
                escolaridade: document.querySelector(`#escolaridade${position}`)
                  .value,
                profissao: document.querySelector(`#profissao${position}`)
                  .value,
                renda_bruta: Number(
                  document.querySelector(`#renda_bruta${position}`).value
                )
              })
            }
          >
            {estado_civil.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </td>
        <td>
          <select
            id={`escolaridade${position}`}
            onBlur={event =>
              (props.familiares[position] = {
                nome: document.querySelector(`#nome${position}`).value,
                idade: Number(
                  document.querySelector(`#idade${position}`).value
                ),
                parentesco: document.querySelector(`#parentesco${position}`)
                  .value,
                estado_civil: document.querySelector(`#estado_civil${position}`)
                  .value,
                escolaridade: document.querySelector(`#escolaridade${position}`)
                  .value,
                profissao: document.querySelector(`#profissao${position}`)
                  .value,
                renda_bruta: Number(
                  document.querySelector(`#renda_bruta${position}`).value
                )
              })
            }
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
            onBlur={event =>
              (props.familiares[position] = {
                nome: document.querySelector(`#nome${position}`).value,
                idade: Number(
                  document.querySelector(`#idade${position}`).value
                ),
                parentesco: document.querySelector(`#parentesco${position}`)
                  .value,
                estado_civil: document.querySelector(`#estado_civil${position}`)
                  .value,
                escolaridade: document.querySelector(`#escolaridade${position}`)
                  .value,
                profissao: document.querySelector(`#profissao${position}`)
                  .value,
                renda_bruta: Number(
                  document.querySelector(`#renda_bruta${position}`).value
                )
              })
            }
          />
        </td>
        <td>
          <input
            id={`renda_bruta${position}`}
            type="number"
            onBlur={event =>
              (props.familiares[position] = {
                nome: document.querySelector(`#nome${position}`).value,
                idade: Number(
                  document.querySelector(`#idade${position}`).value
                ),
                parentesco: document.querySelector(`#parentesco${position}`)
                  .value,
                estado_civil: document.querySelector(`#estado_civil${position}`)
                  .value,
                escolaridade: document.querySelector(`#escolaridade${position}`)
                  .value,
                profissao: document.querySelector(`#profissao${position}`)
                  .value,
                renda_bruta: Number(
                  document.querySelector(`#renda_bruta${position}`).value
                )
              })
            }
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
