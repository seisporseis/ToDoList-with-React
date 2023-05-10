import FormTodo from "./FormTodo";
import TaskList from "./Tasklist";
import './Container.css'


const Container = () => {
    return (
      <div className="container-todo-app">
        <FormTodo/>
        <TaskList/>
        Container!
      </div>
    )
  }
  
  export default Container