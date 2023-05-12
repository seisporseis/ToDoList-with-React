import { useState } from "react";


const Checkbox = props => {
	// console.log(props)
	const {
		onChange,
		data: { id, description, done }
	} = props;

	const idValue = props.data.id;
	
	const { list, setList } = props;
	const [todoEdit, setTodoEdit] = useState(null)
	const [editingText, setEditingText] = useState(todoEdit === idValue ? "" : description);

	

	const onClickBorrarItem = e => {
		const borrarItem = list.filter(item => item.id != idValue)
		setList(borrarItem);
		localStorage.setItem('items', JSON.stringify(borrarItem));
	}

	function editTodo(idValue) {
		const updatedTodos = [...list].map((list) => {
			if (list.id == idValue) {
				list.description = editingText
			}
			return list
		})
		setList(updatedTodos)
		setTodoEdit(null)
		setEditingText("")

		localStorage.setItem('items', JSON.stringify(updatedTodos));
	}

	return (

		<>{/*librería que agrupa elementos  */}

			<label className="todo new-item">
				<input
					className="todo__state"
					name={id} type="checkbox"
					defaultChecked={done}
					onChange={onChange}
				/>
				{todoEdit == idValue ?
					(<input className="input-editar"
						type="text"
						onChange={(e) => setEditingText(e.target.value)}
						value={editingText}
					/>)
					:
					(<div className={`todo__text ${done ? "done" : ""}`}>{description}</div>)}

				<button className="btn-borrar-item" 
				onClick={onClickBorrarItem}>
				<img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/ffffff/trash--v1.png" alt="trash--v1"/>
				</button>

				{todoEdit == idValue ?
					(<button className="btn-enviar-editar-item"
						onClick={() =>
						editTodo(idValue)}>
							<img width="20" height="20" src="https://img.icons8.com/ios-filled/50/ffffff/update-left-rotation.png" alt="update-left-rotation"/>
						</button>)
					:
					(<button  className="btn-editar-item" onClick={() =>
						setTodoEdit(idValue)}>
						<img width="20" height="20" src="https://img.icons8.com/ios/50/ffffff/edit--v1.png" alt="edit--v1"/>
					</button>
					)}

			</label>

		</>
	);
};

export default Checkbox;