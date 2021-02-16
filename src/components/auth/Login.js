import React,{useState,useContext,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';

import AuthContext from '../../context/auth/AuthContext';

const Login = () => {

    const [usuario,setUsuario] = useState({
        email:'',
        password:''
    });

    const {authentication,funLogin} = useContext(AuthContext);

    let history = useHistory();

    useEffect(() => {
        if(authentication){
            history.push('/proyectos');
        }
    },[authentication]);

    const {email, password} = usuario

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if(email == '' && password == ''){
            return
        }

        funLogin(email, password)
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            onChange={onChange}
                            value={email}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            onChange={onChange}
                            value={password}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
                    </div>

                    <Link to={'/nueva-cuenta'} className="enlace-cuenta" >
                        Obtener Cuenta
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
