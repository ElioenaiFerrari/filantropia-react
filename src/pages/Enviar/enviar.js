import create from "./data/create";

async function enviar(props) {
  create();
  setTimeout(() => {
    props.history.push("/sucesso");
  }, 3000);
}

export default enviar;
