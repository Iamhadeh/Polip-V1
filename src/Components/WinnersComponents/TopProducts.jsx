import { TopProductsList } from '../../assets/assets'

import React from 'react'

const TopProducts = () => {
  return (
    <div className='top-pro-con'>
        {TopProductsList.map((item,index)=>( 
            <div key={index} className='each-pro'> 
            <div className="each-pro-col-1">
                 <img style={{height:"40px", width:"40px"}} src={item.image} alt="" />
            </div>
         
            <div className="each-pro-col-1">
                <div style={{height:"40px", width:"40px", border:"1px solid orange"}}>
                {/* <img style={{height:"40px", width:"40px"}} src={item.image} alt="" /> */}
                </div>
             </div>
             <div className='each-pro-col-2'>
                 <h2>Name</h2>
                 <ul className='pro-det'>
                     <li>Category</li>
                     <li>Category</li>
                    <li>Category</li>
                </ul>
             </div>
            </div>
            ))}
        

        <div className="prod-info-vote">
            <p></p>
        </div>
    </div>
  )
}

export default TopProducts