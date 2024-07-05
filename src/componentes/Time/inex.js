import './style.css'
import Colaborador from './../Colaborador/index';
function Time(props){
return(
    <section className='time' style={{backgroundColor: props.corSegundaria}}>
        <h3 style={{ borderColor: props.corPrimaria,}}>{props.nome}</h3>
        <div className="colaboradores">
         {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} image={colaborador.imagem} />)}
         </div> 
    </section>
)
}
export default Time