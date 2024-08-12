// import React from 'react'

// We have two lists of names, and we want to transfer every name in the first list to the second list and every two seconds we want to send one name, what would you add or change in these codes to make that happen?
import React, { useState, useEffect } from 'react';

function NameTransfer() {
  const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const [names, setNames] = useState(initialNames);
  const [newName,setNewNames] = useState([])
  const [id, setId] = useState(0)
// useEffect(()=> setNames(initialNames))

useEffect(()=>{
const addItem = setInterval(()=>{
  if(id < names.length) {
    setNewNames(()=>([...newName,names[id]]))
    setId(id+1)
  }
  if( names.length) clearInterval(addItem)
},1000)
if(!names.length) clearInterval(addItem)
},[newName])   
  
  return (
    <div>
      <h3>Original Names</h3>
      
      <ul  style={{backgroundColor:"red"}}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul  style={{backgroundColor:"green"}}>
        {newName.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameTransfer;

