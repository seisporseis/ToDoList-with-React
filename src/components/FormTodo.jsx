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
            <div className="todo-input">
                <h1>Mis tareas</h1>
                <div className="file-input"> 
                    <input type="text" 
                    className="text" 
                    value={description} 
                    onChange={ e => setDescription(e.target.value)} />
<<<<<<< HEAD
                    <button className="btn-task" disabled={description ? "" : "disable"}><i class="fa-solid fa-paw" style="color: #000000;"></i>Add</button>
                    
=======
                    <button className="btn-task"  disabled={description ? "" : "disable"}><img width="30" height="30" src="https://img.icons8.com/ios-filled/30/0e1a40/add--v1.png" alt="add--v1"/></button>
                    <hr />
>>>>>>> develop
                </div> 
            </div>
        </form>  
    );
};

export default FormTodo;