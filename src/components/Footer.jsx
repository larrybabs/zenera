import Logo from "../assets/img/zenLogo.svg";
import X from "../assets/img/twitter.svg";
import Facebook from "../assets/img/Facebook.svg";
import Instagram from "../assets/img/instagram.svg";
import Linkedin from "../assets/img/linkedin.svg";
import Newsletter from "../assets/img/zeneraNews.jpeg";

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/lezenera/?hl=en",
      name: "instagram",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/company/zenera-consulting/",
      name: "linkedin",
    },
    { icon: X, url: "https://x.com/LeZenera", name: "x" },
    {
      icon: Facebook,
      url: "https://web.facebook.com/zeneraconsulting",
      name: "facebook",
    },
  ];

  const companyLinks = [
    { name: "Our Story", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Sustainability Report", path: "/sustainability" },
    { name: "Leadership", path: "/sustainability/leadership" },
    { name: "Health and Wellness", path: "/sustainability/health" },
  ];
  const companyLinks2 = [
    { name: "Sports", path: "/sustainability/sports" },
    { name: "Culture", path: "/culture" },
    { name: "Press Releases", path: "/press" },
  ];

  return (
    <footer className="bg-[#000000] text-white relative mt-64">
      <div className="md:absolute -top-64 w-full">
        

        <div className="container mx-auto md:rounded-3xl my-24 relative w-full h-[200px] md:h-[300px] overflow-hidden group ">
        <img
          src={Newsletter}
          alt="Background"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-primary bg-opacity-60 flex ">
          <div className="flex items-center p-4">
            <div className="text-white p-0 md:p-8 mt-8">
              <h2 className="text-2xl md:text-4xl font-bold">
                Sign up for Newsletter
              </h2>
              {/* <p className="mt-4 text-base">
                Sign up today for hints, tips and the latest product news
              </p> */}
              <form className="mt-8 md:mb-0 flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-md ps-4 h-12 md:w-96 text-secondary"
                />

                <button className="bg-black py-3 px-6 ms-1 rounded-md text-white hover:opacity-90">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Desktop and Tablet Layout */}
      <div className="pt-52 container mx-auto hidden md:block px-4 md:px-0">
        <div className="grid lg:grid-cols-12 gap-8 py-20">
          {/* Company Info Section */}
          <div className="lg:col-span-6">
            <div className="space-y-4">
              <div className="">
                <img src={Logo} alt="Zenera Logo" className="w-40 h-auto" />{" "}
              </div>
              <p className="text-white/80 max-w-sm py-5">
                "We understand that in a world of noise, clarity is our greatest
                currency. We specialize in delivering transparent and impactful
                communication solutions that foster trust and engagement."
              </p>
              <div className="flex gap-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-3 gap-12 place-self-end">
              <div>
                <h5 className="font-bold mb-6">Quick Links</h5>
                <div className="flex flex-col space-y-4">
                  {companyLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.path}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                {/* <h5 className="font-bold mb-6">Quick Links</h5> */}
                <div className="flex flex-col space-y-4 mt-12">
                  {companyLinks2.map((link) => (
                    <a
                      key={link.name}
                      href={link.path}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* <div>
                <div className=""></div>
                <div className="flex flex-col space-y-4 mt-12">
                  {companyLinks2.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div> */}
              <div>
                <h5 className="font-bold mb-6">Socials</h5>
                <div className="flex flex-col space-y-4">
                  {socialLinks.map((socialLink) => (
                    <a
                      key={socialLink.name}
                      href={socialLink.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/60 capitalize hover:text-white transition-colors"
                    >
                      {socialLink.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-4 py-12">
        <div className="space-y-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={Logo} alt="Zenera Logo" className="w-48 h-auto" />
            <p className="text-white/80 py-3">
              "We understand that in a world of noise, clarity is our greatest
              currency. We specialize in delivering transparent and impactful
              communication solutions that foster trust and engagement."
            </p>
          </div>

          {/* Mobile Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="font-bold mb-6">Quick Links</h5>
              <div className="flex flex-col space-y-4">
                {companyLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6">Socials</h5>
              <div className="flex flex-col space-y-4">
                {socialLinks.map((socialLink) => (
                  <a
                    key={socialLink.name}
                    href={socialLink.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/60 capitalize hover:text-white transition-colors"
                  >
                    {socialLink.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          {/* <div className="space-y-6">
            <h3 className="font-bold text-sm">CONTACT</h3>
            
            <div className="flex gap-3">
              <a
                href="mailto:info@365globalconsulting.com"
                className="text-sm hover:text-secondary"
              >
                info@365globalconsulting.com
              </a>
            </div>
          </div> */}

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={social.icon} alt={social.name} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div>
        <hr className="opacity-20" />
        <p className="py-10 text-center">
          {" "}
          Copyright © 2024 Zenera. All Rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
