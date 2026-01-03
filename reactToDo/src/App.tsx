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

  //Write  a function that takes date separate by - and reformats to /
  const dateFormatter=function(inputDate){
    const dateArray=inputDate.split("-");
    let day=dateArray[2];
    //Check if single of double digits and slice if necessary
    if(Number(day)<10){
      day=dateArray[2][1];
    }

    let month=dateArray[1];
    if(Number(month)<10){
      month=dateArray[1][1];
    }
    const year=dateArray[0].slice(2,4);

    const outputDate=`${day}/${month}/${year}`;
    return outputDate;
  }


  //need to use state to update toDoList whenever the form is sibmitted and a new todo is added
  const [toDos,setToDos]=useState(toDoList);

  const handleChange=function(e){
    const name=e.target.name;
    const value=e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  //Create instance of ToDo to test import
  const firstTodo=new ToDo("Mow lawn","23/08/26","high");


  //On submit the form should create a new isntance of toDo and add it to toDoList
  const handleSubmit=function(e){
    e.preventDefault();
    console.log("form submitted");
    console.log(inputs);

    const newToDo=new ToDo(inputs.task,dateFormatter(inputs.dueDate),inputs.priority);
    setToDos([...toDos,newToDo])
    console.log(toDos);
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
          {toDos.map((toDo)=>{
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
