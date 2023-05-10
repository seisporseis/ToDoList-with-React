import { useState } from "react";

//esto es un componente
const FormTodo = (props) => {
    const [description, setDescription] = useState("");//agregaria un useState, con su descripción
    const { handleAddItem } = props;//añade el item a la lista
    const handleSubmit = e => { //este es el manejador del submit, cuando pulsemos el botón pasará lo que hay dentro del manejador
        e.preventDefault();//evita que la página se actualice al pulsar el botón submit
        handleAddItem ({
            done: false, //por defecto tiene valor false y cuando se true,se marca como realizada
            id: (+new Date()).toString(),//marca unica temporal del item.
            description //la tarea que escribimos 
        });
        setDescription("");
    };
	return(
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input"> 
                    <input type="text" 
                    className="text" 
                    value={description} 
                    onChange={ e => setDescription(e.target.value)} />
                    <button className="btn-task" disabled={description ? "" : "disable"}>Add</button>
                </div> 
            </div>
        </form>  
    );
};

export default FormTodo;