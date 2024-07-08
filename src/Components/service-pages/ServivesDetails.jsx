import { React, useEffect } from 'react'
import services from "../../data/data.json";
import { useParams } from 'react-router-dom';


import bgimg from '../../img/1.png'

import heroSectionImg from '../../img/herosectionimg.png'
import webpic from '../../img/webpic.png'
import aipic from '../../img/AIpic.png'
import amazonpic from '../../img/amazonpic.png'
import FullStack from './FullStack';
import FullStackTech from './FullStackTech';
import './ServicesDetails.css'


const ServivesDetails = () => {
  const { id } = useParams();
  console.log(id);
  const get = services.Services
  console.log(get);
  const serve = get.find((item) => item.id === parseInt(id)); // if id should be a number
  console.log(serve);

  let displayImg = heroSectionImg;
  if (serve.id === 1) {
    displayImg = webpic;
  } else if (serve.id === 2) {
    displayImg = amazonpic;
  } else if (serve.id === 3) {
    displayImg = aipic;
  }

  if (!serve) {
    return <div className=' '>Service not found</div>;
  } else {
    return (
      <div className=''>
        <div className='mt-24  mb-44 md:mb-16  h-[600px] md:h-auto'>
    <div className='hero h-[600px]'>
      {/* <img src={bgimg}   className=' -mt-24 h-96 md:h-[500px] w-full ' alt="" /> */}
      {/* <span class="absolute w-full inset-0 bg-black opacity-[95%]"></span> */}
      <div className='hero-content w-[90%] md:w-[40%] box_bg_gradient  p-5 rounded-md  ' >
        <div  className=' text-center  ' >
          <h1 className=' text-white text-3xl   md:text-[30px] xl:text-[3rem] lg:leading-[70px] ' >{serve.title}</h1>
          <div className='flex my-5'>
            {/* <div  className=' w-1 border border-border_color bg-border_color rounded-lg mr-6' ></div> */}
            <p className=' text-sm  lg:text-lg text-pretty '>{serve.description}</p>
          </div>
          <button
            className=" mt-5 button hover:button_hover px-7 py-3 active:button_active" >
              <span className="">Contact Me</span>
            </button>
        </div>
        
      </div>
    </div>

   
    </div>
    <FullStackTech/>
    
    <FullStack/>
        {/* <h1 className="my-4 text-xl font-semibold sm:text-2xl ">{serve.title}</h1>
        <p>{serve.description}</p> */}
      </div>
    )
  }

 
}

export default ServivesDetails