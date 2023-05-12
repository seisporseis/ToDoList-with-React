import Checkbox from "./CheckBox";

const TaskList = (props) => {
    const { list, setList } = props;
    const onChangeStatus = e => {
        // console.log(e)
        const { name, checked } = e.target;
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done

        }))

    // const toDo = ({ todo }) => {
    // const itemClasses = todo.done ? "strike blur" : "";
    //     return (
    //     <div className={itemClasses}>
    //         {todo.description}
    //     </div>
    //     );
    // };
        const sortedDatacheck = [...updateList].sort((a, b) => {
            if (a.done && !b.done) return 1;
            if (!a.done && b.done) return -1;
            return a.description.localeCompare(b.description);
        });

        localStorage.setItem('items', JSON.stringify(sortedDatacheck));

        setList(sortedDatacheck);
    };

    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
        localStorage.setItem('items', JSON.stringify(updateList));
    };

    const checkB = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} list={list} setList={setList} />    
    ));
    return (
        <>
        <div className="todo-list">
            {list.length ? checkB : "No tienes tareas pendientes"} {/* si la lista está vacia muestra el mensaje "no hay tareas"*/}
            {list.length ? (
                <p>
                    <button className="check" onClick={onClickRemoveItem}>
                        Limpiar <br /> completadas
                    </button>
                    
                </p>
            ) : null}
        </div>
        </>
    );
};

export default TaskList;