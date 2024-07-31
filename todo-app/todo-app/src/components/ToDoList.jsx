import { MdDelete } from "react-icons/md";
import {PropTypes} from 'prop-types'

export default function TodoList({addToDos, toggle, deleteTodo}){
   return(
    <ul>
        {addToDos.length === 0 && "No todos"}
        {addToDos.map((addToDo) => {
          return (
            <li key={addToDo.id} className="flex justify-between py-2">
              <label htmlFor="check">
                <input type="checkbox" checked={addToDo.completed} onChange={e => toggle(addToDo.id, e.target.checked)}/>
                {addToDo.title}
              </label>
              <button className="hover:border hover:rounded-full hover:bg-gray-400 p-2" onClick={()=> deleteTodo(addToDo.id)}>
                <MdDelete />
              </button>
            </li>
          );
        })}
        <hr />
      </ul>
   ) 
}

TodoList.propTypes ={
    addToDos: PropTypes.array,
    toggle: PropTypes.func,
    deleteTodo: PropTypes.func,


}