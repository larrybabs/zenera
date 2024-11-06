import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SideNavigation from "../../components/SideNav";


export const Lifestyle = () => {
  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="bg-service w-screen h-[280px] md:h-[345px] bg-contain bg-no-repeat lg:bg-cover flex justify-center items-center">
        <div className="text-center p-2 text-white">
          <h2 className="text-2xl md:text-4xl lg:text-7xl lg:w-[1100px]">
            Our Lifestyle
          </h2>
        </div>
      </div>
      <section>
        <div className="relative min-h-screen container mx-auto ">
          <SideNavigation />
          <div className="-mt-64">
          
          <div className="flex">
            <div className="w-2/5"></div>
            <div>
              <h2 className="text-5xl">Events & Activities</h2>
              <p className="mt-8 mb-14 w-[877px]">
              We Enjoy the Journey Together
              </p>
              <div className="text-white flex justify-between w-full max-w-[877px]">
                <div className="bg-[#666662] shadow-lg w-[258px] h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4">placeholder</span>
                </div>
                <div className="bg-[#666662] shadow-lg w-[258px] h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4">placeholder</span>
                </div>
                <div className="bg-[#666662] shadow-lg w-[258px] h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4">placeholder</span>
                </div>
              </div>
              
            </div>
          </div>
          <div className="flex mt-24">
            <div className="w-2/5"></div>
            <div>
              <h2 className="text-5xl">Community Engagement</h2>
              <p className="mt-8 mb-14 w-[877px]">
              At Zenera Consulting, our core values guide the work we do. We push boundaries daily, celebrate wins, and enjoy the journey together.
              </p>
              <div className="text-white flex justify-between w-full max-w-[877px]">
                <div className="bg-[#666662] shadow-lg w-[258px] h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4">placeholder</span>
                </div>
                <div className="bg-[#666662] shadow-lg w-[258px] h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4">placeholder</span>
                </div>
                <div className="bg-[#666662] shadow-lg w-[258px] h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4">placeholder</span>
                </div>
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
