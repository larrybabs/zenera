import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Leader from "../../assets/img/leader.png";
import Leader2 from "../../assets/leadershipImg/Leader2.jpeg";
import imc1 from "../../assets/leadershipImg/imc1.jpeg";
import Sitei1 from "../../assets/leadershipImg/sitei1.JPG";
import earthW1 from "../../assets/leadershipImg/earthWomen1.jpg";
import TLP1 from "../../assets/leadershipImg/TLP1.JPG";
import PLI1 from "../../assets/leadershipImg/PLI1.jpeg";
import SEV1 from "../../assets/leadershipImg/SEV1.jpeg";
import IMCH from "../../assets/img/imcH.png";
import IMC1 from "../../assets/img/imc1.png";
import ImageSlider from "../../components/ImageSlider";
import { importImagesFromContext } from "../../utils/imageLoader";

export const Leadership = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [isExpanded, setIsExpanded] = useState(false);

  const images = importImagesFromContext(
    require.context("../../assets/leadershipImg", false, /\.(png|jpe?g|JPG)$/)
  );

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row">
        <div>
          <h2 className="text-[#8B1818] text-6xl font-bold mb-4">Leadership</h2>
          <p className="text-2xl mb-12">
            Driving Business Growth Through Strategic Branding
          </p>
        </div>

        <div className="md:hidden">
          <img
            src={Leader}
            alt="Profita Event"
            className="w-full h-full rounded-2xl"
          />
        </div>

        <div className="hidden md:flex gap-4 md:ms-16 h-[500px] items-center justify-center">
          <div
            className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out cursor-pointer
            ${
              hoveredIndex === 0
                ? "w-2/4"
                : hoveredIndex === null
                ? "w-2/4"
                : "w-1/4"
            }`}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`w-full h-[500px] transition-all duration-500 ease-in-out
            ${hoveredIndex === 0 ? "scale-100" : "scale-150 translate-x-1/4"}`}
            >
              <img
                src={Leader}
                alt="Profita Event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-semibold">
                  The Leadership Project
                </h3>
                {/* <p className="text-sm">PROFITA Conference 2023</p> */}
              </div>
            </div>
          </div>

          <div
            className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out cursor-pointer
            ${hoveredIndex === 1 ? "w-2/4" : "w-1/4"}`}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`w-full h-[500px] transition-all duration-500 ease-in-out
            ${hoveredIndex === 1 ? "scale-100" : "scale-150 translate-y-1/4"}`}
            >
              <img
                src={Leader2}
                alt="Speaker Event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-semibold">
                  Innovation Makers Challenge 2023
                </h3>
                {/* <p className="text-sm">Leadership Conference 2023</p> */}
              </div>
            </div>
          </div>

          <div
            className={`relative hidden md:block overflow-hidden rounded-2xl transition-all duration-500 ease-in-out cursor-pointer
            ${hoveredIndex === 2 ? "w-2/4" : "w-1/4"}`}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`w-full h-[500px] transition-all duration-500 ease-in-out
            ${hoveredIndex === 2 ? "scale-100" : "scale-150 -translate-x-1/4"}`}
            >
              <img
                src={Leader}
                alt="Casual Event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-semibold">Community Engagement</h3>
                <p className="text-sm">Local Leadership Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 mt-40">
        <div className="relative">
          <img
            src={imc1}
            alt="Innovation Makers Challenge"
            className="md:w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white md:text-3xl">
              Innovation Makers Challenge 2023
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 md:mx-24 px-4 md:px-8">
          <p className="text-gray-700 mt-24 md:text-lg leading-relaxed">
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
        <ImageSlider images={images.imc} />
      </div>

      <div className="container mx-auto p-6 mt-40">
        <div className="relative flex justify-end">
          <img
            src={Sitei1}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white md:text-3xl">
              Sustainability In the Extractive Industries (SITEI) Conference
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 mx:mx-24 px-4 md:px-8">
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
        <ImageSlider images={images.sitei} />
      </div>
      <div className="container mx-auto p-6 mt-40">
        <div className="relative">
          <img
            src={earthW1}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white md:text-3xl">
              'Earth Women' Docudrama
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 md:mx-24 px-4 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            Consistent with our commitment to promoting gender equality and
            women’s empowerment in Nigeria, we are proud to have supported the
            development of ‘Earth Women’, a powerful documentary that sheds
            light on the struggles of women living in communities affected by
            extractive activities such as oil and gas exploration and mining. As
            a co-executive producer alongside veteran actress Ego Boyo, we were
            instrumental in bringing this important story to life.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  ‘Earth Women’ is an initiative of CSR-in-Action Advocacy, the
                  development-focused arm of the CSR-in-Action Group, and was
                  primarily funded by the Ford Foundation.
                  <br />
                  <br />
                  The docudrama earned an International Award at the Spotlight
                  Documentary Film Awards for its contribution to
                  sustainability, social justice, and gender inclusiveness
                  advocacy.
                  <br />
                  Through this documentary, we aim to raise awareness about the
                  challenges faced by women in these communities and inspire
                  action towards creating a more inclusive and equitable
                  society. By supporting this project, we are contributing to
                  empowering women and promoting gender inclusion in Nigeria.
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
        <ImageSlider images={images.earthwomen} />
      </div>

      <div className="container mx-auto p-6 mt-40">
        <div className="relative flex justify-end">
          <img
            src={TLP1}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-14 py-3  text-white md:text-3xl">
              The Leadership Project
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 md:mx-24 px-4 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            In early 2020, one of our business mentors advised us to team up
            with GLS4Business to enhance leadership development in corporate
            Nigeria. This collaboration led to the creation of The Leadership
            Project (TLP), which aims to provide African leaders with top-notch
            content, excellent networking, and fantastic mentoring
            opportunities.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  On 4th April 2020, we launched the first West African Business
                  Leaders Summit at the Civic Centre, Victoria Island, Lagos.
                  The event featured prominent speakers such as Mitch Barns
                  (former CEO, Nielsen Holdings, US), Horst Schulze, Carla
                  Harris, and Toyin Sanni, making it a highly impactful event.
                  <br />
                  <br />
                  Continuing our partnership with GLS and TLP, we have organised
                  three business summits, helping leaders achieve outstanding
                  results, grow intellectually, and genuinely care for their
                  teams while contributing to Nigeria’s economic growth. Through
                  TLP, we are committed to empowering leaders to tackle
                  challenges and drive growth, staying true to our mission of
                  fostering impactful leadership for communities across the
                  continent.
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
        <ImageSlider images={images.tlp} />
      </div>
      <div className="container mx-auto p-6 mt-40">
        <div className="relative">
          <img
            src={PLI1}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-14 py-3  text-white md:text-3xl">
              Project Light International
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 md:mx-24 px-4 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            To address the challenge of low employment in Nigeria and empower
            women to develop profitable enterprises, Zenera Consulting partners
            with Project Light International, a global initiative championing
            knowledge- based development in Africa. Leveraging our years of
            experience in navigating Nigeria’s local markets, we share
            time-tested principles for success, contributing to Project Light’s
            vision of raising 10,000 business leaders and improving social
            welfare at the grassroots.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  Through free seminars focused on efficient and
                  sustainablebusinesspractices, we empower entrepreneurs to
                  generate increasedfamilyincome and drive positive change
                  within their communities. Thiscollaboration aims to foster
                  entrepreneurial growth and enhancethesocio-economic landscape
                  across Africa.
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
        <ImageSlider images={images.pli} />
      </div>

      <div className="container mx-auto p-6 mt-40">
        <div className="relative flex justify-end">
          <img
            src={IMCH}
            alt="Innovation Makers Challenge"
            className="w-[460px]  object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-14 py-3  text-white md:text-3xl">
              Better Half Program
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 md:mx-24 px-4 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            Recognizing the critical role healthy families play in fostering a
            robust society, Zenera Consulting proudly partnered with renowned
            author and relationship counselor, Godman Akinlabi, in promoting
            sound family and relationship values through the Betterhalf Show.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  This non-religious and non-ethnic platform addresses crucial
                  issues faced by married couples and those in premarital
                  relationships, facilitating critical analysis and fostering
                  positive dialogues.
                  <br />
                  <br />
                  The show’s distinctive format features renowned relationship
                  experts and diverse audience participation, creating a vibrant
                  environment for the exchange of insightful perspectives and
                  practical strategies for building sustainable relationships.
                  This collaboration aligns with Zenera’s commitment to social
                  responsibility and positive change. By supporting platforms
                  like the Better half Show, we contribute to strengthening the
                  fabric of society, one empowered relationship at a time.
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

      <div className="container mx-auto p-6 mt-40">
        <div className="relative">
          <img
            src={SEV1}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-14 py-3  text-white md:text-3xl">
              Supporting Entrepreneurial Ventures
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 md:mx-24 px-4 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            As part of our commitment to fostering indigenous entrepreneurship,
            we partnered with Nutraboom, a health food production company
            founded by the innovative Oluwakemi Laniyan. Inspired by her desire
            to provide natural and nutritious meals for her children, Oluwakemi
            created NAFDAC- approved ready-to-eat Nutraboom cereals. Today, the
            company uses organic ingredients to develop a range of nutritious
            products for children and adults alike.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  Moved by Oluwakemi’s entrepreneurial journey, which she shared
                  at the “Made for More” women’s annual conference hosted by The
                  Jewels Ministry, we were compelled to support her vision.
                  <br />
                  <br />
                  Through a three-month brand repositioning program, we helped
                  Nutraboom refine its brand strategy, positioning the company
                  for growth and excellence. This partnership not only empowers
                  Oluwakemi to achieve her full potential but also inspires
                  other young entrepreneurs to pursue their dreams.
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
        <ImageSlider images={images.sev} />
      </div>
      <Footer />
    </div>
  );
};
