import React from "react";
import services from "../data/data.json";
import { Link } from "react-router-dom";

const createMarkup = (svg) => {
  return { __html: svg };
};

const OurServices = () => {
  //    const services
  console.log(services.Services);
  const Services = services.Services;

  return (
    <div className="    w-[90%] m-auto">
      <div className="text-center">
        <h1 className="heading mb-3">Our Services</h1>

        <p className="subHeading">Services For Our Worldwide Customers</p>
      </div>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-5  mt-10">
        {Services.map((item, index) => {
          return (
            <Link to={`/services/${item.id}`}>

              <div
                key={index}
                className=" cursor-pointer flex flex-col w-full justify-center  border-2 border-border_color    py-4 sm:py-8 px-4 hover:border-[#d5f365] rounded-md transform transition-all duration-500 hover:scale-105 group  "
              >
                <div
                  dangerouslySetInnerHTML={createMarkup(item.icon)}
                  className=" "
                />

                <h1 className="my-4 text-xl font-semibold sm:text-2xl ">
                  {item.title}
                </h1>
                <p>{item.description}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 mt-7 group-hover:text-[#d5f365]  transition-all duration-500 ease-in-out group-hover:w-14  "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
