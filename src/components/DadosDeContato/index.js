import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import Input from "../Input";
import Title from "../Title";

export default function DadosDeContato(props) {
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");

  useEffect(() => {
    props.variable({
      celular,
      email,
      cidade,
      numero,
      telefone,
      endereco,
      bairro,
      complemento,
      cep,
      estado
    });
  }, [
    celular,
    email,
    cidade,
    numero,
    telefone,
    endereco,
    bairro,
    complemento,
    cep,
    estado
  ]);

  return (
    <>
      <Title text="2 - Dados de contato" />

      <Container>
        <div className="column">
          <Input
            owner="celular"
            text="Celular:"
            width="120px"
            variable={setCelular}
          />
          <Input
            owner="email"
            text="Email:"
            width="200px"
            variable={setEmail}
          />
          <Input
            owner="Cidade"
            text="Cidade:"
            width="200px"
            variable={setCidade}
          />
          <Input owner="numero" text="N°:" width="100px" variable={setNumero} />
          <Input owner="cep" text="CEP:" width="200px" variable={setCep} />
        </div>
        <div className="column">
          <Input
            owner="telefone"
            text="Telefone:"
            width="120px"
            variable={setTelefone}
          />
          <Input
            owner="endereco"
            text="Endereço:"
            width="200px"
            variable={setEndereco}
          />
          <Input
            owner="bairro"
            text="Bairro:"
            width="200px"
            variable={setBairro}
          />
          <Input
            owner="complemento"
            text="Complemento:"
            width="200px"
            variable={setComplemento}
          />
          <Input
            owner="estado"
            text="Estado:"
            width="200px"
            variable={setEstado}
          />
        </div>
      </Container>
    </>
  );
}
