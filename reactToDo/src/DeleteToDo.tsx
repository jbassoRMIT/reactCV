//Create a delete ToDo button that can be passed into each table row
export default function DeleteToDo({removeToDo,id}){
    //
    return(
        <button onClick={()=>{removeToDo(id)}} >Delete</button>
    )
} 