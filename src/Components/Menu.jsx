
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {

  return (
    <ul className="menu-btns">
      <NavLink to={'about-polip'}>
        <li className='menu-btn'>About</li>
      </NavLink>
      <NavLink to={'winners'}>
        <li className='menu-btn'>Winners</li>
      
      </NavLink>
      <NavLink to={'resources'}>
        <li className='menu-btn'>Resources</li>
     
      </NavLink>
      <NavLink to={'ideas'}>
        <li className='menu-btn'>Ideas</li>
      </NavLink>
      <NavLink to={'community'}>
        <li className='menu-btn'>Commmunity</li>
      </NavLink>
      <NavLink to={'ideas-page'}>
        <li className='menu-btn'>Alumni</li>
      </NavLink>
 </ul>
  )
}

export default Menu