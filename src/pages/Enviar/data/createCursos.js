import api from "../../../services/api";

export default async function createCursos(user_id) {
  const cursos = await JSON.parse(localStorage.getItem("cursos"));
  const { primeira_op, segunda_op } = cursos;

  try {
    const response = await api.post(`${user_id}/cursos`, {
      primeira_op,
      segunda_op,
      user_id
    });

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}
