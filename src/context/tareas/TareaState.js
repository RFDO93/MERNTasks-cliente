import React,{useReducer} from 'react';

//Context
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';

//Cliente Axios
import ClienteAxios from '../../config/axios';

//Type
import {
    LISTA_TAREAS,
    EDITANDO_TAREAS
} from '../../types'

const TareaState = (props) => {

    const initialState = {
        tareas:[],
        editarTarea:null,
    }

    const [state,dispatch] = useReducer(TareaReducer,initialState);

    const funGetTareas = async (idProyecto) => {
        try {
            
           let res = await ClienteAxios.get(`api/tarea/${idProyecto}`);

            if(res.status === 200){
                dispatch({
                    type:LISTA_TAREAS,
                    payload:res.data.tarea
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    const funNuevaTarea = async (nombre,proyecto) => {
        try {
            let res = await ClienteAxios.post('/api/tarea',{nombre,proyecto});

            if(res.status === 200) {
                funGetTareas(proyecto)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const funEliminarTarea = async (idTarea,proyecto) => {
        try {
            let res = await ClienteAxios.delete('/api/tarea',{
                data:{
                    _id:idTarea
                }
            });

            if(res.status === 200) {
                funGetTareas(proyecto)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const funEditarTarea = async (tarea) => {
        try {
            funSelectTarea(null)

            let res = await ClienteAxios.put("/api/tarea",tarea)

            if(res.status === 200) {
                funGetTareas(tarea.proyecto)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const funSelectTarea = (tarea) => {
        dispatch({
            type:EDITANDO_TAREAS,
            payload:tarea,
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas:state.tareas,
                editarTarea:state.editarTarea,
                funGetTareas,
                funNuevaTarea,
                funEliminarTarea,
                funEditarTarea,
                funSelectTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState
