import {
    AUTHENTICATION_AUTH,
    TOKEN_AUTHENTICATION_AUTH,
    USER_INFO_AUTH,
    LOGIN_SUCCESS_AUTH
} from '../../types'

export default (state, action) => {
    switch(action.type){
        case AUTHENTICATION_AUTH:
            return {
                ...state,
                authentication:action.payload
            }
        case TOKEN_AUTHENTICATION_AUTH:
            return {
                ...state,
                tokenAuthentication:action.payload
            }
        case USER_INFO_AUTH:
            return {
                ...state,
                userInfo:action.payload
            }
        case LOGIN_SUCCESS_AUTH:
            return {
                ...state,
                authentication:action.payload.authentication,
                tokenAuthentication:action.payload.tokenAuthentication,
                cargando:false
            }
        default:
            return state
    }
}