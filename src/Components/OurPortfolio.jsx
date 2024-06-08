import React, { useEffect, useRef } from "react";
import data from "../data/data.json";
import ecommerceImage from "../img/fortesting.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Portfolio = data.Projects;
const OurPortfolio = () => {

  const portfolioRef = useRef(null);


  return (
    <div className="  py-10 my-20 ">
      <div className=" text-center w-[90%] m-auto ">
        <div className="  text-center">
          <div>
            <h1 className="heading mb-3 ">Portfolio</h1>
            <p className="subHeading">Our Recent Work</p>
          </div>
        </div>
        <div className=" grid sm:grid-cols-1  my-10 gap-5  "   ref={portfolioRef}>
          {Portfolio.map((item, index) => {
            return (
              <div key={index} className="portfolio-item  md:flex border-2 p-3  cursor-pointer transform transition-all duration-500 group hover:border-[#d5f365] border-[#535353] rounded-md  ">
                <img src={ecommerceImage} alt="no" className="   " />

                <div className="bg-gradient-to-br border border-border_color from-black to-[#252b10]  p-4 rounded-lg  left-[43%] right-4 md:top-12 ">
                  <h1 className=" font-semibold text-xl">{item.title}</h1>

                  <p className="">{item.description}</p>
                  <div className=" flex w-[17%] float-end ">
                    <h1></h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="  w-6 h-8     bottom-3  group-hover:text-[#d5f365]  transition-all duration-500 ease-in-out group-hover:w-14  "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurPortfolio;
