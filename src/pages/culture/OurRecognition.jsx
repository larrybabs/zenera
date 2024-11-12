import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SideNavigation from "../../components/SideNav";
import ImageSlider from "../../components/ImageSlider";
import { importImagesFromContext } from "../../utils/imageLoader";

export const Recognitions = () => {
  const images = importImagesFromContext(
    require.context("../../assets/img", false, /\.(png|jpe?g|JPG)$/)
  );
  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="bg-service h-[80px] md:h-[300px] bg-contain bg-no-repeat md:bg-cover flex flex-col justify-center items-center">
        <h2 className="text-center mx-auto text-white text-2xl md:text-6xl ">
          Our Recognitions
        </h2>
      </div>
      <section>
        <div className="relative min-h-screen container mx-auto ">
          <SideNavigation />
          <div className="mt-6 md:-mt-80">
            <div className="flex">
              <div className="hidden md:block w-2/5"></div>
              <div className="container mx-auto p-4">
                <h2 className="text-3xl md:text-5xl">Awards & Certifications</h2>
                <p className="mt-2 md:mt-8 mb-14 md:w-[877px]">
                  We Enjoy the Journey Together
                </p>
                <div className= "md:max-w-[877px]">
                  <ImageSlider images={images.awd} />
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
                <p className="my-14 md:w-[877px]">
                  Despite Nigeria’s abundant extractive wealth, local
                  communities encounter significant challenges, such as human
                  suffering and environmental degradation. Launched 13 years ago
                  in collaboration
                </p>
                <div className="container mx-auto mt-12 w-full md:max-w-1xl">
                  <iframe
                    className="w-full h-[400px] shadow-lg"
                    src="https://www.youtube.com/embed/Uc_IeSgP_w4"
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
                <h2 className="text-3xl md:text-5xl">Media Mentions</h2>
                <p className="my-4 md:my-12 md:w-[877px]">Here are some social proofs</p>
                <a href="/https://zenera.zeneraprojects.com/press/press-releases/" className="underline text-blue-600 text-2xl flex">
                  Link to press{" "}
                  <svg
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.85452 23.436L22.6809 14.5813L21.3321 21.9442C21.3069 22.074 21.3076 22.2076 21.3343 22.3371C21.361 22.4666 21.4131 22.5896 21.4877 22.6989C21.5622 22.8081 21.6577 22.9015 21.7686 22.9736C21.8794 23.0457 22.0035 23.0951 22.1336 23.1189C22.2637 23.1427 22.3973 23.1405 22.5265 23.1124C22.6557 23.0842 22.7781 23.0307 22.8865 22.955C22.9949 22.8792 23.0872 22.7827 23.1581 22.671C23.229 22.5593 23.277 22.4347 23.2993 22.3044L25.0831 12.5669C25.1308 12.3061 25.073 12.0369 24.9223 11.8187C24.7717 11.6005 24.5405 11.4511 24.2797 11.4032L14.5423 9.61951C14.4131 9.59568 14.2804 9.5976 14.152 9.62517C14.0235 9.65275 13.9018 9.70543 13.7938 9.7802C13.6311 9.89258 13.5053 10.0507 13.4324 10.2345C13.3596 10.4183 13.3428 10.6197 13.3844 10.813C13.4259 11.0063 13.5238 11.183 13.6657 11.3207C13.8077 11.4584 13.9872 11.551 14.1817 11.5866L21.5447 12.9354L8.71827 21.7902C8.50001 21.9408 8.35055 22.172 8.30276 22.4329C8.25497 22.6938 8.31277 22.963 8.46345 23.1812C8.61413 23.3995 8.84533 23.549 9.10621 23.5967C9.36708 23.6445 9.63626 23.5867 9.85452 23.436Z"
                      fill="#5129EE"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
