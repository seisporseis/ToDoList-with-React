import { useState } from "react";

const FormTodo = () => {
    const [description, setDescription] = useState("")
	return(
        <form action="">
            <div className="todo-list">
                <div className="file-input"> 
                    <input type="text" className="text" value={description} onChange={e=> setDescription} />
                    <button className="btn-task" disabled={description ? "" : "disable"}>Add</button>
                </div> 
            </div>
           
           
        </form>
        
    )
}

export default FormTodo;