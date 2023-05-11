

const Checkbox = props => {
	const {
		onChange,
		data: { id, description, done}
	} = props;
	
	//return <div>Checkbox!</div>;
	return (
		
		<>{/*librería que agrupa elementos  */}
		
			<label className="todo-new-item">
				<input 
				className ="todo-state"
				name={id} type ="checkbox"
				defaultChecked={done}
				onChange={onChange}
				/>
				<div className="todo__text">{description}</div>
			</label>
			
		</>
	);
};

export default Checkbox;