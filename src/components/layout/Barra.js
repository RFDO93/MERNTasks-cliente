import React from 'react'

const Barra = (props) => {

    let {userInfo} = props;

    if(!userInfo)
        return null 

    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>{userInfo.nombre}</span></p>

            <nav className="nav-principal">
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
    )
}

export default Barra
