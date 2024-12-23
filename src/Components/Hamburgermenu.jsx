import { useState } from 'react';


import React from 'react'

const Hamburgermenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className= {isOpen ? 'isOpen' : ''} >
        <button className='mainNavBtn' onClick={() => setIsOpen(!isOpen)}>
          {/* add an SVG or icon for the hamburger menu */}
          Menu
        </button>
        {isOpen && (
          <> 
          <div className="hamCon">
              <li className='menu-btn'>About</li>
               <li className='menu-btn'>Projects</li>
              <li className='menu-btn'>Resources</li>
              <li className='menu-btn'>Ideas</li>
              <li className='menu-btn'>Contribute</li>
              <li className='menu-btn'>Alumni</li>
              <button className='see-project-btn-1'> See Projects <span className='see-project-arrow'> &#8594;</span> </button>
          </div>
          </>
        )}
      </nav>
    );
  }


export default Hamburgermenu