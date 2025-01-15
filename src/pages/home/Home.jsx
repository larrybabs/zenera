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
      <Carousel showStatus={false} autoPlay={true} infiniteLoop={true} swipeable={true}>

        <div>
          <div className="zen-hero2 w-screen h-[280px] md:h-[520px] lg:h-screen bg-contain bg-no-repeat lg:bg-cover flex flex-col justify-center ">
            <div className="text-start p-2 md:p-14 text-white ">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl w-full lg:w-[860px] mb-12 lg:leading-normal">
              Impacting Communities
              </h1>

              <a href="/reports" className="uppercase text-primary bg-white py-3 px-10 text-xl hover:bg-gray">
                    Download report
                  </a>
            </div>
          </div>
        </div>
        <div>
          <div className="zen-hero5 w-screen h-[280px] md:h-[520px] lg:h-screen bg-contain bg-no-repeat lg:bg-cover flex justify-center items-end">
          <div className=" p-2 md:p-14 text-white mx-auto text-center">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl w-full lg:w-[860px] mb-12 lg:leading-normal">
              Outstanding PR Agency of the Decade
              </h1>

              <a href="/press-releases" className="uppercase text-primary bg-white py-3 px-4 md:px-10 text-xl hover:bg-gray">
                    Read more
                  </a>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="zen-hero1 w-screen h-[280px] md:h-[520px] lg:h-screen bg-contain bg-no-repeat lg:bg-cover flex flex-col justify-center md:justify-end">
            <div className="text-start p-2 md:p-14 text-white flex md:items-end">
              <h1 className="font-bold md:text-4xl lg:text-5xl w-full lg:w-[860px] lg:leading-normal">
                Transforming communities through impactful contributions
              </h1>

              <a href="/reports">
                <div className="bg-primary ms-8 md:ms-32 rounded-full text-white ">
                  
                    <img src={Arrow} alt="arrow" className="max-w-24 md:max-w-full"/>
                  
                </div>
              </a>
            </div>
          </div>
        </div> */}
        {/* <div>
          <div className="zen-hero2 w-screen h-[280px] md:h-[520px] lg:h-screen bg-contain bg-no-repeat lg:bg-cover flex flex-col justify-center ">
            <div className="text-start p-2 md:p-14 text-white ">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl w-full lg:w-[860px] mb-12 lg:leading-normal">
              Transforming Communities
              </h1>

              <a href="/reports" className="uppercase text-primary bg-white py-3 px-10 text-xl hover:bg-gray">
                    Read more
                  </a>
            </div>
          </div>
        </div> */}
        <div>
          <div className="zen-hero1 w-screen h-[280px] md:h-[520px] lg:h-screen bg-contain bg-no-repeat lg:bg-cover flex justify-center items-end">
          <div className=" p-2 md:p-14 text-white mx-auto text-center">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl w-full lg:w-[860px] mb-12 lg:leading-normal">
              Inspiring agency of the year
              </h1>

              <a href="/press-releases" className="uppercase text-primary bg-white py-3 px-4 md:px-10 text-xl hover:bg-gray">
              Click here to read more
                  </a>
            </div>
          </div>
        </div>
        <div>
          <div className="zen-hero3 w-screen h-[280px] md:h-[520px] lg:h-screen bg-contain bg-no-repeat lg:bg-cover flex justify-center items-end">
          <div className=" p-2 md:p-14 text-white mx-auto text-center">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl w-full lg:w-[860px] mb-12 lg:leading-normal">
              Transforming Communities
              </h1>

              <a href="/reports" className="uppercase text-primary bg-white py-3 px-10 text-xl hover:bg-gray">
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

      <section className="text-center my-32">
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
          <div className="flex flex-wrap">
            <img src={Award1} alt="" className="w-80" />
            <img src={Award2} alt="" className="w-80" />
            <img src={Award3} alt="" className="w-80" />
            <img src={Award4} alt="" className="w-80" />
          </div>
          {/* <div className="flex">
          </div> */}
        </div>
        <div className="container mx-auto py-36 w-full flex justify-center max-w-1xl p-4">
          <iframe
            className="md:w-3/4 h-[550px] rounded-3xl shadow-lg"
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
