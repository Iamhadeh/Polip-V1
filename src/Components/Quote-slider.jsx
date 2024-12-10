

import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 import quotesForSlider from '../assets/assets.js';



const QuoteSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10650,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


  return (
    <div className='quote-slider-container'>

      
      <div className='inner-container-cos-map'>
      <Slider {...settings}> 
        {quotesForSlider.map((item,index)=>(
            <div key={index} className="quote-container">
              <div className="last-container">
                 <div className="image-box">
                   <img className='img-for-quotes' src={item.image} alt="" />
                  </div>
                  <div  className="quote-box">
                     <p className='main-quotes'>{item.quote}</p>
                    <p className='main-person-name'>{item.name}</p>
                 </div>

              </div>
           </div> 
         ))} 
          </Slider>
      </div>
    </div>
  )
}

export default QuoteSlider;


  