import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import OurServices from './OurServices'
import OurPortfolio from './OurPortfolio'
import LifeCycleMethod from './LifeCycleMethod'

const Layout = () => {
  return (
    <div className='text-textColor'>
        <Navbar/>
        <HeroSection/>
        <OurServices/>
        <OurPortfolio/>
        <LifeCycleMethod/>
    </div>
  )
}

export default Layout