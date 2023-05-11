import Checkbox from "./CheckBox";

const TaskList = (props) => {
    const{ list, setList } = props; 
    const onChangeStatus = e => { //manejador de eventos para onChange
        const { name, checked } = e.target; //recibe los datos de checkBox
        const updateList = list.map(item => ({...item, //recorre  con map y actualiza los datos
        done: item.id === name ? checked : item.done
    }))
    setList(updateList);
    };
    const checkB = list.map (item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus}/> //recorre list con map para generar n componentes en checkBox
    ));
	return (
        <div className="todo-list">
            {list.length ? checkB : "no hay tareas"} {/* si la lista está vacia muestra el mensaje "no hay tareas"*/} 
            {/* {list.length ? (
                <p>
                    <button className="check"></button> 
                </p>
                ) : null} */}
        </div> 
    );
};

export default TaskList;