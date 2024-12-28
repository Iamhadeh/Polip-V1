

import React from 'react'

const AboutUsSection = () => {
  return (
    <div className='about-us-sec-con'>
        <div className="col-1-about-us-sec">
            <img className="about-us-main-img" src="../static/images/About-Polip-IMG.png" alt="" />
        </div>
        <div className="col-2-about-us-sec">
          <div className="col-2-about-us-sec-bg">
            <h2>About Polip</h2>
            <p>Polip is a community-driven platform for people with skills to meet, share ideas and start building projects.</p>

            <p>There are lots of talented people out there looking and waiting for an opportunity to start working. They are looking for jobs and waiting for someone to take a chance on them. Polip opens an oppportunity for them to meet people like them who have similar dreams. They can start working together on real-life projects, thanks to members who add some real-world problems. Our community members constantly share ideas they wish or want people to build. Polip reward the ideas that become projects. We also give you all the support and tools to turn the ideas into something big in the long run... Our board of committee is made of experts in different field, but most of them are senior developers, angel investors with impressive portfolios, and researchers.</p>

            <p>Polip gives people the chance to build something <span style={{color:"orange", fontWeight:"bolder"}} >useful</span> instead of waiting.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUsSection;