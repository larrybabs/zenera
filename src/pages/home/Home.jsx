import Navbar from "../../components/Navbar";
import Arrow from "../../assets/img/Arrow.svg";
import Group from "../../assets/img/zeneragroup.png";
import Award from "../../assets/img/award1.png";
import AwardIcon from "../../assets/img/award.png";

import ServiceCards from "../../components/ServiceCard";
import Footer from "../../components/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-img w-screen h-[280px] md:h-[520px] lg:h-screen bg-contain bg-no-repeat lg:bg-cover flex flex-col justify-end">
        <div className="text-start p-2 md:p-14 text-white flex items-end">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl lg:w-[860px] leading-normal">
            Transforming communities through impactful contributions
          </h1>

          <div>
            <div className="bg-primary ms-32 rounded-full text-white ">
              <a href="/reports">
                <img src={Arrow} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="text-center my-24">
        <h2 className="text-primary text-6xl w-3/5 mx-auto my-10 ">
          Empowering Brands with Strategic Communications.
        </h2>
        <img src={Group} alt="zenera group" className="my-24"/>
      </section>

      <section className="text-center my-24">
        <h2 className="text-primary text-6xl w-3/5 mx-auto my-10">
          Our Core Services
        </h2>
        <ServiceCards />
        <button className="uppercase bg-primary text-white p-4 rounded-md">
          All Services
        </button>
      </section>

      <section>
        <div className="bg-primary py-5 px-4 w-2/5 relative">
          <h1 className="text-white text-4xl">Awards & recognition</h1>
          <img src={AwardIcon} alt="" className="absolute -right-14 -top-16" />
        </div>
        <div className="my-10 container mx-auto">
          <div className="flex">
            <img src={Award} alt="" />
            <img src={Award} alt="" />
          </div>
          <div className="flex">
            <img src={Award} alt="" />
            <img src={Award} alt="" />
          </div>
        </div>
        <div className="container mx-auto my-20 w-full max-w-1xl">
          <iframe
            className="w-full h-[550px] rounded-3xl shadow-lg"
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
