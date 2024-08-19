import React, { useEffect, useRef, useState } from 'react'
import bgimg from '../img/1.png'
import heroSectionImg from '../img/herosectionimg.png'
import Typed from 'typed.js'

const HeroSection = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Software Solutions', 'AI Solutions', 'Full Stack Solutions'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup Typed.js instance
    };
  }, []);


  return (
    <div className=' mt-24  mb-44 md:mb-16  h-[600px] md:h-auto' id='heroSection'>
    <div className=' '>
      {/* <img src={bgimg}   className=' -mt-24 h-96 md:h-auto ' alt="" /> */}
      {/* <span class="absolute w-full inset-0 bg-black opacity-[95%]"></span> */}
      <div  className='hero flex flex-col md:flex-row ' >
        {/* <div  className='  absolute top-28 md:top-40 xl:top-52 left-[6%] md:w-[43%]' > */}
        <div  className=' w-[90%] sm:w-[70%] mt-10 md:mt-28 md:w-[40%] m-auto ' >

          <h1 className=' text-white text-2xl   md:text-[30px] xl:text-[3rem] lg:leading-[70px] ' >We Provide Digital <br></br> <span ref={typedElement} className='text-yellowTextColor'></span><span className="typed-cursor typed-cursor--blink"></span></h1>
          <div className='flex my-5'>
            <div  className=' w-1 border border-border_color bg-border_color rounded-lg mr-6' ></div>
            <p className=' text-sm  lg:text-lg '>"We provide digital software solutions, including Web development, AI integration, Amazon marketing, and SEO. Our team delivers high-quality, custom software to boost your business's efficiency and success."</p>
          </div>
          <button
            className=" mt-5 button hover:button_hover px-7 py-3 active:button_active" >
              <span className="">Contact Me</span>
            </button>
        </div>
        {/* <div className=' absolute top-[440px] left-4 lg:right-40 xl:right-20 md:top-32 md:right-[6%] md:left-auto ' > */}
        <div className=' lg:mr-20 mt-10 ' >

          <img src={heroSectionImg}   className=' w-[310px] md:w-[360px] xl:w-[650px]' alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroSection