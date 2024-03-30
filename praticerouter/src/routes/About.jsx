import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>

        <div>
        <h1 className='font-bold text-3xl'>About</h1>
        <p>This is Nagabhushan.I am passionate about Web DeV</p>
        

        </div>  

        <Outlet/>
        
    </div>
  )
}

export default About