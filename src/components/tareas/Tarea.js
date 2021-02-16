import React,{useContext} from 'react'

//Context
import ProyectoContext from '../../context/proyectos/ProyectoContext'
import TareaContext from '../../context/tareas/TareaContext'

const Tarea = ({tarea}) => {

    const {proyecto} = useContext(ProyectoContext);
    const {funEliminarTarea,funEditarTarea,funSelectTarea} = useContext(TareaContext);

    return (
        <li className="tarea sombra"> 
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado ? 
                    <button 
                        type="button"
                        className="completo"
                        onClick={() => funEditarTarea({...tarea,...{estado:false}})}
                    >Completo</button>
                :
                    <button 
                        type="button"
                        className="incompleto"
                        onClick={() => funEditarTarea({...tarea,...{estado:true}})}
                    >Incompleto</button>
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => funSelectTarea(tarea)}
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => funEliminarTarea(tarea._id,proyecto._id)}
                >Eliminar</button>
            </div>
        </li>
    )
}

export default Tarea
