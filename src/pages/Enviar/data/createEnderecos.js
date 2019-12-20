import api from "../../../services/api";

export default async function createEnderecos(user_id) {
  const dados = await JSON.parse(localStorage.getItem("dados"));
  const grupo_familiar = await JSON.parse(
    localStorage.getItem("grupo_familiar")
  );

  const {
    contatos: { cidade, numero, endereco, bairro, complemento, cep, estado }
  } = dados;

  const { mora_com, moradia, total_de_membros } = grupo_familiar;

  try {
    const response = await api.post(`/${user_id}/enderecos`, {
      estado,
      cidade,
      bairro,
      endereco,
      numero,
      complemento,
      cep,
      mora_com,
      moradia,
      total_de_membros,
      user_id
    });

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}
