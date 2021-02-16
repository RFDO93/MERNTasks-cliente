import React,{useContext,useState,useEffect} from 'react';

//context
import TareaContext from '../../context/tareas/TareaContext';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const FormTareas = () => {

    const [nombreTarea,setNombreTarea] = useState('');

    const {editarTarea,funNuevaTarea,funEditarTarea} = useContext(TareaContext);
    const {proyecto} = useContext(ProyectoContext);

    useEffect(() => {
        if(editarTarea){
            setNombreTarea(editarTarea.nombre);
        }
    },[editarTarea])

    const submitTarea = e => {

        e.preventDefault();

        if(!nombreTarea) {
            return
        }

        if(editarTarea){
            funEditarTarea({...editarTarea,...{nombre:nombreTarea}});
        }else{
            funNuevaTarea(nombreTarea,proyecto._id);
        }

        setNombreTarea('')
    }

    return (
        <div className="formulario">
            <form 
                onSubmit={submitTarea}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombreTarea}
                        onChange={(text) => setNombreTarea(text.target.value)}
                    />
                </div>

                {editarTarea ? 
                    <div className="contenedor-input">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-submit btn-block"
                            value="Editar Tarea"
                        />
                    </div>
                :
                    <div className="contenedor-input">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-submit btn-block"
                            value="Agregar Tarea"
                        />
                    </div>
                }
                
            </form>
        </div>
    )
}

export default FormTareas
