import React from 'react'
import {Link , NavLink} from 'react-router-dom'


function Navbar() {
  return (
    <div className='bg-slate-900 text-white py-4 mb-10'>
        <ul className='flex justify-center gap-10 '>
            <NavLink className={({ isActive }) =>
                      isActive ? " text-blue-500" : "text-gray-400 hover:text-white"
                        
                    } to="/"><li className='underline '>Home</li></NavLink>
            <NavLink className={({ isActive }) =>
                      isActive ? " text-blue-500" : "text-gray-400 hover:text-white"
                        
                    } to="/about"><li className='underline '>About</li></NavLink>
            <NavLink className={({ isActive }) =>
                      isActive ? " text-blue-500" : "text-gray-400 hover:text-white"
                        
                    } to="/dashboard"><li className='underline '>Dashboard</li></NavLink>
            
        </ul>
    </div>
  )
}

export default Navbar