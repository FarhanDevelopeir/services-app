import React from 'react'

const AIDevelopmentTechnologies = () => {
  return (
      <div className='w-[90%] m-auto mt-40'>
      <h1 className='  heading mb-16 text-center text-[#d5f365]'>Technologies in AI Development</h1>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10  ">
            <div className="frontend box_bg_gradient transition-all duration-500 border-border_color border hover:border-[#d5f365] p-2 rounded-md " >
                  <h2 className='text-xl mb-3 mt-2 text-[#d5f365]'>AI Integration</h2>
                  <p className='text-md'>Our skilled front-end engineers utilize CSS, ReactJS, Tailwind CSS to craft captivating website interfaces. Our services encompass UI/UX development, SPA, PWA, staff augmentation, and more for a seamless user experience.</p>
            </div>
            <div className="backend box_bg_gradient transition-all duration-500 border-border_color border hover:border-[#d5f365] p-2 rounded-md ">
                  <h2 className='text-xl mb-3 mt-2  text-[#d5f365]'>AI Chat Bot</h2>
                  <p className='text-md'>Boost your web and mobile app performance with our premium backend development services. Tap into our full stack development team to create software that meets top standards, ensuring robust security, speed, and stability.</p>
            </div>
            <div className="api box_bg_gradient transition-all duration-500 border-border_color border hover:border-[#d5f365] p-2 rounded-md ">
                  <h2 className='text-xl mb-3 mt-2 text-[#d5f365]'> AI Language Translator </h2>
                  <p className='text-md'>Enable desired integrations with our custom API development. Implement custom APIs for seamless interactions with multiple intermediaries, enhancing project value by integrating existing APIs. Explore our API development technologies for advanced solutions.</p>
            </div>
            
      </div>
    </div>
  )
}

export default AIDevelopmentTechnologies