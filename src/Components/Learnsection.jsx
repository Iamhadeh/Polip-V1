

import React from 'react'

const Learnsection = () => {
  return (
    <div className='learn-main-box'>
                {/* the image brackground */}
                <img className='img-background' src="../static/images/City-background.png" alt="" />
        {/* the transparent layer */}
        <div className="learn-container-1"></div>

        <div className="learn-container-2">
            <div className="learn-con-2-col-1">
                <video className="video-community-welcome" autoPlay loop muted>
                   <source src="../static/images/community.mp4" type="video/mp4"/>
                   Welcome
                </video> 
            </div>
            <div className="learn-con-2-col-2">
                 <h2 className='heading-5'>Looking for some ways to learn?</h2>
                <p>Learn from other world-changers who actively shares their story, skills and resources.</p>
                <p>Their story and work process should inspire you to work on something important. But if you need some resources, you can always find or ask.</p>
                <button className='see-community-btn'>See community <span className='see-community-arrow'> &#8594;</span> </button>
            </div>
        </div>
    </div>
  )
}

export default Learnsection