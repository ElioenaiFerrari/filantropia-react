export default function setVeiculos(position, veiculos) {
  veiculos[position] = {
    marca_modelo: document.querySelector(`#marca_modelo${position}`).value,
    ano: document.querySelector(`#ano${position}`).value,
    tipo: document.querySelector(`#tipo${position}`).value === "pessoal" ? 0 : 1
  };
}
