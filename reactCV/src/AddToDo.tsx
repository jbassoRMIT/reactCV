//Write  a component with a form that allow user to add new todo
export default function AddToDo({task,dueDate,priority,handleChange,handleSubmit}){
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h3>Add ToDo:</h3>
                <label htmlFor="task">Task:</label>
                <input id="task" type="text" name="task" value={task} onChange={handleChange}/><br />
                <label htmlFor="dueDate">Due date:</label>
                <input id="dueDate" type="date" value={dueDate} name="dueDate" onChange={handleChange}/><br />
                <label htmlFor="priority">Priority:</label>
                <input id="priority" type="text" value={priority} name="priority" onChange={handleChange} /><br />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}