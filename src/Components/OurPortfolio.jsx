import React, { useEffect, useRef } from "react";
import data from "../data/data.json";
import ecommerceImage from "../img/fortesting.png";

const Portfolio = data.Projects;

const OurPortfolio = () => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const portfolioItems = portfolioRef.current.querySelectorAll('.portfolio-item');

    portfolioItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        portfolioItems.forEach((el) => {
          if (el !== item) {
            el.style.flex = '0.8'; // Shrink other items
          }
        });
        item.style.flex = '1.2'; // Enlarge hovered item
      });

      item.addEventListener('mouseleave', () => {
        portfolioItems.forEach((el) => {
          el.style.flex = '1'; // Reset all items to equal size
        });
      });
    });

    return () => {
      portfolioItems.forEach((item) => {
        item.removeEventListener('mouseenter', null);
        item.removeEventListener('mouseleave', null);
      });
    };
  }, []);

  return (
    <div className="py-10 my-20" id="Portfolio">
      <div className="text-center w-[90%] m-auto">
        <div className="text-center">
          <div>
            <h1 className="heading mb-3">Portfolio</h1>
            <p className="subHeading">Our Recent Work</p>
          </div>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap my-10" ref={portfolioRef}>
          {Portfolio.map((item, index) => {
            return (
              <div
                key={index}
                className="md:portfolio-item p-3 cursor-pointer transform transition-all duration-500 ease-in-out hover:z-10 border-[#535353] rounded-md flex-[1]"
              >
                <img src={ecommerceImage} alt="Portfolio" className="" />
                <div className="bg-gradient-to-br border border-border_color from-black to-[#252b10] p-6 rounded-lg">
                  <h1 className="font-semibold text-xl">{item.title}</h1>
                  {/* <p className="transition-all duration-500 ease-in-out">{item.description}</p> */}
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
