import React from 'react'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <main>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
   </main>
  )
}

export default App