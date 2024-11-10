import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SideNavigation from "../../components/SideNav";
import BlogImg from "../../assets/img/zenBlog.png";
import MP from "../../assets/img/mp.jpeg";
// import TgifPoster from "../../assets/img/tgifPoster.png";
import videoFile from "../../assets/videos/TheLeadershipProject.mp4";
import Tgif1 from "../../assets/videos/tgif1.MOV";
// import Tgif2 from "../../assets/videos/tgif2.MOV";
import { VideoPlayer } from "../../components/VideoPlayer";

export const People = () => {
  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="bg-service w-screen h-[280px] md:h-[345px] bg-contain bg-no-repeat lg:bg-cover flex justify-center items-center">
        <div className="text-center p-2 text-white">
          <h2 className="text-2xl md:text-4xl lg:text-7xl lg:w-[1100px]">
            Our People
          </h2>
        </div>
      </div>
      <section>
        <div className="relative min-h-screen container mx-auto ">
          <SideNavigation />
          <div className="md:-mt-64">
            <div className="flex">
              <div className="hidden md:block w-2/5"></div>
              <div>
                <h2 className="text-5xl">Socials</h2>
                <p className="mt-8 mb-14 md:w-[877px]">
                  Some short copy about socials... Despite Nigeria’s abundant
                  extractive wealth, local communities encounter significant
                  challenges, such as human suffering
                </p>
                <div className="text-center flex flex-col md:flex-row gap-2  justify-between  w-full max-w-[877px]">
                  <div className="w-full max-w-[300px] p-4">
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
                    <img src={BlogImg} alt="blog post" />
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
              <div>
                <h2 className="text-5xl">Manpower development</h2>
                <p className="mt-8 mb-14 md:w-[877px]">
                  Some short copy about socials... Despite Nigeria’s abundant
                  extractive wealth, local communities encounter significant
                  challenges, such as human suffering
                </p>
                <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[877px]">
                  <a href="/" className="w-full md:w-[276px]">
                    <img src={BlogImg} alt="blog post" />
                  </a>
                  <div className="md:w-[510px]">
                    <p>
                      Some short copy about Manpower development:... Despite
                      Nigeria’s abundant extractive wealth, local communities
                      encounter significant challenges, such{" "}
                    </p>
                    <a href="/" className="mt-5 underline flex">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-24 p-4">
              <div className="hidden md:block w-2/5"></div>
              <div>
                <h2 className="text-5xl">Employee Stories</h2>
                <p className="mt-8 mb-14 md:w-[877px]">
                  Some short copy about socials... Despite Nigeria’s abundant
                  extractive wealth, local communities encounter significant
                  challenges, such as human suffering
                </p>
                <div className="text-center flex flex-col md:flex-row gap-2  md:justify-between w-full max-w-[877px]">
                  <a href="/" className="w-full md:w-[246px]">
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
                  </a>
                </div>
              </div>
            </div>
            <div className="flex mt-24 p-4">
              <div className="hidden md:block w-2/5"></div>
              <div>
                <h2 className="text-5xl">MP’s message</h2>
                <p className="mt-8 mb-14 md:w-[877px]">
                  Hear directly from our MP.
                </p>
                <div className="text-white flex justify-between w-full max-w-[877px] ">
                  <div className="w-full mx-auto p-4">
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
                <h2 className="text-5xl">Staff recognition</h2>
                <p className="mt-8 mb-14 md:w-[877px]">
                  Our staff recognition{" "}
                </p>
                <div className="text-center flex flex-col md:flex-row gap-2 justify-between w-full max-w-[877px]">
                  <a href="/" className="w-full md:w-[276px]">
                    <img src={BlogImg} alt="blog post" />
                    <label>TGIF</label>
                  </a>
                  <a href="/" className="w-full md:w-[276px]">
                    <img src={BlogImg} alt="blog post" />
                    <label>TGIF</label>
                  </a>

                  <a href="/" className="mb-4 underline flex">
                    View more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex mt-24 p-4">
              <div className="hidden md:block w-2/5"></div>
              <div>
                <h2 className="text-5xl">Alumni</h2>
                <p className="mt-8 mb-14 md:w-[877px]">
                  A message from our alumni{" "}
                </p>
                <div className="text-center flex flex-col md:flex-row gap-2 justify-between w-full max-w-[877px]">
                  <a href="/" className="w-full md:w-[246px]">
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
                  </a>
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
