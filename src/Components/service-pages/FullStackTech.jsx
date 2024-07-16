import React from 'react'

const FullStackTech = () => {
  return (
    <div className='w-[90%] m-auto mt-40'>
      <h1 className='  heading mb-16 text-center text-[#d5f365]'>Technologies in Full Stack Development</h1>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10  ">
            <div className="frontend box_bg_gradient transition-all duration-500 border-border_color border hover:border-[#d5f365] p-2 rounded-md " >
                  <h2 className='text-xl mb-3 mt-2 text-[#d5f365]'>Frontend Development</h2>
                  <p className='text-md'>Our skilled front-end engineers utilize CSS, ReactJS, Tailwind CSS to craft captivating website interfaces. Our services encompass UI/UX development, SPA, PWA, staff augmentation, and more for a seamless user experience.</p>
            </div>
            <div className="backend box_bg_gradient transition-all duration-500 border-border_color border hover:border-[#d5f365] p-2 rounded-md ">
                  <h2 className='text-xl mb-3 mt-2  text-[#d5f365]'>Backend Development</h2>
                  <p className='text-md'>Boost your web and mobile app performance with our premium backend development services. Tap into our full stack development team to create software that meets top standards, ensuring robust security, speed, and stability.</p>
            </div>
            <div className="api box_bg_gradient transition-all duration-500 border-border_color border hover:border-[#d5f365] p-2 rounded-md ">
                  <h2 className='text-xl mb-3 mt-2 text-[#d5f365]'>API Development</h2>
                  <p className='text-md'>Enable desired integrations with our custom API development. Implement custom APIs for seamless interactions with multiple intermediaries, enhancing project value by integrating existing APIs. Explore our API development technologies for advanced solutions.</p>
            </div>
            <div className="database box_bg_gradient transition-all duration-500 border-border_color border hover:border-[#d5f365] p-2 rounded-md ">
                  <h2 className='text-xl mb-3 mt-2 text-[#d5f365]'>Database Development</h2>
                  <p className='text-md'>Create scalable and agile projects with our development experts skilled in integrating diverse database technologies (MySQL, SQL, PostgreSQL). Ensure easy accessibility and robust security for your application data through seamless database integration.</p>
            </div>
            <div className="ui box_bg_gradient transition-all duration-500 border-border_color border hover:border-[#d5f365] p-2 rounded-md ">
                  <h2 className='text-xl mb-3 mt-2 text-[#d5f365]'>UI/UX Design</h2>
                  <p className='text-md' >Our full stack UI/UX designers craft captivating and intuitive designs, elevating the user journey with rich elements, harmonized color theory, and an irresistibly attractive visual language for a more appealing, interactive, and enjoyable experience.</p>
            </div>
            <div className="ui box_bg_gradient transition-all duration-500 border-border_color border hover:border-[#d5f365] p-2 rounded-md ">
                  <h2 className='text-xl mb-3 mt-2 text-[#d5f365]'>Web Development</h2>
                  <p className='text-md' >Elevate your online presence with our web development expertise. Our top developers enhance your website's performance and scalability through intuitive design, and increased on-site engagement, ensuring goal attainment and sustained user interest.</p>
            </div>
      </div>
    </div>

  )
}

export default FullStackTech