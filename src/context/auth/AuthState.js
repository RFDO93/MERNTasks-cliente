import React,{useReducer} from 'react';

//Config
import ClienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

//Context
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import {
    LOGIN_SUCCESS_AUTH,
    USER_INFO_AUTH
} from '../../types'


const AuthState = (props) => {

    const initialState = {
        authentication: false,
        tokenAuthentication: null,
        userInfo:null,
        cargando:true,
    }

    const [state,dispatch] = useReducer(AuthReducer,initialState);

    const funLogin = async (email,password) => {
        try {
            let res = await ClienteAxios.post("/api/auth",{email,password});
            
            if(res.status === 200){

                localStorage.setItem('token',res.data.token);
                tokenAuth(res.data.token)

                dispatch({
                    type:LOGIN_SUCCESS_AUTH,
                    payload:{
                        authentication: true,
                        tokenAuthentication: res.data.token,
                    },
                });
            }

        } catch (error) {
            console.log(error);
        }
        
    }

    const funInit = async () => {
        let token = await localStorage.getItem('token');

        if(token !== null) {
            tokenAuth(token)

            let res = await ClienteAxios.get("/api/usuario");

            if(res.status === 200){
                dispatch({
                    type:LOGIN_SUCCESS_AUTH,
                    payload:{
                        authentication: true,
                        tokenAuthentication: token,
                    },
                });
            }
            
        }
    }

    const getUserInfo = async () => {
        try {
            
            let res = await ClienteAxios.get("/api/usuario");

            if(res.status === 200){
                dispatch({
                    type:USER_INFO_AUTH,
                    payload:res.data.usuario,
                });
            }

        } catch (error) {
            
            if(error.response) {

                if(error.response.status === 401){
                    dispatch({
                        type:LOGIN_SUCCESS_AUTH,
                        payload:{
                            authentication: false,
                            tokenAuthentication: null,
                        },
                    }); 
                }
            }
            
        }
    }
 
    return (
        <AuthContext.Provider
            value={{
                authentication:state.authentication,
                tokenAuthentication:state.tokenAuthentication,
                userInfo:state.userInfo,
                cargando:state.cargando,
                funLogin,
                funInit,
                getUserInfo
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
