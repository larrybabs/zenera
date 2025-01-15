import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ImageGallery from '../../components/ImageGallery';


const Gallery = () => {

  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#FFF] h-[80px]"></div>
      <div className="bg-about h-[80px] md:h-[300px] bg-contain bg-no-repeat md:bg-cover flex flex-col justify-center items-center">
        <h2 className="text-center mx-auto text-white text-2xl md:text-6xl ">
          Gallery
        </h2>
      </div>
      <div className='mt-10 md:mt-36'>
      <ImageGallery />
      </div>
      

      <Footer />
    </div>
  );
};


export default Gallery;