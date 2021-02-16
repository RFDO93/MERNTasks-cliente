import React,{useContext,useEffect} from 'react'
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'
import FormTareas from '../tareas/FormTareas'
import ListadoTareas from '../tareas/ListadoTareas'

//context
import AuthContext from '../../context/auth/AuthContext';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const Proyectos = () => {

    const {
        userInfo,
        tokenAuthentication,
        getUserInfo
    } = useContext(AuthContext);

    const {
        proyecto,
        getListaProyectos,
    } = useContext(ProyectoContext)

    useEffect(() => {
        if(tokenAuthentication) {
            getUserInfo();
            getListaProyectos();
        }
    }, [tokenAuthentication])

    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra userInfo={userInfo} />
                <main>
                    {proyecto ? 
                        <>
                            <FormTareas />
                            <div className="contenedor-tareas">
                                <ListadoTareas />
                            </div>
                        </>
                        :
                        <h1 className="mt-5">Seleccione un proyecto</h1>
                    }
                </main>
            </div>
        </div>
    )
}

export default Proyectos
