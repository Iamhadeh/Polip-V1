
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Resources from './Pages/Resources.jsx';
import Communities from './Pages/Communities.jsx'
import Alumni from './Pages/Alumni.jsx'


// npm run dev -- --open --port 8120

const App = () => {
  return (

    <div>
      <Header/>
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/about-polip' element={<About />}/>
        < Route path='/resources' element={<Resources />}/>
        < Route path='/ideas' element={< ideasPage />}/>
        < Route path='/communities' element={<Communities />}/>
        < Route path='/alumni' element={<Alumni />}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App