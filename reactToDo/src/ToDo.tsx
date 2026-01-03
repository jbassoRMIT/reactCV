//Writing a component that represents a single todo as a class,give each a unique id 
class ToDo{
    constructor(id,task,dueDate,priority){
        this.id=id,
        this.task=task,
        this.dueDate=dueDate,
        this.priority=priority
    }
}

export {ToDo};