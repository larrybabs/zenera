import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostsComponent from '../../components/Post';
import PressBg from "../../assets/img/PressBg.jpeg";

export const Press = () => {  

  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>

      <div className="relative w-full h-[200px] md:h-[480px] overflow-hidden group ">
        <img
          src={PressBg}
          alt="Background"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex bg-primary bg-opacity-40 items-center justify-center group-hover:bg-opacity-15 duration-500">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center group-hover:text-primary duration-500">
          Press Releases
          </h1>
        </div>
      </div>
        <PostsComponent />
      

      <Footer />
    </div>
  );
};
