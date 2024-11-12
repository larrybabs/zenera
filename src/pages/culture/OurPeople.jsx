import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SideNavigation from "../../components/SideNav";
import BlogImg from "../../assets/img/zenBlog.png";
import EX from "../../assets/img/ex.png";
import MP from "../../assets/img/mp.jpeg";
import Quote from "../../assets/img/Quote.svg";
// import TgifPoster from "../../assets/img/tgifPoster.png";
import videoFile from "../../assets/videos/TheLeadershipProject.mp4";
import Tgif1 from "../../assets/videos/tgif2.mp4";
// import Tgif2 from "../../assets/videos/tgif2.MOV";
import { VideoPlayer } from "../../components/VideoPlayer";
import ImageSlider from "../../components/ImageSlider";
import { importImagesFromContext } from "../../utils/imageLoader";

export const People = () => {
  const images = importImagesFromContext(
    require.context("../../assets/leadershipImg", false, /\.(png|jpe?g|JPG)$/)
  );
  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="bg-service h-[80px] md:h-[300px] bg-contain bg-no-repeat md:bg-cover flex flex-col justify-center items-center">
        <h2 className="text-center mx-auto text-white text-2xl md:text-6xl ">
          Our People
        </h2>
      </div>
      <section>
        <div className="relative min-h-screen container mx-auto ">
          <SideNavigation />
          <div className="mt-10 md:-mt-64">
            <div className="flex">
              <div className="hidden md:block w-2/5"></div>
              <div className="container mx-auto p-4">
                <h2 className="text-3xl md:text-5xl">Socials</h2>
                <p className="mt-4 md:mt-8 mb-14 md:w-[877px]">
                  Some short copy about socials... Despite Nigeria’s abundant
                  extractive wealth, local communities encounter significant
                  challenges, such as human suffering
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
                How we build our team
                </p>
                <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[877px]">
                  <div className="w-full text-center max-w-[300px] p-4">
                    <VideoPlayer
                      src={Tgif1}
                      poster={MP}
                      className="h-full shadow-lg"
                      autoPlay={false}
                      muted={true}
                      loop={false}
                      onEnded={() => console.log("Video finished")}
                    />
                  </div>
                  <div className="md:w-[510px]">
                    <p>
                      Some short copy about Manpower development:... Despite
                      Nigeria’s abundant extractive wealth, local communities
                      encounter significant challenges, such{" "}
                    </p>
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
                  Some short copy about socials... Despite Nigeria’s abundant
                  extractive wealth, local communities encounter significant
                  challenges, such as human suffering
                </p>
                <div className="text-center flex flex-col md:flex-row gap-2  md:justify-between w-full max-w-[877px]">
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
                  </div>
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
                <h2 className="text-3xl md:text-5xl">MP’s message</h2>
                <p className="mt-4 md:mt-8 mb-14 md:w-[877px]">
                  Hear directly from our MP.
                </p>
                <div className="text-white flex justify-between w-full max-w-[877px] ">
                  <div className="w-full mx-auto ">
                    <VideoPlayer
                      src={videoFile}
                      poster={MP}
                      className="max-h-[350px] shadow-lg"
                      autoPlay={false}
                      muted={false}
                      loop={false}
                      onEnded={() => console.log("Video finished")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-24 p-4">
              <div className="hidden md:block w-2/5"></div>
              <div>
                <h2 className="text-3xl md:text-5xl">Staff recognition</h2>
                <p className="mt-4 md:mt-8 mb-14 md:w-[877px]">
                  Our staff recognition{" "}
                </p>
                <div className=" max-w-[877px]">
                  <ImageSlider images={images.staff} />
                </div>
              </div>
            </div>
            <div className="flex mt-24 p-4">
              <div className="hidden md:block w-2/5"></div>
              <div>
                <h2 className="text-3xl md:text-5xl">Alumni</h2>
                <p className="mt-4 md:mt-8 mb-14 md:w-[877px]">
                  A message from our alumni{" "}
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
