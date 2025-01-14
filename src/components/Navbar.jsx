import { useState, useRef, useEffect } from "react";
import Logo from "../assets/img/zenLogo.svg";
import hamburger from "../assets/img/hamburger.svg";
import close from "../assets/img/X.svg";

const Navbar = () => {
  const navBar = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Services", url: "/services" },
    {
      title: "Sustainability",
      url: "/sustainability",
      submenu: [
        { title: "Leadership", url: "/sustainability/leadership" },
        { title: "Health and wellness", url: "/sustainability/health" },
        { title: "Sports", url: "/sustainability/sports" }
      ]
    },
    {
      title: "Press",
      url: "/press",
      submenu: [
        { title: "Press releases", url: "/press-releases" },
        { title: "Articles", url: "/press-releases" },
      ]
    },
    { title: "Culture", url: "/culture" }
  ];

  const [nav, setNav] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const handleClick = () => {
    setNav(!nav);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const handleMouseEnter = (idx) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredItem(idx);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300); // 300ms delay before closing submenu
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* Desktop Navigation */}
      <div className="hidden md:block fixed z-20 drop-shadow-md w-full py-2 bg-white duration-300">
        <nav className="hidden md:flex justify-between items-center py-3 container mx-auto text-black">
          <div>
            <a href="/" className="font-bold text-3xl">
              <img src={Logo} alt="Zenera Logo" />
            </a>
          </div>
          <div className="flex items-center">
            <ul className="flex lg:ms-12">
              {navBar.map((item, idx) => (
                <li 
                  key={idx} 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.submenu ? item.url : item.url}
                    className="mx-3 hover:opacity-70 flex items-center py-4"
                    onClick={(e) => item.submenu}
                    // onClick={(e) => item.submenu && e.preventDefault()}
                  >
                    {item.title}
                    {item.submenu && (
                      <svg
                        className={`w-4 h-4 ml-1 transform transition-transform ${
                          hoveredItem === idx ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>
                  {item.submenu && (
                    <div 
                      className={`absolute left-0 top-full w-56 bg-white shadow-lg rounded-md py-2 transform transition-all duration-200 ${
                        hoveredItem === idx 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => handleMouseEnter(idx)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.submenu.map((subItem, subIdx) => (
                        <a
                          key={subIdx}
                          href={subItem.url}
                          className="block px-4 py-3 text-black hover:bg-gray-100 transition-colors duration-200"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="container mx-auto vh-10 flex md:hidden items-center justify-between px-3">
        <div className="p-3 z-30">
          <a href="/" className="font-bold text-3xl">
            <img src={Logo} alt="Zenera Logo" />
          </a>
        </div>
        <div onClick={handleClick} className="cursor-pointer p-3 z-30">
          {!nav ? (
            <img src={hamburger} alt="menu" />
          ) : (
            <img src={close} alt="close" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 bg-white w-full h-screen flex flex-col justify-center items-center z-20"
        }
      >
        <ul className="text-3xl font-bold text-center w-full">
          {navBar.map((item, idx) => (
            <li key={idx} className="py-5">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(idx)}
                    className="flex items-center justify-center w-full"
                  >
                    {item.title}
                    <svg
                      className={`w-6 h-6 ml-2 transform transition-transform duration-200 ${
                        activeSubmenu === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeSubmenu === idx ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="mt-4 space-y-2 pb-4">
                      {item.submenu.map((subItem, subIdx) => (
                        <a
                          key={subIdx}
                          href={subItem.url}
                          onClick={handleClick}
                          className="block text-xl font-normal hover:bg-gray-100 py-2 transition-colors duration-200"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a href={item.url} onClick={handleClick}>
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;