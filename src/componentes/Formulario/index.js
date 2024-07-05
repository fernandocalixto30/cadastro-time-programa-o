import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {


  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
   props.aoColaboradorCadastrado({
    nome:nome,
    cargo:cargo,
    imagem:imagem,
    time:time
   })

  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          label="Nome"
          placeholder="Digite o sue nome"
        />
        <CampoTexto
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          label="Cargo"
          placeholder="Digite o Cargo"
        />
        <CampoTexto
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          itens={props.times}
          label="Time"
          
        />
        <Botao texto="Criar card" />
      </form>
    </section>
  );
};
export default Formulario;
