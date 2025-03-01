import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SideNavigation from "../../components/SideNav";
import BlogImg from "../../assets/img/zenBlog.png";
import EX from "../../assets/img/ex.png";
import PeopleBg from "../../assets/img/PeopleBg.jpg";
import Quote from "../../assets/img/Quote.svg";
import { VideoPlayer } from "../../components/VideoPlayer";
import ImageSlider from "../../components/ImageSlider";
import { importImagesFromContext } from "../../utils/imageLoader";

export const People = () => {
  const images = importImagesFromContext(
    require.context("../../assets/leadershipImg", false, /\.(png|jpe?g|JPG)$/)
  );

  const Tgif1 =
    "https://res.cloudinary.com/dxrjjhk9o/video/upload/v1736886832/tgif2_jsyjjd.mp4";
  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#FFF] h-[100px]"></div>
      {/* <div className="bg-service h-[80px] md:h-[300px] bg-contain bg-no-repeat md:bg-cover flex flex-col justify-center items-center">
        <h2 className="text-center mx-auto text-white text-2xl md:text-6xl ">
          Our People
        </h2>
      </div> */}
      <div className="relative w-full h-[200px] md:h-[480px] overflow-hidden group ">
        <img
          src={PeopleBg}
          alt="Background"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex bg-primary bg-opacity-60 items-center justify-center group-hover:bg-opacity-15 duration-500">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center group-hover:text-primary duration-500">
            Our People
          </h1>
        </div>
      </div>
      <section>
        <div className="relative min-h-screen container mx-auto ">
          <SideNavigation />
          <div className="mt-10 md:-mt-80">
            <div className="flex">
              <div className="hidden md:block w-2/5"></div>
              <div className="container mx-auto p-4">
                <h2 className="text-3xl md:text-5xl">Socials</h2>
                <p className="mt-4 md:mt-8 mb-14 md:w-[877px]">
                  We believe that great work stems from strong connections. Our
                  vibrant social culture fosters camaraderie, teamwork, and a
                  shared spirit of excellence beyond the boardroom.
                </p>
                <div className="text-center flex flex-col md:flex-row gap-2  justify-between  w-full max-w-[877px]">
                  <div className="w-full max-w-[300px]">
                    <VideoPlayer
                      src={Tgif1}
                      // poster={TgifPoster}
                      className="h-full shadow-lg"
                      autoPlay={false}
                      muted={true}
                      loop={false}
                      onEnded={() => console.log("Video finished")}
                    />
                    <label>TGIF</label>
                  </div>
                  <a href="/" className="w-full md:w-[276px]">
                    <img src={BlogImg} alt="blog post" loading="lazy" />
                    <label>TGIF</label>
                  </a>

                  <a href="/" className="mb-4 underline flex">
                    View more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex mt-24">
              <div className="hidden md:block w-2/5"></div>
              <div className="container mx-auto p-4">
                <h2 className="text-3xl md:text-5xl">Manpower development</h2>
                <p className="mt-4 md:mt-8 mb-14 md:w-[877px]">
                  At Zenera, growth is intentional. We invest in continuous
                  learning, equipping our people with cutting-edge skills to
                  lead, innovate, and excel in an evolving business landscape.
                </p>
                <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[877px]">
                  {/* <div className="w-full text-center max-w-[300px] p-4">
                    <VideoPlayer
                      src={Tgif1}
                      poster={MP}
                      className="h-full shadow-lg"
                      autoPlay={false}
                      muted={true}
                      loop={false}
                      onEnded={() => console.log("Video finished")}
                    />
                  </div> */}

                  <div className="md:w-[510px]">
                    {/* <p>
                      Some short copy about Manpower development:... Despite
                      Nigeria’s abundant extractive wealth, local communities
                      encounter significant challenges, such{" "}
                    </p> */}
                    {/* <a href="/" className="mt-5 underline flex">
                      View more
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-24 p-4">
              <div className="hidden md:block w-2/5"></div>
              <div className="container mx-auto p-4">
                <h2 className="text-3xl md:text-5xl">Employee Stories</h2>
                <p className="mt-8 mb-14 md:w-[877px]">
                  Every Zenera journey is a story of passion, resilience, and
                  achievement. We celebrate the unique experiences that shape
                  our people and drive our collective success.
                </p>
                <div className="text-center flex flex-col md:flex-row gap-2  md:justify-between w-full max-w-[877px]">
                  <div className="container mx-auto mt-12 w-full md:max-w-1xl">
                    <iframe
                      className="w-full h-[400px] shadow-lg"
                      src="https://www.youtube.com/embed/3qyGsCWTElw"
                      title="Zenera Wins Marketing Edge 2024: Outstanding PR Agency of the Decade!"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                  {/* <div className="w-full max-w-[300px]">
                    <VideoPlayer
                      src={Tgif1}
                      // poster={TgifPoster}
                      className="h-full shadow-lg"
                      autoPlay={false}
                      muted={true}
                      loop={false}
                      onEnded={() => console.log("Video finished")}
                    />
                    <label>Employee</label>
                  </div>
                  <div className="w-full max-w-[300px] ">
                    <VideoPlayer
                      src={Tgif1}
                      // poster={TgifPoster}
                      className="h-full shadow-lg"
                      autoPlay={false}
                      muted={true}
                      loop={false}
                      onEnded={() => console.log("Video finished")}
                    />
                    <label>Employee</label>
                  </div>
                  <div className="w-full max-w-[300px] ">
                    <VideoPlayer
                      src={Tgif1}
                      // poster={TgifPoster}
                      className="h-full shadow-lg"
                      autoPlay={false}
                      muted={true}
                      loop={false}
                      onEnded={() => console.log("Video finished")}
                    />
                    <label>Employee</label>
                  </div> */}
                  {/* <a href="/" className="w-full md:w-[246px]">
                    <img src={BlogImg} alt="blog post" />
                    <label>Samson Adegoke - IT</label>
                  </a>
                  <a href="/" className="w-full md:w-[246px]">
                    <img src={BlogImg} alt="blog post" />
                    <label>Samson Adegoke - IT</label>
                  </a>
                  <a href="/" className="w-full md:w-[246px]">
                    <img src={BlogImg} alt="blog post" />
                    <label>Samson Adegoke - IT</label>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="flex mt-24 p-4">
              <div className="hidden md:block w-2/5"></div>
              <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl">
                  Long Term Service Award.
                </h2>
                {/* <p className="mt-4 md:mt-8 mb-14 md:w-[877px]">
                  Hear directly from our MP.
                </p> */}
                <div className="text-white flex justify-between w-full max-w-[877px] ">
                  <div className="container mx-auto mt-12 w-full md:max-w-1xl">
                    <iframe
                      className="w-full h-[400px] shadow-lg"
                      src="https://www.youtube.com/embed/3qyGsCWTElw"
                      title="Zenera Wins Marketing Edge 2024: Outstanding PR Agency of the Decade!"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-24 p-4">
              <div className="hidden md:block w-2/5"></div>
              <div>
                <h2 className="text-3xl md:text-5xl">
                  Staff Recognition/Awards
                </h2>
                <p className="mt-4 md:mt-8 mb-14 md:w-[877px]">
                  Excellence deserves to be celebrated. Our recognition culture
                  ensures that outstanding contributions never go unnoticed,
                  inspiring a relentless pursuit of greatness.
                </p>
                <div className=" max-w-[877px]">
                  <ImageSlider images={images.req} />
                </div>
              </div>
            </div>
            <div className="flex mt-24 p-4">
              <div className="hidden md:block w-2/5"></div>
              <div>
                <h2 className="text-3xl md:text-5xl">Alumni</h2>
                <p className="mt-4 md:mt-8 mb-14 md:w-[877px]">
                  Once Zenera, always Zenera. Our alumni network is a testament
                  to the enduring impact of our culture, fostering lifelong
                  connections and professional growth.
                </p>
                <div className=" flex flex-col md:flex-row gap-2 justify-between w-full max-w-[877px]">
                  <div className="w-full md:w-[260px] shadow-lg p-5">
                    <img
                      src={Quote}
                      alt="zenera ex employee"
                      className="opacity-10"
                    />
                    <p className="text-sm">
                      Some short copy about socials... Despite Nigeria’s
                      abundant extractive wealth, local communities encounter
                      significant challenges, such as human suffering
                    </p>
                    <hr className="opacity-10 my-3" />
                    <div className="flex gap-2">
                      <img src={EX} alt="zenera ex employee" />
                      <div>
                        <h2 className="font-semibold">Samson Adegoke</h2>
                        <p className="text-sm opacity-60">Ex Zenera</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[260px] shadow-lg p-5">
                    <img
                      src={Quote}
                      alt="zenera ex employee"
                      className="opacity-10"
                    />
                    <p className="text-sm">
                      Some short copy about socials... Despite Nigeria’s
                      abundant extractive wealth, local communities encounter
                      significant challenges, such as human suffering
                    </p>
                    <hr className="opacity-10 my-3" />
                    <div className="flex gap-2">
                      <img src={EX} alt="zenera ex employee" />
                      <div>
                        <h2 className="font-semibold">Samson Adegoke</h2>
                        <p className="text-sm opacity-60">Ex Zenera</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[260px] shadow-lg p-5">
                    <img
                      src={Quote}
                      alt="zenera ex employee"
                      className="opacity-10"
                    />
                    <p className="text-sm">
                      Some short copy about socials... Despite Nigeria’s
                      abundant extractive wealth, local communities encounter
                      significant challenges, such as human suffering
                    </p>
                    <hr className="opacity-10 my-3" />
                    <div className="flex gap-2">
                      <img src={EX} alt="zenera ex employee" />
                      <div>
                        <h2 className="font-semibold">Samson Adegoke</h2>
                        <p className="text-sm opacity-60">Ex Zenera</p>
                      </div>
                    </div>
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
