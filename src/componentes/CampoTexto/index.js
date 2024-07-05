import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitar = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className="campo-texto ">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitar}
        placeholder={props.placeholder}
        required
      ></input>
    </div>
  );
};
export default CampoTexto;
