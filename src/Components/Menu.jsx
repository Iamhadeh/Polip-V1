
import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <ul className="menu-btns">
      <NavLink to={'about-polip'}>
        <li className='menu-btn'>About</li>
        <hr/>
      </NavLink>
      <NavLink to={'winners'}>
        <li className='menu-btn'>Winners</li>
        <hr/>
      </NavLink>
      <NavLink to={'resources'}>
        <li className='menu-btn'>Resources</li>
        <hr/>
      </NavLink>
      <NavLink to={'ideas'}>
        <li className='menu-btn'>ideas</li>
        <hr/>
      </NavLink>
      <NavLink to={'community'}>
        <li className='menu-btn'>commmunity</li>
        <hr/>
      </NavLink>
      <NavLink to={'ideas-page'}>
        <li className='menu-btn'>Alumni</li>
        <hr/>
      </NavLink>
 </ul>
  )
}

export default Menu