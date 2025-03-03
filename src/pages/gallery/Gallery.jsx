import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ImageGallery from '../../components/ImageGallery';
import GalleryBg from '../../assets/img/bg-about.png'


const Gallery = () => {

  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#FFF] h-[80px]"></div>
      {/* <div className="bg-about h-[80px] md:h-[300px] bg-contain bg-no-repeat md:bg-cover flex flex-col justify-center items-center">
        <h2 className="text-center mx-auto text-white text-2xl md:text-6xl ">
          Gallery
        </h2>
      </div> */}
      <div className="relative w-full h-[200px] md:h-[350px] overflow-hidden group ">
        <img
          src={GalleryBg}
          alt="Background"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Gallery
            </h1>
        </div>
      </div>
      <div className='mt-10 md:mt-32'>
      <ImageGallery />
      </div>
      

      <Footer />
    </div>
  );
};


export default Gallery;