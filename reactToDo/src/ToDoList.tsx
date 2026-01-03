//An array that stores all ToDos
//fill with dummy values first to test it can be rendered
import { ToDo}from "./ToDo";
import { v4 as uuid } from "uuid";

const td1=new ToDo(uuid(),"mow lawn","25/1/26","low");
const td2=new ToDo(uuid(),"build lego","25/2/26","high");
const td3=new ToDo(uuid(),"cut hair","25/1/27","medium");
const td4=new ToDo(uuid(),"make dj set","1/1/26","high");

const toDoList=[
    td1,
    td2,
    td3,
    td4
]

export {toDoList};