


import WebsiteFeature from '/src/Components/Website-Feature'

import React from 'react'

const Main = () => {

  return (
    <div className="main-box"> 
      <h1 className='heading-1'>The community and reward platform for <br /> <span className='changing-text'>the future of tech </span> </h1>
      
      <div className="main-box-paragraph">
        <p>What do you do when you have ideas that can change the future of tech?</p>
         <p>Submit, build, collaborate with other world-changers and get rewarded.</p>
      </div>
      <button className='get-started-btn'>Get Started</button>
      <WebsiteFeature/>
    </div>
  )
}

export default Main