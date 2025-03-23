import Navbar from "../../components/Navbar";
// import Arrow from "../../assets/img/Arrow.svg";
// import Group from "../../assets/img/zeneragroup.png";
import Award1 from "../../assets/img/AWD1.png";
import Award2 from "../../assets/img/AWD2.png";
import Award3 from "../../assets/img/AWD3.png";
import Award4 from "../../assets/img/AWD4.png";
import AwardIcon from "../../assets/img/award.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ServiceCards from "../../components/ServiceCard";
import Footer from "../../components/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div> */}
      <Carousel
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
      >
        <div>
          <div className="zen-hero2 w-screen h-[50vh] min-h-[100px] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen bg-contain sm:bg-cover bg-center bg-no-repeat flex flex-col justify-center items-start">
            <div className="p-4 sm:p-6 md:p-10 lg:p-14 xl:p-20 text-white w-full max-w-7xl text-start">
              <h1 className=" font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl max-w-[90%] sm:max-w-[860px] mb-6 sm:mb-8 lg:mb-12 leading-tight sm:leading-snug lg:leading-normal">
                Impacting <br /> Communities
              </h1>
              <a
                href="/reports"
                className=" uppercase text-primary bg-white py-2 px-6 sm:py-3 sm:px-8 md:px-10 text-base sm:text-lg md:text-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Download report
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="zen-hero5 w-screen h-[50vh] min-h-[280px] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen bg-contain sm:bg-cover bg-center bg-no-repeat flex justify-center items-end">
            <div className="mb-28 md:mb-0 p-4 sm:p-6 md:p-10 lg:p-14 xl:p-20 text-white mx-auto text-center w-full max-w-7xl">
              <a
                href="/press-releases"
                className="uppercase text-primary bg-white py-2 px-6 sm:py-3 sm:px-8 md:px-10 text-xs sm:text-lg md:text-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="zen-hero1 w-screen h-[50vh] min-h-[280px] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen bg-contain sm:bg-cover bg-center bg-no-repeat flex justify-center items-end">
            <div className="mb-28 md:mb-0 p-4 sm:p-6 md:p-10 lg:p-14 xl:p-20 text-white mx-auto text-center w-full max-w-7xl">
              <a
                href="/press-releases"
                className="uppercase text-primary bg-white py-2 px-6 sm:py-3 sm:px-8 md:px-10 text-xs sm:text-lg md:text-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Click here to read more
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="zen-hero3 w-screen h-[50vh] min-h-[280px] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen bg-contain sm:bg-cover bg-center bg-no-repeat flex justify-center items-end">
            <div className="mb-28 md:mb-0 p-4 sm:p-6 md:p-10 lg:p-14 xl:p-20 text-white w-full max-w-7xl">
              <h1 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl sm:max-w-[860px] md:max-w-full mb-6 sm:mb-8 lg:mb-12 leading-tight sm:leading-snug lg:leading-normal">
                Transforming Communities
              </h1>
              <a
                href="/reports"
                className="uppercase text-primary bg-white py-2 px-6 sm:py-3 sm:px-8 md:px-10 text-xs sm:text-lg md:text-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </Carousel>

      {/* <section className="text-center md:my-24">
        <h2 className="text-primary text-3xl md:text-6xl w-full md:w-3/5 mx-auto my-10 ">
          Empowering Brands with Strategic Communications.
        </h2>
        <img src={Group} alt="zenera group" className="md:my-24" />
      </section> */}

      <section className="text-center md:my-32">
        <h2 className="text-primary text-3xl md:text-6xl md:w-3/5 mx-auto my-10">
          Our Core Services
        </h2>
        <ServiceCards />
        <a href="/services" className="uppercase bg-primary text-white p-4">
          All Services
        </a>
      </section>

      <section className="pt-32">
        <div className="bg-primary py-5 px-4 w-2/3 md:w-2/5 relative">
          <h1 className="text-white md:text-4xl">Awards & recognition</h1>
          <img
            src={AwardIcon}
            alt=""
            className="absolute -right-14 -top-16 hidden md:block"
          />
        </div>
        <div className="my-10 container mx-auto">
          <div className="flex flex-wrap justify-center">
            <img src={Award1} alt="" className="w-80" />
            <img src={Award2} alt="" className="w-80" />
            <img src={Award3} alt="" className="w-80" />
            <img src={Award4} alt="" className="w-80" />
          </div>
          {/* <div className="flex">
          </div> */}
        </div>
        <div className="md:py-36 w-full flex justify-center p-4">
          <iframe
            className="w-3/4 h-[460px] md:h-[550px] rounded-3xl shadow-lg"
            src="https://www.youtube.com/embed/Uc_IeSgP_w4"
            title="Zenera Wins Marketing Edge 2024: Outstanding PR Agency of the Decade!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      {/* <section className="text-center my-24">
        <h2 className="text-primary text-6xl w-3/5 mx-auto my-10">
          Our Instagram
        </h2>
      </section> */}

      <Footer />
    </div>
  );
};
