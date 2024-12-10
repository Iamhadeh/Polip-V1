
import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="header-col-1">
       <h3 className="name-polip"> <Link to={'/'} >Polip</Link> </h3>
       <ul className="menu-btns">
         <li className='menu-btn'>About</li>
         <li className='menu-btn'>Projects</li>
         <li className='menu-btn'>Resources</li>
         <li className='menu-btn'>Ideas</li>
         <li className='menu-btn'>Contribute</li>
         <li className='menu-btn'>Alumni</li>
      </ul>
      </div>

      <div className='header-col-2'>
        <button className="login-btn">Login</button>
        <button className="see-project-btn">See Projects <span className='see-project-arrow'> &#8594;</span></button>
      </div>
    </header> 
  )
}

export default Header;