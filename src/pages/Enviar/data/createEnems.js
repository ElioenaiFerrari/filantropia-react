import api from "../../../services/api";

export default async function createEnems(user_id) {
  const questionario = await JSON.parse(localStorage.getItem("questionario"));

  const {
    ENEM: { ano, media }
  } = questionario;

  try {
    const response = await api.post(`/${user_id}/enems`, {
      ano,
      media,
      user_id
    });
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}
