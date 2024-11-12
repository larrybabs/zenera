import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SideNavigation from "../../components/SideNav";
import { VideoPlayer } from "../../components/VideoPlayer";
import Tgif1 from "../../assets/videos/tgif2.mp4";
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
      <div className="bg-service h-[80px] md:h-[300px] bg-contain bg-no-repeat md:bg-cover flex flex-col justify-center items-center">
        <h2 className="text-center mx-auto text-white text-2xl md:text-6xl ">
          Our Lifestyle
        </h2>
      </div>
      <section>
        <div className="relative min-h-screen container mx-auto ">
          <SideNavigation />
          <div className="mt-6 md:-mt-64">
            <div className="flex">
              <div className="hidden md:block w-2/5"></div>
              <div className="container mx-auto p-4">
                <h2 className="text-3xl md:text-5xl">Events & Activities</h2>
                <p className="mt-2 md:mt-8 mb-14 md:w-[877px]">
                  We Enjoy the Journey Together
                </p>
                <div className="md:max-w-[877px]">
                  <ImageSlider images={images.zcul} />
                  {/* <div className="bg-[#666662] shadow-lg w-[258px] h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4">placeholder</span>
                </div>
                
                <div className="bg-[#666662] shadow-lg w-[258px] h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4">placeholder</span>
                </div>
                <div className="bg-[#666662] shadow-lg w-[258px] h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4">placeholder</span>
                </div> */}
                </div>
                <div className="md:max-w-[950px] my-16">
                  <VideoPlayer
                    src={Tgif1}
                    // poster={TgifPoster}
                    className="md:h-[300px] shadow-lg"
                    autoPlay={false}
                    muted={true}
                    loop={false}
                    onEnded={() => console.log("Video finished")}
                  />
                  {/* <label>TGIF</label> */}
                </div>
              </div>
            </div>
            <div className="flex mt-24">
              <div className="hidden md:block w-2/5"></div>
              <div className="container mx-auto p-4">
                <h2 className="text-3xl md:text-5xl">Community Engagement</h2>
                <p className="mt-2 md:mt-8 mb-14 md:w-[877px]">
                  At Zenera Consulting, our core values guide the work we do. We
                  push boundaries daily, celebrate wins, and enjoy the journey
                  together.
                </p>
                <div className=" max-w-[877px]">
                  <ImageSlider images={images.pli} />
                  {/* <div className="bg-[#666662] shadow-lg w-[258px] h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4">placeholder</span>
                </div>
                <div className="bg-[#666662] shadow-lg w-[258px] h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4">placeholder</span>
                </div>
                <div className="bg-[#666662] shadow-lg w-[258px] h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4">placeholder</span>
                </div> */}
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
