
import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <ul className="menu-btns">
      <NavLink to={'about'}>
        <li className='menu-btn'>About</li>
      </NavLink>
      <li className='menu-btn'>Winners</li>
      <li className='menu-btn'>Resources</li>
       <li className='menu-btn'>Ideas</li>
       <li className='menu-btn'>Community</li>
       <li className='menu-btn'>Alumni</li>
 </ul>
  )
}

export default Menu