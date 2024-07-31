import { useEffect, useState } from "react";
import FormToDo from "./components/FormToDo";
import TodoList from "./components/ToDoList";
export default function App() {
 
  const [addToDos, setAddToDos] = useState(()=>{
    const localVal = localStorage.getItem("Item")
    if(localVal === null) return []
    return JSON.parse(localVal)
  });
  function addtodo(title){
    setAddToDos((currentToDo) => [
      ...currentToDo,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }
  useEffect(()=> {
    return localStorage.setItem("Item",JSON.stringify(addToDos))
  },[addToDos])
  function toggle(id, completed){
    setAddToDos(currentToDos => {
      return currentToDos.map(todo =>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id){
    setAddToDos(currentToDos => currentToDos.filter(todo => todo.id !== id))
  }
  return (
    <div className="mx-auto w-1/3">
     <FormToDo addItem={addtodo}/>
      <h2 className="text-xl font-semibold py-3">Todo List</h2>
    <TodoList addToDos={addToDos} toggle={toggle} deleteTodo={deleteTodo}/>
    </div>
  );
}