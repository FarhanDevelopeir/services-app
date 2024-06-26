import React, { useEffect, useRef } from 'react';
import blogs from '../data/data.json';
import thumbnail_1 from '../img/ecom.png';
import thumbnail_2 from '../img/ecomm.png';
import thumbnail_3 from '../img/placeholder-image.png';

const Blogs = () => {

  const slideTrackRef = useRef(null);

  useEffect(() => {
    const slideTrack = slideTrackRef.current;

    const handleMouseEnter = () => {
      slideTrack.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      slideTrack.style.animationPlayState = 'running';
    };

    slideTrack.addEventListener('mouseenter', handleMouseEnter);
    slideTrack.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slideTrack.removeEventListener('mouseenter', handleMouseEnter);
      slideTrack.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

const truncateDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 22) {
          return words.slice(0, 22).join(' ') + '...';
        }
        return description;
      };
  // Array of imported images
  const thumbnails = [thumbnail_1, thumbnail_2, thumbnail_3];

  return (
    <div className='w-[90%] m-auto' >
      <div >
        <h1 className='heading text-center ' >Our Blogs</h1>
      </div>
      <div className='overflow-x-auto relative custom-scroll'>
      <div className='slide-track flex gap-5 my-20' ref={slideTrackRef}>
      {blogs.blogs.map((item, index) => {
          const thumbnail = thumbnails[index % thumbnails.length];
          return (
            <div key={index} className='slide w-[30%] md:w-[50%] mb-6 border hover:border-[#d5f365] cursor-pointer border-border_color rounded-2xl p-5'>
              <div>
                <img src={thumbnail} className='w-72 h-72' alt={`Thumbnail for ${item.title}`} />
              </div>
              <div className='w-[90%]'>
                <h2>{item.topic}</h2>
                <h1>{item.title}</h1>
                <h3>{truncateDescription(item.description)}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Blogs;
