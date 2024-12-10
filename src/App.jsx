
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'


// npm run dev -- --open --port 3000 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-polip' element={<About />}/>
      </Routes>

    </div>
  )
}

export default App