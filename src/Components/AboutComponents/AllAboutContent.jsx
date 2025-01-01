import React from 'react'
import AboutUsSection from './AboutUsSection'
import BODSection from './BODSection'
import MissionStatement from './mission-stat-sec'
import Career from './Career'
import Statistics from './statistics'


const AllAboutContent = () => {
  return (
    <div className='background-about'>
    <AboutUsSection/> 
    <MissionStatement/>
    <Statistics/>
    <BODSection/>
    <Career/>
  </div>
  )
}

export default AllAboutContent;