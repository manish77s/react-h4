import React from 'react'
import { Link } from 'react-router-dom'
import "./link.css"


function LinkComp() {
  return (
 
  <div className='Link'>
        <Link  to='/' style={{textDecoration:"none",color:'white'}}>Home</Link>
        <Link  to='/student'style={{ textDecoration:"none",color:"white"}} >Student</Link>
        <Link  to='/contact'style={{ textDecoration:"none",color:"white"}} >Contact</Link>
          
 </div>
    
  )
}

export default LinkComp;


