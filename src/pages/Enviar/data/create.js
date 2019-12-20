import api from "../../../services/api";
import createCursos from "./createCursos";
import createQuestionarios from "./createQuestionarios";
import createEnems from "./createEnems";
import createVeiculos from "./createVeiculos";
import createRendas from "./createRendas";
import createEnderecos from "./createEnderecos";

export default async function create() {
  let user_id;

  const dados = await JSON.parse(localStorage.getItem("dados"));
  const {
    pessoais: { nome, sexo, nasc },
    contatos: { celular, email, telefone }
  } = dados;

  try {
    const response = await api.post("/pessoas", {
      nome,
      sexo,
      nasc,
      celular,
      telefone,
      email
    });

    user_id = await response.data.id;
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }

  createCursos(user_id);
  createQuestionarios(user_id);
  createEnems(user_id);
  createVeiculos(user_id);
  createRendas(user_id);
  createEnderecos(user_id);
}
