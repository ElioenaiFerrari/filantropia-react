import api from "../../../services/api";

export default async function createQuestionarios(user_id) {
  const questionario = await JSON.parse(localStorage.getItem("questionario"));

  const { onde_cursou, e_professor, tem_vinculo_com_a_catolica } = questionario;

  try {
    const response = await api.post(`/${user_id}/questionarios`, {
      onde_cursou,
      e_professor,
      tem_vinculo_com_a_catolica,
      user_id
    });

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}
