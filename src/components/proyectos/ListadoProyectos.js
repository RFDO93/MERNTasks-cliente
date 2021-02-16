import React,{useContext} from 'react'
import Proyecto from './Proyecto';

import ProyectoContext from '../../context/proyectos/ProyectoContext';

const ListadoProyectos = () => {

    const {proyectos} = useContext(ProyectoContext)

    return (
        <ul className="listado-proyectos">
            {proyectos.map( data => (<Proyecto key={data._id} proyecto={data} />))}
        </ul>
    )
}

export default ListadoProyectos
