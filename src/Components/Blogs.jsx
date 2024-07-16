import React, { useState, useEffect } from 'react';
import blogs from '../data/data.json';
import thumbnail_1 from '../img/ecom.png';
import thumbnail_2 from '../img/ecomm.png';
import thumbnail_3 from '../img/placeholder-image.png';

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 10) {
      return words.slice(0, 10).join(' ') + '...';
    }
    return description;
  };

  const thumbnails = [thumbnail_1, thumbnail_2, thumbnail_3];
  const totalBlogs = blogs.blogs.length;

  const handlePrevClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalBlogs - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === totalBlogs - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Match the duration of the CSS transition
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getVisibleBlogs = () => {
    if (window.innerWidth < 768) {
      return blogs.blogs.slice(currentIndex, currentIndex + 1);
    } else if (window.innerWidth < 1024) {
      return blogs.blogs.slice(currentIndex, currentIndex + 2);
    } else {
      return blogs.blogs.slice(currentIndex, currentIndex + 3);
    }
  };

  const visibleBlogs = getVisibleBlogs();
  const overflowBlogs = blogs.blogs.slice(0, (getVisibleBlogs().length - visibleBlogs.length));

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      <div>
        <h1 className="text-center text-2xl font-bold mb-6">Our Blogs</h1>
      </div>
      <div className="relative custom-scroll">
        <div className="flex justify-between items-center">
          <button 
            onClick={handlePrevClick} 
            className="bg-gray-800 text-white px-4 py-2 mr-2 rounded-full"
          >
            &#10094; {/* Left arrow */}
          </button>
          <div className="flex gap-5 my-20 transition-transform duration-300 ease-in-out transform">
            {visibleBlogs.map((item, index) => {
              const thumbnail = thumbnails[(currentIndex + index) % thumbnails.length];
              return (
                <div key={index} className="w-full md:w-[45%] lg:w-[30%] mb-6 border hover:border-[#d5f365] cursor-pointer border-border_color rounded-2xl p-5">
                  <div>
                    <img src={thumbnail} className="w-full h-auto object-cover rounded-t-2xl" alt={`Thumbnail for ${item.title}`} />
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold">{item.topic}</h2>
                    <h1 className="text-xl font-bold">{item.title}</h1>
                    <h3 className="text-sm">{truncateDescription(item.description)}</h3>
                  </div>
                </div>
              );
            })}
            {overflowBlogs.map((item, index) => {
              const thumbnail = thumbnails[(currentIndex + visibleBlogs.length + index) % thumbnails.length];
              return (
                <div key={visibleBlogs.length + index} className="w-full md:w-[45%] lg:w-[30%] mb-6 border hover:border-[#d5f365] cursor-pointer border-border_color rounded-2xl p-5">
                  <div>
                    <img src={thumbnail} className="w-full h-auto object-cover rounded-t-2xl" alt={`Thumbnail for ${item.title}`} />
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold">{item.topic}</h2>
                    <h1 className="text-xl font-bold">{item.title}</h1>
                    <h3 className="text-sm">{truncateDescription(item.description)}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <button 
            onClick={handleNextClick} 
            className="bg-gray-800 text-white px-4 py-2 ml-2 rounded-full"
          >
            &#10095; {/* Right arrow */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
