import React from 'react'
import TodoAdd from './TodoAdd'
import ToDo from './ToDo'
const TodoDoList = () => {
  const [val, setVal] = React.useState([])
  const addtodo = todo => {
    setVal([
      ...val,
      { id: crypto.randomUUID(), task:todo, completed: false },
    ])
    // console.log(val)
  }
  return (
    <div>
      <TodoAdd addtodo={addtodo}/>
      {val.map((v,i)=>{
       <ToDo task={v} key={i}/> 
      })}
      
    </div>
  )
}

export default TodoDoList

