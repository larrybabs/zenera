import React, { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ImageSlider from "../../components/ImageSlider";
import Spartan1 from "../../assets/sportsImg/spartan1.png";
import Series1 from "../../assets/sportsImg/series1.jpeg";
import JuniorGolf1 from "../../assets/sportsImg/juniorGolf1.jpeg";
import { importImagesFromContext } from "../../utils/imageLoader";

export const Sports = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const images = importImagesFromContext(
    require.context("../../assets/sportsImg", false, /\.(png|jpe?g|JPG)$/)
  );

  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="bg-service h-[80px] md:h-[300px] bg-contain bg-no-repeat md:bg-cover flex flex-col justify-center items-center">
        <h2 className="text-center mx-auto text-white text-2xl md:text-6xl ">
          Sports
        </h2>
      </div>

      <div className="container mx-auto p-4 mt-8 md:mt-40">
        <div className="relative">
          <img
            loading="lazy"
            src={Spartan1}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white text-3xl">
              Spartan Warriors Football Club
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 md:mx-24 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            We demonstrated our commitment to grassroots sports development by
            sponsoring The Spartan Warriors, a local football club in Lekki,
            Lagos State, for three years. This initiative aimed to support the
            growth of local talent in sports, providing a platform for young
            athletes to hone their skills, build their confidence, and pursue
            their passion for football.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  By investing in the Spartan Warriors, Zenera Consulting
                  contributed to the development of the local sports ecosystem,
                  fostering a culture of teamwork, discipline, and healthy
                  competition among young people in the community. This
                  sponsorship not only enhanced the club’s performance but also
                  had a positive impact on the lives of the players, helping
                  them to become positive role models and inspirational figures
                  in their community.
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
        <ImageSlider images={images.spartan} />
      </div>

      <div className="container mx-auto p-4 mt-40">
        <div className="relative flex justify-end">
          <img
            src={Series1}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white text-3xl">
              Series 1 Pro-Am Tournament
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 md:mx-24 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            Aimed at supporting professional golfers while enabling amateur
            golfers to improve their game, Zenera Consulting sponsored the
            Series 1 Pro-Am tournament at Ikoyi Club 1938, Lagos, on Sunday, 20
            March 2022.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  This event brought together amateurs and professionals from
                  various clubs to play in teams, while professional golfers
                  also competed against each other
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
        <ImageSlider images={images.series} />
      </div>
      <div className="container mx-auto p-4 mt-40">
        <div className="relative">
          <img
            src={JuniorGolf1}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white text-3xl">
              Junior Golf Tournament
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 md:mx-24 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            Recognising the critical role of child development in shaping the
            future, we sponsored the Ikoyi Club 2024 Junior Golf Development
            Programme.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  shaping the future, we sponsored the Ikoyi Club 2024 Junior
                  Golf Development Programme. Golf This programme culminated in
                  a Children’s Golf Tournament at Ikoyi Club on May 27, 2024. It
                  provided young minds with the opportunity to build confidence,
                  have fun, and learn valuable life skills.
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
        <ImageSlider images={images.juniorgolf} />
      </div>

      <div className="container mx-auto p-4 mt-40">
        <div className="relative flex justify-end">
          <img
            src={JuniorGolf1}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white text-3xl">
              Pro Golfer, Monday Eze
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 md:mx-24 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            Empowering young talent to reach their full potential is a key
            driver of progress and growth. One of the dividends of our
            investment in young talent development in golf was the professional
            achievement of one of our protégés, Monday Eze. After years of
            dedication and hard work, Eze officially joined the Professional
            Golfers Association of Nigeria, marking a significant milestone in
            his career.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  Our organisation has been committed to Eze’s development
                  byproviding financial support, mentorship, and training
                  opportunities both locally and internationally. We believe
                  that empowering young talent and supporting development
                  initiatives are crucial to building a better future for
                  Nigeria
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
        <ImageSlider images={images.juniorgolf} />
      </div>

      <Footer />
    </div>
  );
};
