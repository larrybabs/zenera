import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SideNavigation from "../../components/SideNav";
import BlogImg from "../../assets/img/zenBlog.png"

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
          <div className="-mt-64">
            <div className="flex">
              <div className="w-2/5"></div>
              <div>
                <h2 className="text-5xl">Socials</h2>
                <p className="mt-8 mb-14 w-[877px]">
                Some short copy about socials... Despite Nigeria’s abundant extractive wealth, local communities encounter significant challenges, such as human suffering
                </p>
                <div className="text-center flex justify-between items-end w-full max-w-[877px]">
                  <a href="/" className="w-[276px]">
                    <img src={BlogImg} alt="blog post" />
                  <label>
                    TGIF
                  </label>
                  </a>
                  <a href="/" className="w-[276px]">
                    <img src={BlogImg} alt="blog post" />
                  <label>
                    TGIF
                  </label>
                  </a>
                  
                  <a href="/" className="mb-4 underline flex">
                    View more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex mt-24">
              <div className="w-2/5"></div>
              <div>
                <h2 className="text-5xl">Manpower development</h2>
                <p className="mt-8 mb-14 w-[877px]">
                Some short copy about socials... Despite Nigeria’s abundant extractive wealth, local communities encounter significant challenges, such as human suffering
                </p>
                <div className="flex justify-between items-start w-full max-w-[877px]">
                  <a href="/" className="w-[276px]">
                    <img src={BlogImg} alt="blog post" />
                  </a>
                  <div className="w-[510px]">
                    <p>Some short copy about Manpower development:... Despite Nigeria’s abundant extractive wealth, local communities encounter significant challenges, such </p>
                  <a href="/" className="mt-5 underline flex">
                    View more
                  </a>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="flex mt-24">
              <div className="w-2/5"></div>
              <div>
                <h2 className="text-5xl">Employee Stories</h2>
                <p className="mt-8 mb-14 w-[877px]">
                Some short copy about socials... Despite Nigeria’s abundant extractive wealth, local communities encounter significant challenges, such as human suffering
                </p>
                <div className="text-center flex justify-between items-end w-full max-w-[877px]">
                  <a href="/" className="w-[246px]">
                    <img src={BlogImg} alt="blog post" />
                  <label>
                  Samson Adegoke - IT
                  </label>
                  </a>
                  <a href="/" className="w-[246px]">
                    <img src={BlogImg} alt="blog post" />
                  <label>
                  Samson Adegoke - IT
                  </label>
                  </a>
                  <a href="/" className="w-[246px]">
                    <img src={BlogImg} alt="blog post" />
                  <label>
                  Samson Adegoke - IT
                  </label>
                  </a>
                  
                  
                </div>
              </div>
            </div>
            <div className="flex mt-24">
              <div className="w-2/5"></div>
              <div>
                <h2 className="text-5xl">MP’s message</h2>
                <p className="mt-8 mb-14 w-[877px]">
                Hear directly from our MP.
                </p>
                <div className="text-white flex justify-between w-full max-w-[877px] ">
                  <div className="bg-[#666662] shadow-lg w-full h-[384px] flex flex-col items-center justify-center">
                    <span className="mt-4">placeholder</span>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="flex mt-24">
              <div className="w-2/5"></div>
              <div>
                <h2 className="text-5xl">Staff recognition</h2>
                <p className="mt-8 mb-14 w-[877px]">
                Our staff recognition                </p>
                <div className="text-center flex justify-between items-end w-full max-w-[877px]">
                  <a href="/" className="w-[276px]">
                    <img src={BlogImg} alt="blog post" />
                  <label>
                    TGIF
                  </label>
                  </a>
                  <a href="/" className="w-[276px]">
                    <img src={BlogImg} alt="blog post" />
                  <label>
                    TGIF
                  </label>
                  </a>
                  
                  <a href="/" className="mb-4 underline flex">
                    View more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex mt-24">
              <div className="w-2/5"></div>
              <div>
                <h2 className="text-5xl">Alumni</h2>
                <p className="mt-8 mb-14 w-[877px]">
                A message from our alumni                </p>
                <div className="text-center flex justify-between items-end w-full max-w-[877px]">
                  <a href="/" className="w-[246px]">
                    <img src={BlogImg} alt="blog post" />
                  <label>
                  Samson Adegoke - IT
                  </label>
                  </a>
                  <a href="/" className="w-[246px]">
                    <img src={BlogImg} alt="blog post" />
                  <label>
                  Samson Adegoke - IT
                  </label>
                  </a>
                  <a href="/" className="w-[246px]">
                    <img src={BlogImg} alt="blog post" />
                  <label>
                  Samson Adegoke - IT
                  </label>
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
