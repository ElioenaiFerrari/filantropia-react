import api from "../../../services/api";

export default async function createRendas(user_id) {
  const grupo_familiar = await JSON.parse(
    localStorage.getItem("grupo_familiar")
  );

  const { familiares } = grupo_familiar;

  try {
    familiares.map(async item => {
      const response = await api.post(`/${user_id}/rendas`, {
        nome: item.nome,
        idade: item.idade,
        parentesco: item.parentesco,
        estado_civil: item.estado_civil,
        escolaridade: item.escolaridade,
        profissao: item.profissao,
        renda_bruta: item.renda_bruta,
        user_id
      });

      console.log(response.data);
    });
  } catch (err) {
    console.error(err);
  }
}
