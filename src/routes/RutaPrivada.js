import React,{useContext,useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

const RutaPrivada = ({component: Component, ...props}) => {

    const {authentication,cargando,funInit} = useContext(AuthContext);

    useEffect(() => {
      funInit();
    },[]);

    return (
        <Route {...props} render={ props => (!authentication && !cargando) ? (
                <Redirect to="/" />
            ) 
            : (
                <Component {...props} />
            )
        }>

        </Route>
    )
}

export default RutaPrivada
