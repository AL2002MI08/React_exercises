import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Journal } from '../components/Journal'
import data from '../../data'
import { Header } from '../components/Header'
import { Meme } from '../components/Meme'

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Meme />
    {/* <Journal/> */}
    </>
  )
//   function handleClick() {
//     console.log("I was clicked!")
// }
// function handleMouse(){
//   console.log('mouseover')
// }

/**
 * Add our new function to the button
 */
 /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
// return (
//     <div className="container">
//         <img src="https://picsum.photos/640/360" onMouseOver={handleMouse}/>
//         <button onClick={handleClick}>Click me</button>
//     </div>
// )
}

export default App
