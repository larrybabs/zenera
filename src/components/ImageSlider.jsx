import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      {/* Slider */}
      <div className="flex overflow-x-auto scrollbar-hide">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-80 h-80 mr-6">
            <img
              src={image}
              alt={` ${index}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>

      {/* Full-screen modal */}
      {isFullScreen && (
        <div onClick={handleCloseFullScreen} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
            <img
              src={images[currentIndex]}
              alt={` ${currentIndex}`}
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={handleCloseFullScreen}
            >
              &times;
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <button
                className="text-white text-2xl mx-2"
                onClick={handlePrevious}
              >
                &lt;
              </button>
              <button
                className="text-white text-2xl mx-2"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;