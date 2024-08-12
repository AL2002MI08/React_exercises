import React from "react";
import MockData from './MockData'
export default function Search(){
    const[searchTerm, setSearchTerm] = React.useState("")
    return (
    <div>
    <input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)}/>
    {MockData.filter(val =>{
      if(searchTerm === "") return val
      else if(val.author.toLowerCase().includes(searchTerm.toLowerCase())) return val
    }).map((el, key) => {
      return (
        <div key={key}>
          <p>{el.author}</p>
        </div>
      );
    })}
    
  </div>
    )
}