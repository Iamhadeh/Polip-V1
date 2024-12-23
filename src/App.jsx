
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Header from './Components/Header';
import Footer from './Components/Footer';


// npm run dev -- --open --port 8120

const App = () => {
  return (

    <div>
      <Header/>
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/about-polip' element={<About />}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App