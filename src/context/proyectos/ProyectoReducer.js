import {
    FORMULARIO_PROYECTO,
    LISTA_PROYECTOS,
    SELECCIONAR_PROYECTO
} from '../../types'

export default (state, action) => {
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario:action.payload
            }
        case LISTA_PROYECTOS:
            return {
                ...state,
                proyectos:action.payload
            }
        case SELECCIONAR_PROYECTO:
            return {
                ...state,
                proyecto:action.payload
            }
        default:
            return state
    }
}