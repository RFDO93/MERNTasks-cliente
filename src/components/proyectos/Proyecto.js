import React,{useContext} from 'react';

//context
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const Proyecto = ({proyecto}) => {

    const {funSeleccionarProyecto} = useContext(ProyectoContext)
    
    return (
        <li>
            <button 
                type="button"
                className="btn btn-blank"
                onClick={() => funSeleccionarProyecto(proyecto)}
            >{proyecto.nombre}</button>
        </li>
    )
}

export default Proyecto
