import React from 'react'
import AboutUsSection from './AboutUsSection'
import BODSection from './BODSection'
import MissionStatement from './Mission-stat-sec'
import Career from './Career'
import Statistics from './Statistics'


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