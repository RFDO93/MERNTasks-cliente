import React,{Fragment, useContext, useEffect} from 'react';
import Tarea from './Tarea';

//Context
import ProyectoContext from '../../context/proyectos/ProyectoContext'
import TareaContext from '../../context/tareas/TareaContext'

const ListadoTareas = () => {

    const {proyecto,funEliminarProyecto} = useContext(ProyectoContext)
    const {tareas,funGetTareas} = useContext(TareaContext)

    useEffect(() => {
        if(proyecto !== null && proyecto !== undefined){
            funGetTareas(proyecto._id);
        }
    },[proyecto])

    return (
        <Fragment>
            <h2>Proyecto: {proyecto.nombre}</h2>

            <ul className="listado-tareas">
                {tareas.length === 0 ?
                    <li className="tarea"><p>No hay tareas</p></li>
                :
                    tareas.map( data => <Tarea key={data._id} tarea={data} />)  
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar sombra"
                onClick={() => proyecto && funEliminarProyecto(proyecto._id)}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    )
}

export default ListadoTareas
