import { useState } from "react";
import { MdDelete } from "react-icons/md";
export default function App() {
  const [todo, setTodo] = useState("");
  const [addToDos, setAddToDos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setAddToDos((currentToDo) => [
      ...currentToDo,
      { id: crypto.randomUUID, title: todo, completed: false },
    ]);
    setTodo("")
  }
  function toggle(id, completed){
    setAddToDos(currentToDos => {
      return currentToDos.map(todo =>{
        if(todo.id ===id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  return (
    <div className="mx-auto w-1/3">
      {/* <label htmlFor="item">New item</label> */}
      <form action="" onSubmit={handleSubmit}>
        <div className="border rounded-full border-red-200 py-3 px-6 mb-8">
          <input
            type="text"
            id="item"
            placeholder="Add todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="ring ring-black rounded-sm ml-64 px-1">+</button>
        </div>
      </form>
      <h2 className="text-xl font-semibold py-3">Todo List</h2>
      <ul>
        {addToDos.map((addToDo) => {
          return (
            <li key={addToDo.id} className="flex justify-between">
              <label htmlFor="check">
                <input type="checkbox" checked={addToDo.completed} onChange={e => toggle(addToDo.id, e.target.checked)}/>
                {addToDo.title}
              </label>
              <button>
                <MdDelete />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
