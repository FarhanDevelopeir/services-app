import React from "react";
import model from "../../img/ai-model.jpg";
import deploy from "../../img/launch.png";
import maintenance from "../../img/maintenance.png";
import planning from "../../img/planning.png";
import search from "../../img/search.png";
import testing from "../../img/test.png";
import integration from '../../img/integration.png'

const AIDevelopmentWorkFlow = () => {
  return (
    <div>
      <section id="MySkills" className="  w-[95%] m-auto mt-40  mb-40 ">
        <div className=" text-center mb-20">
          <p className="  heading "> Work Procedure for AI </p>
        </div>
        <div className="main relative m-auto  p-2 flex flex-col space-y-8 md:space-y-0 ">
          <div className=" absolute w-2 h-full md:m-auto bg-gray-300 border-2 border-purple-400 rounded-md left-9 md:left-0 z-0 inset-0 "></div>
          <div className="       ">
            <img
              src={search}
              className="h-16 bg-white absolute md:relative md:m-auto w-16 rounded-full border-4 border-orange-400 p-1 shadow-md"
            />
            <div className="textbox1    relative pt-3 xs:pl-16 xs:pt-0  md:m-auto md:w-1/2 md:mr-0 md:-top-16 ">
              {/* <div className=" absolute h-4 w-4 mt-2 left-6 xs:left-[67px] md:left-12 xs:top-5 box_bg_gradient   rotate-45  "></div> */}
              <div className=" border-[#d5f365] border mt-16  box_bg_gradient    p-3 lg:w-[60%]  rounded-md xs:ml-3 shadow-md md:ml-14 md:-mt-3 ">
                <h2 className=" text-2xl font-semibold text-[#d5f365] mb-3">
                Requirement Analysis
                </h2>
                1. Understand client needs and the problem to be solved with AI. <br />
                2. Define the scope and objectives of the AI integration project.
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={planning}
              className="h-16 bg-white absolute md:relative md:m-auto w-16 rounded-full border-4 border-blue-700 p-1 shadow-md"
            />
            <div className="textbox2 relative pt-3 xs:pl-16 xs:pt-0 md:m-auto md:w-1/2 md:ml-0 md:-top-16 ">
              <div className=" border-[#d5f365] mt-16 border box_bg_gradient bg-gray-200 lg:w-[60%] md:float-end p-3 rounded-md xs:ml-3 shadow-md md:mr-16 md:mt-auto ">
                <h2 className=" text-2xl font-semibold text-[#d5f365] mb-3">
                Data Collection
                </h2>
                Gather and preprocess relevant data for training AI models. <br />
                Ensure data quality and consistency.
              </div>
            </div>
          </div>
          <div className="       ">
            <img
              src={model}
              className="h-16 bg-white absolute md:relative md:m-auto w-16 rounded-full border-4 border-yellow-400 p-1 shadow-md"
            />
            <div className="textbox3 relative pt-3 xs:pl-16 xs:pt-0  md:m-auto md:w-1/2 md:mr-0 md:-top-16 ">
              {/* <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px] md:left-9 xs:top-5 bg-gray-200 rotate-45 inset-0"></div> */}
              <div className="  border-[#d5f365] mt-16 border box_bg_gradient    bg-gray-200 p-3 lg:w-[60%]   rounded-md xs:ml-3 shadow-md md:ml-14 md:-mt-3 ">
                <h2 className=" text-2xl font-semibold text-[#d5f365] mb-3">
                Model Selection
                </h2>
                Choose appropriate AI models and algorithms. <br />
                Train models using the prepared data and evaluate performance.
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={integration}
              className="h-16 bg-white absolute md:relative md:m-auto w-16 rounded-full border-4 border-cyan-500 p-1 shadow-md"
            />
            <div className="textbox4 relative pt-3 xs:pl-16 xs:pt-0 md:m-auto md:w-1/2 md:ml-0 md:-top-16 ">
              <div className=" border-[#d5f365] mt-16 border box_bg_gradient bg-gray-200 p-3 lg:w-[60%] md:float-end rounded-md xs:ml-3 shadow-md md:mr-16 md:mt-auto ">
                <h2 className=" text-2xl font-semibold text-[#d5f365] mb-3">
                Integration Development
                </h2>
                Integrate AI models into the client's existing systems or applications. <br />
                Develop APIs or user interfaces for interacting with the AI models.
              </div>
            </div>
          </div>
          <div className=" ">
            <img
              src={testing}
              className="h-16 bg-white absolute md:relative md:m-auto w-16 rounded-full border-4 border-cyan-500 p-1 shadow-md"
            />
            <div className="textbox5 relative pt-3 xs:pl-16 xs:pt-0  md:m-auto md:w-1/2 md:mr-0 md:-top-16 ">
              {/* <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px] md:left-9 xs:top-5 bg-gray-200 rotate-45 inset-0"></div> */}
              <div className="  border-[#d5f365] mt-16 border box_bg_gradient    bg-gray-200 p-3 lg:w-[60%]   rounded-md xs:ml-3 shadow-md md:ml-14 md:-mt-3 ">
                <h2 className=" text-2xl font-semibold text-[#d5f365] mb-3">
                Testing 
                </h2>
                Test the AI integration in real-world scenarios. <br />
Validate model performance and accuracy.
              </div>
            </div>
          </div>
          <div className="       ">
            <img
              src={deploy}
              className="h-16    bg-white absolute md:relative md:m-auto w-16 rounded-full border-4 border-black p-1 shadow-md"
            />
            <div className="textbox6 relative pt-3 xs:pl-16 xs:pt-0 md:m-auto md:w-1/2 md:ml-0 md:-top-16 ">
              <div className="border-[#d5f365] mt-16 border box_bg_gradient  box_bg_gradient p-3 lg:w-[60%] md:float-end  rounded-md xs:ml-3 shadow-md md:mr-16 md:mt-auto ">
                <h2 className=" text-2xl font-semibold text-[#d5f365] mb-3">
                Deployment
                </h2>
                Deploy the AI models to the production environment. <br />
Monitor model performance and update as needed to maintain accuracy and relevance.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDevelopmentWorkFlow;
