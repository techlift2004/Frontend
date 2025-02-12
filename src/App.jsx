import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className='grid place-items-center space-y-10'>
      <h2 className='text-green-700 font-extrabold text-[40px] '>TECHLIFT</h2>
      <p>WELCOME TO TECHLIFT WE ARE COOKING!!!</p>
      <button className='text-green-700'>Know More About US</button>
      </div></>
  )
}

export default App
