import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
     
      
      <div className='h-screen w-full ' style={{backgroundColor : color }}>

        <h1 className='bg-black text-center text-yellow-500'>BG CHANGER</h1>

        <div className='flex justify-center'>

          <div className='fixed flex flex-wrap justify-center bottom-12'>

            <div className='flex flex-wrap justify-center rounded-lg p-2 bg-white gap-4'>

              <button onClick={()=>{setColor('red')}} className='bg-red-500 rounded-lg px-3 mx-3'>red </button>
              <button onClick={()=>{setColor('green')}} className='bg-green-500 rounded-lg px-3 mx-3'> green</button>
              <button onClick={()=>{setColor('yellow')}} className='bg-yellow-500 rounded-lg px-3 mx-3'> yellow</button>

            </div>

          </div>

        </div>

        
     </div>
  )
}

export default App
