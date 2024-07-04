import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Layout'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import ServivesDetails from './Components/service-pages/ServivesDetails'
import { ProjectPage } from './Components/projectPage/projectPage'



function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>} />
      <Route path="/services/:id" element={<ServivesDetails/>} />
      <Route path="/page" element={<ProjectPage/>} />
    </Routes>
    </BrowserRouter>
     {/* <Layout/> */}
    </>
  )
}

export default App
