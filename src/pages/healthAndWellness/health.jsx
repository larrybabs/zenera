import React, { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ImageSlider from "../../components/ImageSlider";
import HBC1 from "../../assets/healthImg/hbc1.jpg";
import Ubomi1 from "../../assets/healthImg/ubomi1.jpeg";
import Asido1 from "../../assets/healthImg/asido1.jpeg";
import Cada from "../../assets/healthImg/cada1.jpeg";
import { importImagesFromContext } from "../../utils/imageLoader";

export const Health = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const images = importImagesFromContext(
    require.context("../../assets/healthImg", false, /\.(png|jpe?g|JPG)$/)
  );

  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="bg-service w-screen h-[280px] md:h-[345px] bg-contain bg-no-repeat lg:bg-cover flex justify-center items-center">
        <div className="text-center p-2 text-white">
          <h2 className="text-2xl md:text-4xl lg:text-7xl lg:w-[1100px]">
            Health and Wellness
          </h2>
        </div>
      </div>

      <div className="container mx-auto p-6 mt-40">
        <div className="relative">
          <img
            src={HBC1}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white text-3xl">
              Hope Beats Cancer​
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 mx-24 px-4 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            In December 2018, we commemorated our fifth anniversary with the
            ‘Hope Beats Cancer’ awareness walk. This event sought to demystify
            cancer, often misconceived as a disease affecting only the affluent,
            and reduce avoidable mortality resulting from a lack of awareness.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  We organised a cancer awareness walk to educate the community
                  about the importance of early detection and treatment.
                  Furthermore, we hosted a ‘Message of Hope’ copywriting
                  competition on social media, awarding five winners with a
                  prize of N30,000 each. The winners recited their inspiring
                  messages at the event, disseminating hope and positivity.
                  <br />
                  <br />
                  By addressing cancer awareness and education, we aim to make a
                  positive impact on our community and contribute to a healthier
                  society. This initiative exemplifies our commitment to giving
                  back and creating a better world for all.
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
        <ImageSlider images={images.hbc} />
      </div>

      <div className="container mx-auto p-6 mt-40">
        <div className="relative flex justify-end">
          <img
            src={Ubomi1}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white text-3xl">
              Medical Outreach with UBOMI​
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 mx-24 px-4 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            As a media partner of the PISTIS Foundation, we have been privileged
            to bring hope and healthcare to underserved communities through the
            Ubomi initiative. Over the past four years, Ubomi has achieved the
            following:
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  <ul>
                    <li>
                      {" "}
                      21,011 medical interventions, including 1,675 medical
                      consultations, 2,313 laboratory screenings, 649 dental
                      procedures, and 929 eye consultations
                    </li>
                    <li>
                      700+ transformative surgeries, featuring 84 successful
                      eyes surgeries and 71 general surgeries, including fibroid
                      surgeries, addressing often-neglected health issues
                    </li>
                    <li>
                      616 eyeglasses dispensed, enhancing vision and
                      transforming lives, all at no cost to beneficiaries.
                    </li>
                  </ul>
                  <br />
                  We are proud to be part of this initiative, bringing health
                  care and hope to those who need it most.
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
        <ImageSlider images={images.ubomi} />
      </div>
      <div className="container mx-auto p-6 mt-40">
        <div className="relative">
          <img
            src={Asido1}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white text-3xl">
              Asido Foundation​
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 mx-24 px-4 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            Concerned about the rising threat of drug abuse on university
            campuses, Zenera Consulting actively responded to the call for
            action in collaboration with the University of Lagos (UNILAG)
            Student Affairs Division and KB Klub, a renowned socio-philanthropic
            organisation. Recognising the urgency of the issue, our Managing
            Partner, Meka Olowola, personally participated in the initiative,
            delivering an impactful presentation that highlighted the immediate
            and long-term detrimental effects of drug abuse.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  Beyond raising awareness, the event provided positive
                  alternatives and coping mechanisms for students facing
                  challenges, empowering them to make informed choices for their
                  well-being. This collaborative effort exemplifies Zenera’s
                  commitment to promoting safe and healthy environments for
                  young people and fostering positive change within our
                  communities.
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
        <ImageSlider images={images.asido} />
      </div>

      <div className="container mx-auto p-6 mt-40">
        <div className="relative flex justify-end">
          <img
            src={Cada}
            alt="Innovation Makers Challenge"
            className="w-[460px] h-[178px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#5d0a07] px-10 py-3  text-white text-3xl">
              Campaign Against Drug Abuse​
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 my-24 mx-24 px-4 md:px-8">
          <p className="text-gray-700 mt-24 text-lg leading-relaxed">
            Recognising the significance of mental wellbeing and its
            far-reaching impact on individuals, communities, and society at
            large, we partnered with the Asido Foundation, a Not-for-Profit
            organisation at the forefront of transforming mental healthcare in
            Nigeria.
            {isExpanded ? (
              <>
                <span className="block">
                  <br />
                  With our Managing Partner, Meka Olowola, as a member of the
                  Board, the Foundation encourages the development of resilience
                  through capacity building, mental health promotion
                  interventions, and youth empowerment initiatives to support
                  the attainment of everyone’s full potential, regardless of
                  their mental health.
                  <br />
                  <br />
                  Recently, representatives of the Foundation, including our
                  Managing Partner, conducted a sensitisation campaign to the
                  Attorney and Minister for Justice of the Federal Republic of
                  Nigeria.
                  <br />
                  <br />
                  They advocated for the decriminalisation of suicide in Nigeria
                  and urged the adoption of international standards for mental
                  health, noting that one in four people is at risk of a mental
                  disorder according to the World Health Organisation (WHO).
                  <br />
                  <br />
                  We also joined the Foundation for the launch of the book
                  “Optimal Mental Health: The promotion of Mental Health
                  Awareness”, seekingtoraise public awareness about mental
                  health, educate individuals onrecognising common symptoms, and
                  promote optimal emotional wellbeing. Asido now has chapters in
                  all 36 states in Nigeria.
                  <br />
                  <br />
                  Through this partnership, we aspire to contribute meaningfully
                  to the creation of a society where mental health is
                  prioritised and supported, ultimately enhancing the wellbeing
                  of individuals and communities alike.
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
        <ImageSlider images={images.cada} />
      </div>

      <Footer />
    </div>
  );
};
