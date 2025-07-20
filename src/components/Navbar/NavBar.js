import React, { useState, useEffect } from "react";
import NavLinks from "../Navbar/NavLinks";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/fuzedMinds-full-logo.png";

const NavBar = () => {
  const [top, setTop] = useState(!window.scrollY);
  const [isOpen, setisOpen] = React.useState(false);
  
  function handleClick() {
    setisOpen(!isOpen);
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition-all duration-500 ease-in-out ${
        !top 
          ? "backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="flex flex-row justify-between items-center py-3 px-4 md:px-8 lg:px-12">
        {/* Logo Section */}
        <div className="flex flex-row justify-center items-center text-center font-semibold">
          <HashLink smooth to="/home#" className="group">
            <img 
              alt="FuzedMinds Logo" 
              className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105" 
              src={logo} 
            />
          </HashLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 pr-5">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className={`p-2 rounded-xl transition-all duration-300 ${
              !top 
                ? "bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 hover:bg-white/30" 
                : "bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 hover:bg-white/30"
            }`}
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6 fill-current transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`fixed top-16 left-0 right-0 transition-all duration-500 ease-in-out lg:hidden ${
            isOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div 
            className={`mx-4 rounded-2xl border backdrop-blur-xl shadow-2xl ${
              !top 
                ? "bg-white/90 border-white/30" 
                : "bg-white/80 border-white/20"
            }`}
          >
            <div className="flex flex-col space-y-2 p-6" onClick={handleClick}>
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
