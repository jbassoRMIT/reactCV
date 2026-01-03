//Create a delete ToDo button that can be passed into each table row
export default function DeleteToDo({removeToDo,index}){
    //
    return(
        <button onClick={()=>{removeToDo(index)}}>Delete</button>
    )
} 