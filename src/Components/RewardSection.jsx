

import React, { useState } from 'react'

const RewardSection = () => {

  const [value, setValue] = useState(1000)
  const [value2, setValue2] = useState(200)

   function handleClick () {
    return (
      setValue(value === 1000000 ? 1000 : value * 10),
      setValue2(value2 === 200000 ? 200: value2 * 10)
    )
  }


  return (
    <div className='reward-section'>
      <div className="reward-section-col-1">
         <h2 className="heading-6"> How Rewards Work</h2>
         <p>The goal is to build something that could help people in their daily lives...</p>
         <p>You could build the next multimillion dollar app or a plugin that makes some people work faster and easier. You can start all of that here.</p>
         <p>But you can get rewarded while you're just starting.</p>
          <ul className='reward-bullet-point'>
            <li> <span> <img src="../static/images/icons8-checkmark-24.png" alt="" /> </span> Monthly Competitions</li>
            <li> <span><img src="../static/images/icons8-checkmark-24.png" alt="" /></span> Marketing Opportunities for your products</li>
            <li> <span><img src="../static/images/icons8-checkmark-24.png" alt="" /></span> Earns Polip Coins. Use it to access VIP features</li>
            <li> <span><img src="../static/images/icons8-checkmark-24.png" alt="" /></span> Free consultation with our alumni and board of committees</li>
          </ul>
      </div>
      <div className="reward-section-col-2">
        <button className='see-reward-btn' onClick={handleClick}>See Rewards</button>
         <p className='p-1' >The number of Active Members We currently have <input value={value} type="text" /></p>
         <p>We reward monthly winners with  <input value= {"$" + value2} type="text" /></p>
          <div className='reward-terms-box'>
            <p className='reward-terms'>More information when you <span style={{color:"orange", fontSize:"1.2rem", cursor:"pointer"}}>sign up</span></p>
          </div>
      </div> 
    </div>
  )
}

export default RewardSection