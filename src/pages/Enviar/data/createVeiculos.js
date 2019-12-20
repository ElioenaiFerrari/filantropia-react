import api from "../../../services/api";

export default async function createVeiculos(user_id) {
  const grupo_familiar = await JSON.parse(
    localStorage.getItem("grupo_familiar")
  );

  const { veiculos } = grupo_familiar;

  try {
    veiculos.map(async item => {
      const response = await api.post(`/${user_id}/veiculos`, {
        marca_modelo: item.marca_modelo,
        ano: item.ano,
        tipo: item.tipo,
        user_id
      });

      console.log(response.data);
    });
  } catch (err) {
    console.error(err);
  }
}
