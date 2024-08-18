import React from 'react'

const ToDo = ({task}) => {
    // console.log(task)
  return (
    <div className='bg-red-800'>
      <p>{task.task}</p>
    </div>
  )
}

export default ToDo
