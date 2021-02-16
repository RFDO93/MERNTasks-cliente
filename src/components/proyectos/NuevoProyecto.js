import React, {Fragment, useState,useContext} from 'react'
//Context
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const NuevoProyecto = () => {

    const [proyecto,setProyecto] = useState({
        nombre: ''
    });

    const proyectoContext = useContext(ProyectoContext)

    const {formulario,funFormulario,crearProyecto} = proyectoContext

    const {nombre} = proyecto

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar proyecto
        if(nombre === ''){
            return
        }

        //Agregar al state
        crearProyecto(nombre)


        setProyecto({
            nombre: ''
        })
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => funFormulario(true)}
            >
                Nuevo Proyecto
            </button>
            {formulario &&
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        onChange={onChangeProyecto}
                        value={nombre}
                    />

                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Proyecto"
                    />
                </form>
            }
        </Fragment>
    )
}

export default NuevoProyecto
