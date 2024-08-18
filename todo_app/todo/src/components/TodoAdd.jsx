import React , {useState} from 'react'

const TodoAdd = ({addtodo}) => {
  const [todoAdd, settodoAdd] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault()
    addtodo(todoAdd)
    settodoAdd("")
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="flex  py-7">
        <input type="text" className='ring ring-black' value={todoAdd} onChange={(e) => settodoAdd(e.target.value)}/>
        <button className="border rounded-fullx px-2">Add task</button>
      </form>
    </div>
  )
}

export default TodoAdd
