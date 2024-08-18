// import TodoAdd from "./components/TodoAdd"
import TodoDoList from "./components/TodoDoList"
import TodoRemove from "./components/TodoRemove"
// import { useState } from "react"

const App = () => {

  return (
    <div className="mx-auto w-80">
     <TodoDoList />
      
      <TodoRemove />
    </div>
  )
}
export default App