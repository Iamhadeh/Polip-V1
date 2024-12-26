
import React, { useState } from 'react'

const Statistics = () => {
    const [number, setNumber] = useState('Not available')
  return (
    <div className='about-statistic-con'>
        <h2 className='about-headings-h2'>Statistics</h2>
        <div onClick={()=> setNumber('please check back')} className="statistic-data-con">
            <div className="numbers-data-box">
                <h3>Number of Users</h3>
                <img src="./public/static/images/people-fill.svg" alt="" />
                <p style={{fontSize:"10px"}}>{number}</p>
            </div>
            <div className="numbers-data-box">
                <h3>Number of Visitors Last Year</h3>
                <img src="./public/static/images/bar-chart-fill.svg" alt="" />
                <p style={{fontSize:"10px"}}>{number}</p>
            </div>
            <div className="numbers-data-box">
                <h3>Numbers Of Winners</h3>
                <img style={{height:"50px"}} src="./public/static/images/award-fill.svg" alt="" />
                <p style={{fontSize:"10px"}}>{number}</p>
            </div>
            <div className="numbers-data-box">
                <h3>Number of Developed Projects</h3>
                <img src="./public/static/images/pc-display-horizontal.svg" alt="" />
                <p style={{fontSize:"10px"}} >{number}</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics;