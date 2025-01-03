
// import static from 'public/static/images'
import React from 'react'

const Mainwinner = () => {
  return (

    <div className='mainWinner-com'>
        <div className="col-1-winner-com">
            <img src="../static/images/" alt="" />
        </div>
        <div className="col-2-winner-com">
            <h2>Name</h2>
            <p>Description</p>
            <ul className='winnner-product-det'>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <button className="winner-btn"> see more</button>
        </div>
    </div>
  )
}

export default Mainwinner