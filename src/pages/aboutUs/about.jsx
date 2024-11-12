import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TEAM from "../../assets/leadershipImg/TLP1.JPG";
import TEAM2 from "../../assets/img/zenHero2.png";

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="bg-about h-[80px] md:h-[300px] bg-contain bg-no-repeat md:bg-cover flex flex-col justify-center items-center">
        <h2 className="text-center mx-auto text-white text-2xl md:text-6xl ">
        About Us
        </h2>
      </div>
      <div className="">
        <div className="m-4 md:m-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <h2 className="font-bold text-4xl md:text-6xl text-primary">
            <span className="text-primary/40">We are Nigeria’s only</span>{" "}
            <br />
            communications advisory group{" "}
          </h2>
          <p className=" font-medium text-2xl opacity-50">
            with a foremost sustainability consulting practice. We help our
            clients to constantly engage their audiences to achieve
            communications objectives.
          </p>
        </div>

        <div className="m-4 md:mx-24 py-8 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <img src={TEAM} alt="zenera" className="w-full max-w-[586px]"/>
          <div className="">
            <h2 className="text-4xl">Meet the Zenera Group</h2>
            <p className="my-5 opacity-50 w-full">
              We help our clients to constantly engage their audiences to
              achieve communications objectives. The group is primarily made up
              of CSR-in-Action and Zenera Consulting.
            </p>
            <button className="uppercase bg-primary text-white py-3 px-8">
              our story
            </button>
          </div>
        </div>

        <div className="m-4 md:mx-24 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="">
            <h2 className="text-4xl">Zenera Consulting</h2>
            <p className="my-5 opacity-50">
            Zenera Consulting is a full-service Branding and Public Relations (PR) firm in Nigeria offering integrated communications advisory, including media relations, marketing communications and crisis communications services.

<br/>
<br/>
With core competency in the development and execution of tailored and strategic stakeholder communications, we help our clients establish and maintain close relations with their key stakeholders, most importantly the media.
            </p>
          </div>
          <img src={TEAM2} alt="zenera" className="w-full max-w-[586px]"/>
        </div>
      </div>

      <Footer />
    </div>
  );
};
