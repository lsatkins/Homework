import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <ul>
    
        <li><Link to='/'> Home Page</Link></li>
        <li><Link to='/list'> Shopping List</Link></li>
        <li><Link to='/address'> Address Book</Link></li>
        <li><Link to='/color'> Color Picker</Link></li>
    
    </ul>
  )
}

export default Navigation
