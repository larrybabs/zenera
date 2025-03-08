import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Service1 from "../../assets/img/INVESTOR-RELATIONS.jpg";
import Service2 from "../../assets/img/SUSTAINABLE-BRANDING.jpg";
import Service3 from "../../assets/img/COMMUNITY-ENGAGEMENT.jpg";
import Service4 from "../../assets/img/ADVERTISING.jpg";
import Service5 from "../../assets/img/PUBLIC-RELATIONS.jpg";
import Service6 from "../../assets/img/COMMUNICATION-ADVISORY.jpg";
import ServiceBg from "../../assets/img/Our-Services.jpg";
// import Accordion from "../../components/Accordion";

// Array of service data
const servicesData = [
  {
    id: 4,
    title: "Advertising",
    description:
      "We employ the best resources to achieve deeply resonating advertising campaigns for our clients. We leverage existing key relationships to strategically target our clients’ key audiences.",
    imgSrc: Service4,
  },
  {
    id: 5,
    title: "Public Relations",
    description:
      "We provide winning public relations services to our client base spanning across Nigeria and beyond. With a robust wealth of experience and deep media competencies, we deliver impactful results.",
    imgSrc: Service5,
  },
  {
    id: 6,
    title: "Investor Relations",
    description:
      "Our mission is to help clients connect with financial audiences in a way that's engaging, credible, and informative. We provide high-level strategic investor relations services.",
    imgSrc: Service1,
  },
  {
    id: 1,
    title: "Communications Advisory and Change Management",
    description:
      "Corporate and public communications play a critical role in how critical stakeholders—government, customers, investors and the public—receive brands and programs. We design and execute deliberate and research-driven communication strategies.",
    imgSrc: Service6,
  },
  {
    id: 2,
    title: "Sustainable Brand Strategy",
    description:
      "We help to clearly define areas of focus, map out measurable metrics before implementation, provide clear data collation processes, and then handhold through the culminating documentation, analysis and reporting process.",
    imgSrc: Service2,
  },
  {
    id: 3,
    title: "Stakeholder and Community Engagement",
    description:
      "We gather, dissect, and analyse data, which helps us to determine and deploy strategies that work for each sub-group whether within communities or in business value chains.",
    imgSrc: Service3,
  },
];

export const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="relative w-full h-[200px] md:h-[480px] overflow-hidden group ">
        <img
          src={ServiceBg}
          alt="Background"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex bg-primary bg-opacity-60 items-center justify-center  duration-500">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center duration-500">
          Our Services
          </h1>
        </div>
      </div>
      <section>
        <h2 className="px-2 text-primary text-center capitalize text-2xl md:text-4xl md:w-3/5 mx-auto md:my-28 leading-normal">
          Driving business growth through strategic branding and stakeholder
          engagement.
        </h2>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="relative overflow-hidden flex justify-end items-end md:w-80 h-[490px] group bg-cover bg-center"
                style={{ backgroundImage: `url(${service.imgSrc})` }}
              >
                {/* Overlay and Content */}
                <div className="" />
                <div className="relative bg-white h-80 p-6  m-4 shadow-lg">
                  <h3 className="text-xl font-semibold text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-black">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="container mx-auto">
        <h2 className="text-3xl font-bold">Why Zenera?</h2>

        <p className="text-2xl my-4">Zenera Consulting is that unicorn agency that possesses all three attributes in-house, making us the constantly preferred partner of choice for clients.</p>
      <div>
        <Accordion />
      </div>
      <button className="uppercase flex mx-auto mt-10 gap-2 bg-primary text-white px-10 p-4 rounded-md">
          Contact us
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 13H18.586L13.293 18.293C13.1984 18.3855 13.1232 18.4958 13.0715 18.6176C13.0199 18.7393 12.993 18.8701 12.9922 19.0024C12.9915 19.1347 13.017 19.2658 13.0673 19.3881C13.1176 19.5104 13.1916 19.6216 13.2852 19.7151C13.3787 19.8086 13.4899 19.8826 13.6122 19.9329C13.7345 19.9832 13.8656 20.0087 13.9979 20.0079C14.1302 20.0071 14.261 19.9802 14.3827 19.9285C14.5045 19.8769 14.6148 19.8016 14.7072 19.707L21.7073 12.707C21.8947 12.5195 22 12.2652 22 12C22 11.7348 21.8947 11.4805 21.7073 11.293L14.7072 4.293C14.6145 4.19998 14.5042 4.12622 14.3829 4.07593C14.2615 4.02565 14.1314 3.99985 14 4C13.8022 4.00004 13.609 4.05871 13.4445 4.1686C13.2801 4.27848 13.152 4.43465 13.0763 4.61735C13.0007 4.80005 12.9808 5.00108 13.0194 5.19503C13.058 5.38899 13.1532 5.56715 13.293 5.707L18.586 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13Z" fill="white"/>
</svg>

        </button>
      </section> */}
      <Footer />
    </div>
  );
};
