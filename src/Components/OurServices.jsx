import React from "react";
import services from "../data/data.json";



const createMarkup = (svg) => {
  return { __html: svg };
};

const OurServices = () => {
  //    const services
  console.log(services.Services);
  const Services = services.Services


  

  return (
    <div className="  w-[90%] m-auto">
      <div className="text-center">
        <h1 className="heading mb-3">Our Services</h1>
        
        <p className="subHeading">Services For Our Worldwide Customers</p>
      </div>
      <div className="flex justify-between mt-10">
        {Services.map(item =>{
            return(
                <>
                <div className="bg-gradient-to-br from-black to-[#252b10] border-2 border-[#535353] w-[32%] py-16 px-4 hover:border-[#d5f365] rounded-md transform transition-all duration-500 hover:scale-105">
                <div dangerouslySetInnerHTML={createMarkup(item.icon)} />
                <h1 className="mb-4">{item.title}</h1> 
                <p>{item.description}</p>
                </div>
                
                
                </>
            )
        })}
      </div>
    </div>
  );
};

export default OurServices;
