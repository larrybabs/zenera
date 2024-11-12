import React, { useState, useEffect, useRef, useCallback } from 'react';

const ImageSlider = ({ images }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, ] = useState(false);

  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);

  // Auto-scroll functionality
  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) return;
    
    autoScrollRef.current = setInterval(() => {
      if (!isDragging && !isFullScreen && sliderRef.current) {
        const scrollWidth = sliderRef.current.scrollWidth;
        const currentScroll = sliderRef.current.scrollLeft;
        const viewportWidth = sliderRef.current.offsetWidth;

        if (currentScroll + viewportWidth >= scrollWidth) {
          sliderRef.current.scrollLeft = 0;
        } else {
          sliderRef.current.scrollLeft += viewportWidth / 3;
        }
      }
    }, 3000);
  }, [isDragging, isFullScreen]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    
  }, [startAutoScroll]);

  const handleImageClick = (index) => {
    if (!isDragging) {
      setCurrentIndex(index);
      setIsFullScreen(true);
    }
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  const handleNext = useCallback(() => {
    if (sliderRef.current) {
      const nextScroll = sliderRef.current.scrollLeft + sliderRef.current.offsetWidth / 3;
      sliderRef.current.scrollLeft = nextScroll;
    }
  }, []);

  const handlePrevious = useCallback(() => {
    if (sliderRef.current) {
      const prevScroll = sliderRef.current.scrollLeft - sliderRef.current.offsetWidth / 3;
      sliderRef.current.scrollLeft = prevScroll;
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <button 
        onClick={() => {
          handlePrevious();
          stopAutoScroll();
          setTimeout(startAutoScroll, 1000);
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-r-lg shadow-lg hover:bg-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => {
          handleNext();
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-l-lg shadow-lg hover:bg-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-scroll scroll-smooth"
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-full md:w-1/3 p-2 transition-transform duration-300 ease-in-out"
            style={{ transform: isDragging ? 'scale(0.98)' : 'scale(1)' }}
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
              loading="lazy"
                src={image.src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleImageClick(index)}
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen modal */}
      {isFullScreen && (
        <div 
          onClick={handleCloseFullScreen} 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] p-4">
            <img
            loading="lazy"
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex}`}
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75"
              onClick={handleCloseFullScreen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
              <button
                className="text-white bg-black/50 p-2 rounded-full hover:bg-black/75"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="text-white bg-black/50 p-2 rounded-full hover:bg-black/75"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;