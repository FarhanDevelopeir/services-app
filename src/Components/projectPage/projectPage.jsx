import Navbar from "../Navbar"



export const ProjectPage = () => {



    return (
        <>
            <div>
                {/* <p className=" text-white" >Project page</p> */}
                <Navbar></Navbar>
                <div className=" flex items-center justify-center mt-[7.5rem] h-[600px]" >
                    <img src="https://techwards.co/images/stellic_featured_794f54d6c5.png" alt="" />
                </div>
                <div className=" my-5 flex items-center justify-center mx-auto">
                    <p className=" text-white text-start max-w-[84vw] font-serif text-base" >
                        Significant enhancements were made to an educational administrative product, focusing on optimising efficiency, strengthening security measures, and improving code quality.

                        These advancements involved the upgrading of outdated backend services, including Python, Django, and their related dependencies, while strictly adhering to modern development standards.

                        Moreover, the latest M1 Mac machines were seamlessly integrated with full code support. These improvements empower teams to expand the product's functionality, enhance performance, and prolong its lifespan
                    </p>
                </div>
            </div>
        </>
    )
}