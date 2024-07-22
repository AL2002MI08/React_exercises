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
    <Journal/>
    </>
  )
}

export default App
