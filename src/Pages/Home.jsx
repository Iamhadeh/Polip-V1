

import React from 'react'
import Header from '/src/Components/Header'
import Main from '/src/Components/Main'
import QuoteSlider from '../Components/Quote-slider'
import ThirdSection from '../Components/ThirdSection'
import FourthSection from '../Components/FourthSection'
import RewardSection from '../Components/RewardSection'
import Learnsection from '../Components/Learnsection'
import LastSection from '../Components/LastSection'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <> 
    <Header/>
    <Main/>
    <QuoteSlider/>
    <ThirdSection/>
    <FourthSection/>
    <Learnsection/>
    <RewardSection/>
    <LastSection/>
    <Footer/>
    </>
  )
}

export default Home;
