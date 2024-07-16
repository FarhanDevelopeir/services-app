import React from "react";
import development from "../../img/app-development.png";
import deploy from "../../img/launch.png";
import maintenance from "../../img/maintenance.png";
import planning from "../../img/planning.png";
import search from "../../img/search.png";
import testing from "../../img/test.png";

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
                  Initialize
                </h2>
                1. Discuss client requirements and project goals. <br />
                2. Analyze current systems and identify gaps.
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
                  Planning and Design
                </h2>
                Create wireframes and mockups for user interface design. <br />
                Develop a project plan with timelines and milestones.
              </div>
            </div>
          </div>
          <div className="       ">
            <img
              src={development}
              className="h-16 bg-white absolute md:relative md:m-auto w-16 rounded-full border-4 border-yellow-400 p-1 shadow-md"
            />
            <div className="textbox3 relative pt-3 xs:pl-16 xs:pt-0  md:m-auto md:w-1/2 md:mr-0 md:-top-16 ">
              {/* <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px] md:left-9 xs:top-5 bg-gray-200 rotate-45 inset-0"></div> */}
              <div className="  border-[#d5f365] mt-16 border box_bg_gradient    bg-gray-200 p-3 lg:w-[60%]   rounded-md xs:ml-3 shadow-md md:ml-14 md:-mt-3 ">
                <h2 className=" text-2xl font-semibold text-[#d5f365] mb-3">
                  Development{" "}
                </h2>
                Implement frontend and backend functionalities. <br />
                Integrate APIs and third-party services as needed.
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={testing}
              className="h-16 bg-white absolute md:relative md:m-auto w-16 rounded-full border-4 border-cyan-500 p-1 shadow-md"
            />
            <div className="textbox4 relative pt-3 xs:pl-16 xs:pt-0 md:m-auto md:w-1/2 md:ml-0 md:-top-16 ">
              <div className=" border-[#d5f365] mt-16 border box_bg_gradient bg-gray-200 p-3 lg:w-[60%] md:float-end rounded-md xs:ml-3 shadow-md md:mr-16 md:mt-auto ">
                <h2 className=" text-2xl font-semibold text-[#d5f365] mb-3">
                  Testing{" "}
                </h2>
                Conduct unit testing, integration testing, and user acceptance
                testing. <br />
                Address bugs and make necessary adjustments.
              </div>
            </div>
          </div>
          <div className=" ">
            <img
              src={deploy}
              className="h-16 bg-white absolute md:relative md:m-auto w-16 rounded-full border-4 border-cyan-500 p-1 shadow-md"
            />
            <div className="textbox5 relative pt-3 xs:pl-16 xs:pt-0  md:m-auto md:w-1/2 md:mr-0 md:-top-16 ">
              {/* <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px] md:left-9 xs:top-5 bg-gray-200 rotate-45 inset-0"></div> */}
              <div className="  border-[#d5f365] mt-16 border box_bg_gradient    bg-gray-200 p-3 lg:w-[60%]   rounded-md xs:ml-3 shadow-md md:ml-14 md:-mt-3 ">
                <h2 className=" text-2xl font-semibold text-[#d5f365] mb-3">
                  Deployment{" "}
                </h2>
                Deploy the application to a staging environment for final
                approval. <br />
                Launch the application to the production environment.
              </div>
            </div>
          </div>
          <div className="       ">
            <img
              src={maintenance}
              className="h-16    bg-white absolute md:relative md:m-auto w-16 rounded-full border-4 border-black p-1 shadow-md"
            />
            <div className="textbox6 relative pt-3 xs:pl-16 xs:pt-0 md:m-auto md:w-1/2 md:ml-0 md:-top-16 ">
              <div className="border-[#d5f365] mt-16 border box_bg_gradient  box_bg_gradient p-3 lg:w-[60%] md:float-end  rounded-md xs:ml-3 shadow-md md:mr-16 md:mt-auto ">
                <h2 className=" text-2xl font-semibold text-[#d5f365] mb-3">
                  Maintenance
                </h2>
                Provide ongoing support and maintenance services. <br />
                Implement updates and improvements based on user feedback.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDevelopmentWorkFlow;
