import Logo from "../assets/img/zeneraL.png";

const Footer = () => {
    return (
      <footer className="bg-[#000000] text-white relative mt-64">
        <div className="absolute -top-64 w-full">
        <div className="container text-secondary mx-auto zen-news my-24 md:pe-0 rounded-3xl">
      <div className="flex ">
        <div className="text-white p-0 md:p-8 mt-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Signup for newsletter
          </h2>
          <p className="mt-4 text-base">
          Sign up today for hints, tips and the latest product news
          </p>
          <form className="mt-16 mb-8 md:mb-0 flex">
            <input
              type="email"
              placeholder="Email"
              className="rounded-md ps-4 h-12 md:w-96 text-secondary"
            />

            <button className="bg-black py-3 px-6 ms-1 rounded-md text-white hover:opacity-90">
              Signup
            </button>
          </form>
          {/* <div className="my-8 md:mt-16  hover:scale-[1.02] duration-300">
              <a
                href="/waitlist"
                className="bg-secondary px-2 py-2 md:h-12 md:py-3  md:px-8 rounded-md text-white"
              >
                Join Waitlist
              </a>
            </div> */}
        </div>
        
      </div>
    </div>
        </div>
        <div className="container pt-64 mx-auto hidden md:block lg:flex items-start justify-between  py-20 ">
          <div>
            <img src={Logo} alt="Zenera Logo" />
            <p className="mt-4 w-3/4">"We understand that in a world of noise, clarity is our greatest currency. We specialize in delivering transparent and impactful communication solutions that foster trust and engagement."</p>
          </div>
          <div className="flex mt-12 lg:mt-0">
            <div className="mx-10 flex flex-col">
              <h5 className="font-bold">Quick Links</h5>
              <a href="/about" className="opacity-90 mt-8 mb-4">
              Our Story
              </a>
              <a href="/" className="opacity-90 mb-4">
              Our Services
              </a>
              <a href="/faq" className="opacity-90 mb-4">
              Sustainability Report
              </a>
              <a href="/contact" className="opacity-90">
              Leadership
              </a>
              <a href="/contact" className="opacity-90">
              Health and wellness
              </a>
            </div>
            <div className="mx-20 flex flex-col">
              {/* <h5 className="font-bold">Socials</h5> */}
              {/* <a href="/" className="opacity-90 mb-4">
                hello@zenera.com
              </a> */}
              <a href="/" className="opacity-90 mb-4">
              Culture
              </a>
              <a href="/" className="opacity-90 mb-4">
              Press Release
              </a>
            </div>
            <div className="mx-10 flex flex-col">
              <h5 className="font-bold">Socials</h5>
              <a href="/" className="opacity-90 mt-8 mb-4">
                Linkedin
              </a>
              <a href="/" className="opacity-90 mb-4">
                Twitter
              </a>
              <a href="/" className="opacity-90 mb-4">
                Instagram
              </a>
            </div>
            
          </div>
        </div>
  
  
        <div className="container mx-auto md:hidden flex flex-col items-start justify-between  py-20 ">
          <div className="mb-5">
            <a href="/" className="font-bold text-3xl">
              <img src={Logo} alt="Zenera Logo" />
              
            </a>
          </div>
          <div className="flex ">
            <div className="m-5 flex flex-col">
              <h5 className="font-bold">Company</h5>
              <a href="/about" className="opacity-90 mt-8 mb-2">
                About
              </a>
              <a href="/about" className="opacity-90 mb-2">
                Our team
              </a>
              <a href="/contact" className="opacity-90 mb-2">
                Contact us
              </a>
              <a href="/faq" className="opacity-90">
                FAQs
              </a>
            </div>
            <div className="m-5 flex flex-col">
              <h5 className="font-bold">Socials</h5>
              <a href="/" className="opacity-90 mt-8 mb-2">
                Linkedin
              </a>
              <a href="/" className="opacity-90 mb-2">
                Twitter
              </a>
              <a href="/" className="opacity-90 mb-2">
                Instagram
              </a>
            </div>
            
          </div>
          <div className="m-5 flex flex-col">
              {/* <h5 className="font-bold">Company</h5> */}
              <a href="/" className="opacity-90 mt-8 mb-2">
              hello@xenera.com
              </a>
              <a href="/" className="opacity-90 mb-2">
              +234 654 654 3532
              </a>
              <a href="/" className="opacity-90 mb-2">
                Lagos, Nigeria
              </a>
            </div>
        </div>
        <div>
          <hr className="opacity-20"/>
          <p className="py-10 text-center"> Copyright © 2024 Zenera. All Rights Reserved. </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  