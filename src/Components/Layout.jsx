import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import OurServices from './OurServices'

const Layout = () => {
  return (
    <div className='text-textColor'>
        <Navbar/>
        <HeroSection/>
        <OurServices/>
    </div>
  )
}

export default Layout