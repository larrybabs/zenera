import React, { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import IMCH from "../../assets/img/imcH.png";
import IMC1 from "../../assets/img/imc1.png";


export const Health = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="bg-service w-screen h-[280px] md:h-[345px] bg-contain bg-no-repeat lg:bg-cover flex justify-center items-center">
        <div className="text-center p-2 text-white">
          <h2 className="text-2xl md:text-4xl lg:text-7xl lg:w-[1100px]">Health and Wellness</h2>
        </div>
      </div>

      <div className="container mx-auto p-6 mt-40">
        <div className="relative">
          <img
            src={IMCH}
            alt="Innovation Makers Challenge"
            className="w-[460px]  object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white text-3xl">
              Innovation Makers Challenge 2023
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 mx-24 px-4 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            At Zenera, we believe in igniting the spark of innovation,
            especially in the minds of young Nigerians. That's why we proudly
            partnered with the Innovation Makers Challenge (IMC), an initiative
            of the Telecommunication and Technology Sustainability Working Group
            (TTSWG), aimed at empowering and amplifying tech and telecom talent
            across the country. Through brand management, strategic media
            campaigns, and expert publicity strategies, we helped elevate IMC’s
            visibility and impact.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  Our contributions resulted in the participation of 1,716
                  individuals from across Nigeria, with winners receiving a
                  total of 3,500,000 naira in grants.
                  <br />
                  <br />
                  The initiative featured the Innovators Challenge, which
                  showcased nationwide talent, and the high-stakes Innovators
                  Conference, where top boot camp participants competed for cash
                  prizes. This collaboration underscores our commitment to
                  fostering innovation and supporting the next generation of
                  tech talent in Nigeria
                </span>
                <button
                  onClick={handleReadMore}
                  className="text-blue-600 hover:underline ml-2"
                >
                  Show Less
                </button>
              </>
            ) : (
              <button
                onClick={handleReadMore}
                className="text-blue-600 hover:underline ml-2"
              >
                Read More
              </button>
            )}
          </p>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 ">
          <img src={IMC1} alt="Event  1" className="w-80 h-80 object-cover" />
          <img src={IMC1} alt="Event  2" className="w-80 h-80 object-cover" />
          <img src={IMC1} alt="Event  3" className="w-80 h-80 object-cover" />
        </div>
      </div>

      <div className="container mx-auto p-6 mt-40">
        <div className="relative flex justify-end">
          <img
            src={IMCH}
            alt="Innovation Makers Challenge"
            className="w-[460px]  object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white text-3xl">
              Sustainability In the Extractive Industries (SITEI) Conference
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 mx-24 px-4 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            Despite Nigeria’s abundant extractive wealth, local communities
            encounter significant challenges, such as human suffering and
            environmental degradation. Launched 13 years ago in collaboration
            with the Deputy High Commissioner of Canada, the SITEI Conference
            addresses critical issues within Nigeria’s extractive industry with
            practical solutions.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  Zenera Consulting has been a steadfast partner of SITEI
                  annually for the past 10 years, actively engaging stakeholders
                  such as the Nigeria Extractive Industries Transparency
                  Initiative (NEITI), the Federal Ministry of Mines and Steel
                  Development (FMMSD), and the Nigerian National Petroleum
                  Corporation (NNPC).
                  <br />
                  <br />
                  The SITEI initiative continues to make significant impacts,
                  including advancing transparency, implementing sectoral
                  reforms, and amplifying the voices of marginalised groups.
                  Through this conference, we aim to foster sustainable
                  practices and drive positive change within the extractive
                  industry in Nigeria.
                </span>
                <button
                  onClick={handleReadMore}
                  className="text-blue-600 hover:underline ml-"
                >
                  Show Less
                </button>
              </>
            ) : (
              <button
                onClick={handleReadMore}
                className="text-blue-600 hover:underline ml-2"
              >
                Read More
              </button>
            )}
          </p>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 ">
          <img src={IMC1} alt="Event  1" className="w-80 h-80 object-cover" />
          <img src={IMC1} alt="Event  2" className="w-80 h-80 object-cover" />
          <img src={IMC1} alt="Event  3" className="w-80 h-80 object-cover" />
        </div>
      </div>
     
      <Footer />
    </div>
  );
};
