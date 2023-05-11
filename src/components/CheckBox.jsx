

const Checkbox = props => {
	// console.log(props)
	const {
		onChange,
		data: { id, description, done }
	} = props;
	
	const { list, setList } = props;
		console.log(list)
	
	const onClickBorrarItem = e => {
		const borrarItem =  list.filter(item =>item.id != props.data.id) 
		setList(borrarItem);
		localStorage.setItem('items', JSON.stringify(borrarItem));
	}
		
	// const onClickEditarItem = e => {
		
	// }   
    
	
	return (
		
		<>{/*librería que agrupa elementos  */}
		
			<label className="todo new-item">
			<input 
			className ="todo__state"
			name={id} type ="checkbox"
			defaultChecked={done}
			onChange={onChange}
			/>
			<div className="todo__text">{description}</div> 
			<button className="btn-borrar-item" onClick={onClickBorrarItem}>borrar</button>
			 {/* <button className="btn-editar-item" onClick={onClickEditarItem}>editar</button> */}
			</label>
			
		</>
	);
};

export default Checkbox;