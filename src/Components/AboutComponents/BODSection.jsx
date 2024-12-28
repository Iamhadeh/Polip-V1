

import React from 'react'
import { boardOfDirectors } from '../../assets/assets';


const BODSection = () => {
  return (
    <div className='bod-con'>
        <h2 className='about-headings-h2'>Board of Directors</h2>
        <div className="bod-second-con">
            {/* <div className="bod">
                <div className="bod-img-con">
                    <img style={{height:"100px", width:"100px", borderRadius:"50%"}} src="./public/static/images/profile-img-Ade-o.png" alt="" />
                </div>
                <p>Adekusibe Ogunmokun</p>
                <p>Fullstack Dev, Creator Polip</p>
            </div> */}
            {boardOfDirectors.map((item,index)=>(
            <div key={index} className="bod">
                <div className="bod-img-con">
                    <img style={{height:"100px", width:"100px", borderRadius:"50%"}} src={item.image} alt="" />
                </div>
                <p style={{borderBottom:"1px solid orange", paddingBottom:"5px"}}>{item.name}</p>
                <p style={{color:"orange", fontSize:"10px", paddingTop:"2px"}}>{item.position}</p>
            </div>
             ))} 
        </div>
    </div>
  )
}

export default BODSection;