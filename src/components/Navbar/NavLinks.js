import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const isActive = (path) => {
    if ((path === "/home#" && location.pathname === "/home") || (path === "/home#" && location.pathname === "/")) return true;
    if (path === "/#about" && location.pathname === "/" && location.hash === "#about") return true;
    if (path === "/services#" && location.pathname === "/services") return true;
    if (path === "/skilldevelopment#" && location.pathname === "/skilldevelopment") return true;
    if (path === "/contact#" && location.pathname === "/contact") return true;
    if (path === "/career#" && location.pathname === "/career") return true;
    return false;
  };

  const getLinkClass = (path) => {
    const baseClass = "px-4 py-2 font-sans font-semibold transition-all duration-300 rounded-lg relative";
    if (isActive(path)) {
      return `${baseClass} bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-600 font-bold`;
    }
    return `${baseClass} ${
      isScrolled 
        ? "text-black hover:text-blue-600 hover:bg-white/20" 
        : "text-black hover:text-blue-600 hover:bg-white/10"
    }`;
  };

  return (
    <>
      <HashLink
        className={getLinkClass("/home#")}
        smooth
        to="/home#"
      >
        Home
        {isActive("/home#") && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>
        )}
      </HashLink>
      <HashLink
        className={getLinkClass("/#about")}
        smooth
        to="/#about"
      >
        About
        {isActive("/#about") && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>
        )}
      </HashLink>
      <HashLink
        className={getLinkClass("/services#")}
        smooth
        to="/services#"
      >
        Business Solutions
        {isActive("/services#") && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>
        )}
      </HashLink>
      <HashLink
        className={getLinkClass("/skilldevelopment#")}
        smooth
        to="/skilldevelopment#"
      >
        Skill Development
        {isActive("/skilldevelopment#") && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>
        )}
      </HashLink>
      
      <HashLink
        className={getLinkClass("/contact#")}
        to="/contact#"
      >
        Contact Us
        {isActive("/contact#") && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>
        )}
      </HashLink>
      {
        // <HashLink
        //   className="text-white bg-[#494bf5] hover:bg-[#fe7062] inline-flex items-center justify-center w-auto px-6 py-2 shadow-xl rounded-xl"
        //   smooth
        //   to="/internship#"
        // >
        //   Internship
        // </HashLink>
        // <HashLink
        //   className="text-white bg-[#494bf5] hover:bg-[#fe7062] inline-flex items-center justify-center w-auto px-6 py-2 shadow-xl rounded-xl "
        //   smooth
        //   to="/training#"
        // >
        //   Training
        // </HashLink>
      }
      <HashLink
        className={getLinkClass("/career#")}
        smooth
        to="/career#"
      >
        Career
        {isActive("/career#") && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>
        )}
      </HashLink>
    </>
  );
};

export default NavLinks;
