import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Play, Pause } from 'lucide-react';

// Image Categories Constants
export const IMAGE_CATEGORIES = {
  // IMC: 'imc',
  Gallery: 'gallery',
  REQ: 'req',
  SITEI: 'sitei',
  EARTH_WOMEN: 'earthwomen',
  TLP: 'tlp',
  PLI: 'pli',
  SEV: 'sev',
  HBC: 'hbc',
  UBOMI: 'ubomi',
  ASIDO: 'asido',
  // CADA: 'cada',
  SPARTAN: 'spartan',
  SERIES: 'series',
  JUNIOR_GOLF: 'juniorgolf',
  AWD: 'awd',
  ZCUL: 'zcul',
  STAFF: 'staff',
};

// Image Import Utility
export const importImagesFromContext = (context) => {
  const images = Object.values(IMAGE_CATEGORIES).reduce((acc, category) => {
    acc[category] = [];
    return acc;
  }, {});

  try {
    context.keys().forEach(key => {
      const filename = key.split('/').pop().split('.')[0].toLowerCase();
      const category = Object.values(IMAGE_CATEGORIES).find(cat =>
        filename.startsWith(cat)
      );

      if (category) {
        images[category].push({
          src: context(key),
          name: filename,
          index: parseInt(filename.replace(category, '')) || 0
        });
      }
    });

    Object.keys(images).forEach(category => {
      images[category].sort((a, b) => a.index - b.index);
    });

    return images;
  } catch (error) {
    console.error('Error importing images:', error);
    return images;
  }
};

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // eslint-disable-next-line
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [images, setImages] = useState({});
  const [filteredImages, setFilteredImages] = useState([]);

  // Import images using require.context
  useEffect(() => {
    const imageContext = require.context('../assets', true, /\.(png|jpg|jpeg)$/);
    const importedImages = importImagesFromContext(imageContext);
    setImages(importedImages);
  }, []);

  // Update filtered images when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(Object.values(images).flat());
    } else {
      setFilteredImages(images[selectedCategory] || []);
    }
  }, [selectedCategory, images]);

  // Slideshow functionality
  useEffect(() => {
    let interval;
    if (isPlaying && selectedImage) {
      interval = setInterval(() => {
        const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedImage, filteredImages]);

  const handlePrevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Category Selection */}
      {/* <div className="mb-6 flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-gray-200'
          }`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        {Object.values(IMAGE_CATEGORIES).map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div> */}

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {filteredImages.map((image, index) => (
          <div
            key={`${image.name}-${index}`}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.name}
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity">
              <p className="text-white opacity-0 group-hover:opacity-100 p-2 text-sm">
                {image.name}
              </p>
            </div> */}
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              className="text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button
              className="text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 3))}
            >
              <ZoomIn size={24} />
            </button>
            <button
              className="text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.5))}
            >
              <ZoomOut size={24} />
            </button>
            <button
              className="text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => {
                setSelectedImage(null);
                setZoomLevel(1);
                setIsPlaying(false);
              }}
            >
              <X size={24} />
            </button>
          </div>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={handlePrevImage}
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative overflow-auto max-h-screen max-w-screen-xl">
            <img
              src={selectedImage.src}
              alt={selectedImage.name}
              className="object-contain h-screen transition-transform duration-200"
              style={{
                transform: `scale(${zoomLevel})`,
                cursor: zoomLevel > 1 ? 'move' : 'auto'
              }}
            />
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
              {selectedImage.name}
            </div> */}
          </div>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={handleNextImage}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;