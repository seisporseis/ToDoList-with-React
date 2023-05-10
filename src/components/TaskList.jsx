import Checkbox from "./CheckBox";

const TaskList = (props) => {
    const{ list, setList } = props; 
    const onChangeStatus = e => {
        console.log(e)
        const { name, checked } = e.target;
        const updateList = list.map(item => ({...item, 
        done: item.id === name ? checked : item.done
        
    }))
    setList(updateList);
    };
    const checkB = list.map (item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus}/>
    ));
	return (
        <div className="todo-list">
            {list.length ? checkB : "no hay tareas"}
            {/* {list.length ? (
                <p>
                    <button className="check" onClick={onClickRemoveItem}>
                        Delete all done
                    </button> 
                </p>
                ) : null} */}
        </div> 
    );
};

export default TaskList;