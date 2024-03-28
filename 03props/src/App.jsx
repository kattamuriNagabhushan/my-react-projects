import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='text-center bg-yellow-400'>

        <h1 className='text-white bg-black'>Props in React</h1>

        <Card name = 'naga' age={22} />
        <Card name = 'reddy' age={27} />

    </div>
  )
}

export default App
