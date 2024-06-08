import React from 'react';
import blogs from '../data/data.json';
import thumbnail_1 from '../img/ecom.png';
import thumbnail_2 from '../img/ecomm.png';
import thumbnail_3 from '../img/placeholder-image.png';

const Blogs = () => {

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
        <h1 className='heading text-center ' >Recent Blogs</h1>
      </div>
      <div className=' my-20'>
        {blogs.blogs.map((item, index) => {
          // Use the index to cycle through the thumbnails
          const thumbnail = thumbnails[index % thumbnails.length];
          return (
            <div key={index} className=' mb-6 border border-border_color  rounded-2xl flex justify-center p-5'>
              <div className='w-[30%]'>
                <img src={thumbnail} className=' w-72 h-72' alt={`Thumbnail for ${item.title}`} />
              </div>
              <div className='w-[90%] flex'>
                <h2>{item.topic}</h2>
                <h1>{item.title}</h1>
                <h3>{truncateDescription(item.description)}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
