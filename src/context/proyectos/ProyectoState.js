import React,{useReducer} from 'react';

//Context
import ProyectoContext from './ProyectoContext'
import ProyectoReducer from './ProyectoReducer'

//config
import ClienteAxios from '../../config/axios';

import {
    FORMULARIO_PROYECTO,
    LISTA_PROYECTOS,
    SELECCIONAR_PROYECTO
} from '../../types'

const ProyectoState = props => {
    const initialState = {
        formulario: false,
        proyectos: [],
        proyecto: null,
    }

    const [state, dispatch] = useReducer(ProyectoReducer,initialState)

    const funFormulario = (bool) => {
        dispatch({
            type:FORMULARIO_PROYECTO,
            payload:bool
        })
    }

    const getListaProyectos = async () => {
        try {
            let res = await ClienteAxios.get("/api/proyecto");

            if(res.status === 200){
                dispatch({
                    type:LISTA_PROYECTOS,
                    payload:res.data.proyectos
                })
            }

        } catch (error) {
            
        }
    }

    const crearProyecto = async (nombre) => {
        try {
            let res = await ClienteAxios.post("/api/proyecto",{nombre});

            if(res.status === 200){
                getListaProyectos();
                funFormulario(false);
            }
        } catch (error) {
            
        }
    }

    const funSeleccionarProyecto = (proyecto) => {
        dispatch({
            type:SELECCIONAR_PROYECTO,
            payload:proyecto
        })
    }

    const funEliminarProyecto = async (proyectoId) => {
        try {

            console.log(proyectoId);

            let res = await ClienteAxios.delete('/api/proyecto',{
                data:{proyectoId}
            });

            if(res.status === 200){
                getListaProyectos()
                funSeleccionarProyecto(null)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProyectoContext.Provider
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                proyecto: state.proyecto,
                funFormulario,
                getListaProyectos,
                crearProyecto,
                funSeleccionarProyecto,
                funEliminarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState