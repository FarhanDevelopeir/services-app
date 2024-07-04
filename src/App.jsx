import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Layout'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import ServivesDetails from './Components/service-pages/ServivesDetails'
import { ProjectPage } from './Components/projectPage/projectPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'



function App() {

  return (
    <div className='text-textColor'>

    <BrowserRouter>

    <Navbar />
     <Routes>
      <Route path="/" element={<Layout/>} />
      <Route path="/services/:id" element={<ServivesDetails/>} />
      <Route path="/page" element={<ProjectPage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
     {/* <Layout/> */}
    </div>
  )
}

export default App
