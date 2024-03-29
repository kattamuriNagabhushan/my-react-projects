import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import About from './About'
import Dashboard  from './Dashboard'
import './App.css'

function App() {
  const [state, setCount] = useState('Home')

 
  

  //working of state in react
  return (

    
    <div>

        <div className='flex mt-5 mr-5 justify-end'>

        <div className='flex gap-10'>

          <button onClick={()=> setCount("Home")} className='underline border-b-1 border-black'>Home</button>
          <button onClick={()=> setCount("About")} className='underline border-b-1 border-black'>about</button>
          <button onClick={()=> setCount("Dashboard")} className='underline border-b-1 border-black'>dashboard</button>

        </div>
        </div>

        
        {state ==='Home' && <Home/>}
        {state ==='About' && <About/>}
        {state ==='Dashboard' && <Dashboard/>}
            
        

    </div>

    

    
  )
}

export default App
