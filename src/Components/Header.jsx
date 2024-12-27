
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import Menu from './Menu';
import Hamburgermenu from './Hamburgermenu';
//  import {} from '../assets';

const Header = () => {

  const navigate = useNavigate(false)
  const [token, setToken] = useState(false)
  const [dropdown, setDropDown] = useState("hidden")

  return (
    <header>
      <div className="header-col-1">
       <h3 className="name-polip"> <Link to={'/'} >Polip</Link> </h3>
       <Menu/>
      </div>


      <div className='header-col-2'>
        {
          token
          ? <div className='profile-icon-con'>
            < img style={{height:'30px', width:'30px', borderRadius: '50%'}} className='profile-img' src='../Static/profile-img-Ade-o.png' alt="" />
            <div 
              onMouseOver={ ()=> setDropDown('profile-dropdown')}
              onMouseOut={()=> setDropDown('hidden')}
            className='arrow-down-con'>
            <img 
             style={{height:'20px', marginTop:'5px', width:'20px', color:'white', borderRadius: '50%'}} 
             className='profile-arrow' src='../Static/caret-down-fill.svg' alt="" 
             onMouseOver={ ()=> setDropDown('profile-dropdown')}
             onMouseOut={()=> setDropDown('hidden')}
             />
             <div className={dropdown}>
               <p onClick={() => navigate('my-profile')}  className='profile-btn'>My Profile</p>
               <p onClick={() => navigate('rewards')} className='profile-btn'>My Rewards</p>
               <p onClick={() => navigate('my-posts')} className='profile-btn'>My Posts</p>
               <p onClick={() => setToken(false)}className='logout-btn'>Logout</p>
             </div>
            </div>
 
          </div>

          : <div className='login-con'> 
              <button className="login-btn">Login</button>
               <button className="see-project-btn">See Projects <span className='see-project-arrow'> &#8594;</span></button>
            </div>
        }
      </div>
      <Hamburgermenu/>
    </header> 
  )
}

export default Header;