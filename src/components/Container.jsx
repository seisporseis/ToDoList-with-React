import FormTodo from "./FormTodo";
import TaskList from "./TaskList";
import './Container.css'
import { useState } from "react";


const Container = () => {
  
  const [list, setList] = useState([]); //creamos un array con los items
  const handleAddItem = addItem => {
    setList([...list, addItem]); //esto lo cambiamos por la linea 12
    // setList(list.push(addItem));
  };
    return (
      <div>

        <FormTodo handleAddItem={handleAddItem}/>
        <TaskList list={list} setList={setList}/>
        
      </div>
    )
  }
  
  export default Container