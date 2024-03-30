import React from 'react'
import Navbar from '../Navbar'

function Dashboard() {
  return (
    <div>

        <div>
            <Navbar/>
        </div>

        <div>

            <h1 className='font-bold text-3xl'>Dashboard</h1>
            <p>This is about React Router</p>

        </div>
        
    </div>
  )
}

export default Dashboard