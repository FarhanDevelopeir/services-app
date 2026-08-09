import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProjectPage } from './Components/projectPage/projectPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { GridBackgroundDemo } from './Components/GridBackgroundDemo'



function App() {

  return (
    // <div className='text-textColor'>

    // <BrowserRouter>

    // <Navbar />
    //  <Routes>
    //   <Route path="/" element={<Layout/>} />
    //   <Route path="/services/:id" element={<ServivesDetails/>} />
    //   <Route path="/page" element={<ProjectPage/>} />
    // </Routes>
    // <Footer/>
    // </BrowserRouter>
    //  {/* <Layout/> */}
    // </div>

    <div className="App relative">
      {/* Grid background fixed behind everything */}
      <GridBackgroundDemo />

      {/* App content always above background */}
      <div className="relative z-10">
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/page" element={<ProjectPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* <Layout/> */}
      </div>
    </div>
  )
}

export default App
