import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SideNavigation from "../../components/SideNav";
import LifestyleBg from "../../assets/img/Lifestyle.JPG"
import ImageSlider from "../../components/ImageSlider";
import { importImagesFromContext } from "../../utils/imageLoader";

export const Lifestyle = () => {
  const images = importImagesFromContext(
    require.context("../../assets/leadershipImg", false, /\.(png|jpe?g|JPG)$/)
  );
  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="relative w-full h-[200px] md:h-[350px] overflow-hidden group ">
          <img
            src={LifestyleBg}
            alt="Background"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex bg-primary bg-opacity-60 items-center justify-center group-hover:bg-opacity-15 duration-500">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center group-hover:text-primary duration-500">
            Our Lifestyle
            </h1>
          </div>
        </div>

      <section>
        <div className="relative min-h-screen container mx-auto ">
          <SideNavigation />
          <div className="mt-6 md:-mt-80">
            <div className="flex">
              <div className="hidden md:block w-2/5"></div>
              <div className="container mx-auto p-4">
                <h2 className="text-3xl md:text-5xl">Events & Activities</h2>
                <p className="mt-2 md:mt-8 mb-14 md:w-[877px]">
                We believe in the power of connection and celebration. From dynamic team retreats to industry-leading conferences, our events inspire collaboration, creativity, and excellence.
                </p>
                <div className="md:max-w-[877px]">
                  <ImageSlider images={images.zcul} />
                </div>
                <div className="container mx-auto mt-12 w-full md:max-w-1xl">
                  <iframe
                    className="w-full h-[400px] shadow-lg"
                    src="https://www.youtube.com/embed/FurSWVyuPlo"
                    title="Zenera Wins Marketing Edge 2024: Outstanding PR Agency of the Decade!"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="flex mt-24">
              <div className="hidden md:block w-2/5"></div>
              <div className="container mx-auto p-4">
                <h2 className="text-3xl md:text-5xl">Community Engagement</h2>
                <p className="mt-2 md:mt-8 mb-14 md:w-[877px]">
                Our impact goes beyond business. Through meaningful partnerships and initiatives, we actively contribute to societal growth, empowering communities and shaping a better future.
                </p>
                <div className=" max-w-[877px]">
                  <ImageSlider images={images.pli} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
