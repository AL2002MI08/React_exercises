import { useState } from "react";
import {PropTypes} from "prop-types"
export default function FormToDo({addItem}){
    const [todo, setTodo] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        addItem(todo)
        setTodo("")
      }
    return (
        <form action="" onSubmit={handleSubmit} className="">
        <div className="border rounded-full border-red-200 py-3 px-6 mb-8 flex items-center justify-between">
          <input className="w-full outline-none py-2"
            type="text"
            id="item"
            placeholder="Add todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
           required/>
          <button className="border rounded full bg-green-400 px-2">+</button>
        </div>
      </form>
    )
}
FormToDo.propTypes ={
    addItem: PropTypes.func
}