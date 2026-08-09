


import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import blogs from '../data/data.json';
import thumbnail_1 from '../img/ecom.png';
import thumbnail_2 from '../img/ecomm.png';
import thumbnail_3 from '../img/placeholder-image.png';

const Blogs = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 10) {
      return words.slice(0, 10).join(' ') + '...';
    }
    return description;
  };

  const thumbnails = [thumbnail_1, thumbnail_2, thumbnail_3];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="w-[90%] mx-auto py-16" id="Blogs">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="heading mb-3">
          Our Blogs
        </h1>
        <p className="subHeading">
          Stay updated with our latest insights, tips, and industry news
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Embla Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {blogs.blogs.map((item, index) => {
              const thumbnail = thumbnails[index % thumbnails.length];
              return (
                <div
                  key={index}
                  className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-0"
                >
                  <div className="group  border border-gray-600 bg-transparent hover:border-[#d5f365] hover:shadow-lg transition-all duration-300 cursor-pointer rounded-2xl p-6 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img 
                        src={thumbnail} 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                        alt={`Thumbnail for ${item.title}`} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="mb-2">
                        <span className="inline-block bg-[#d5f365]/20 text-[#dee0d2] text-xs font-semibold px-3 py-1 rounded-full">
                          {item.topic}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-200 mb-3 line-clamp-2 group-hover:text-[#6b7c00] transition-colors duration-300">
                        {item.title}
                      </h2>
                      <p className="text-gray-300 text-sm leading-relaxed flex-1">
                        {truncateDescription(item.description)}
                      </p>
                      
                      {/* Read More Link */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <span className="text-[#6b7c00] font-medium text-sm group-hover:underline">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg border border-gray-200 hover:bg-gray-50 p-3 rounded-full transition-all duration-200 ${
            prevBtnDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
          }`}
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <button
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg border border-gray-200 hover:bg-gray-50 p-3 rounded-full transition-all duration-200 ${
            nextBtnDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
          }`}
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-[#d5f365] w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>

      {/* Blog Counter */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          Showing {Math.min((selectedIndex + 1) * 3, blogs.blogs.length)} of {blogs.blogs.length} blogs
        </p>
      </div>
    </div>
  );
};

export default Blogs;