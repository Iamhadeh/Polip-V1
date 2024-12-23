

import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-cta">
        <h2>Meet Professionals Who Are Building The Future</h2>
        <p>Your idea matters</p>
        <p>Share it.</p>
        <p>Your skills are good for a start.</p>
        <p>Build something</p>  
        <button className="see-community-btn">Join Us</button>
        <p className='sign-up-terms'>By joining us, you agree to receive emails from us about products, features, and promotions.</p>       
      </div>

      <div className='footer-col-2'>
        <div className='footer-col-2-first-col'>
          <ul className='footer-buttons'>
            <li>About Us</li>
            <li>Legal Terms</li>
            <li>Careers</li>
            <li>Community</li>
            <li>Case Studies</li>
            <li>Reward</li>
          </ul>
      </div>
        
        
      <div className="footer-col-2-social-media">

        <ul className='social-media-icons'>
                <li> <a href=""><img style={{height:"20px"}} src="https://img.icons8.com/?size=100&id=118491&format=png&color=000000" alt="" /></a></li>
                <li> <a href=""> <img style={{height:"20px"}} src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="" /> </a></li>
                <li> <a href=""> <img style={{height:"20px"}} src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="" /> </a></li>
                <li> <a href=""> <img style={{height:"20px"}} src="https://img.icons8.com/?size=100&id=11xHwSW974uy&format=png&color=000000" alt="" /> </a></li>
                <li> <a href=""> <img style={{height:"20px"}} src="https://img.icons8.com/?size=100&id=437&format=png&color=000000" alt="" /> </a></li>
                <li> <a href=""> <img style={{height:"20px"}} src="https://img.icons8.com/?size=100&id=37325&format=png&color=000000" alt="" /> </a></li>
            </ul>

          <div className='downloads-btn-con'> 
            <button className="app-store">App Store</button>
            <button className="play-store">Play Store</button>
          </div> 
        </div>
      </div>
        
    </footer>
  )
}

export default Footer