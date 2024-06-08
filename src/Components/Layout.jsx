import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import OurServices from './OurServices'
import OurPortfolio from './OurPortfolio'
import LifeCycleMethod from './LifeCycleMethod'
import Footer from './Footer'
import Blogs from './Blogs'

const Layout = () => {
  return (
    <div className='text-textColor'>
        <Navbar/>
        <HeroSection/>
        <OurServices/>
        <LifeCycleMethod/>
        <OurPortfolio/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default Layout