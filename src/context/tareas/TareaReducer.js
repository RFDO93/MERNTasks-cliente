import {
    LISTA_TAREAS,
    EDITANDO_TAREAS
} from '../../types';

export default (state, action) => {
    switch(action.type){
        case LISTA_TAREAS:
            return {
                ...state,
                tareas:action.payload,
            }
        case EDITANDO_TAREAS:
            return {
                ...state,
                editarTarea:action.payload
            }
        default:
            return state;
    }
}