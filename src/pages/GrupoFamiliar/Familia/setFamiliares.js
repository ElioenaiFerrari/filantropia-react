export default function setFamiliares(position, familiares) {
  familiares[position] = {
    nome: document.querySelector(`#nome${position}`).value,
    idade: Number(document.querySelector(`#idade${position}`).value),
    parentesco: document.querySelector(`#parentesco${position}`).value,
    estado_civil: document.querySelector(`#estado_civil${position}`).value,
    escolaridade: document.querySelector(`#escolaridade${position}`).value,
    profissao: document.querySelector(`#profissao${position}`).value,
    renda_bruta: Number(document.querySelector(`#renda_bruta${position}`).value)
  };
}
