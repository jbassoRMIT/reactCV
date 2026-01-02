import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ToDo} from './ToDo'
import { toDoList } from './ToDoList'
import AddToDo from './AddToDo'
import './App.css'

function App() {
  const [inputs,setInputs]=useState({
    task:"",
    dueDate:"",
    priority:""
  })

  const handleChange=function(e){
    const name=e.target.name;
    const value=e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  //Create instance of ToDo to test import
  const firstTodo=new ToDo("Mow lawn","23/08/26","high");

  const handleSubmit=function(e){
    e.preventDefault();
    console.log("form submitted");
    console.log(inputs);
  }

  return (
    <div>
      <AddToDo 
        task={inputs.task} 
        dueDate={inputs.dueDate} 
        priority={inputs.priority} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      />
      <h3>Displaying ToDo:</h3>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Due date</th>
            <th>priority</th>
          </tr>
        </thead>
        <tbody>
          {toDoList.map((toDo)=>{
            return (
              <tr>
                <td>{toDo.task}</td>
                <td>{toDo.dueDate}</td>
                <td>{toDo.priority}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
      
    </div>
  )
}

export default App
