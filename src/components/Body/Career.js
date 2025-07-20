import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer";
import img1 from "../../images/java-backend.avif";
import img2 from "../../images/java-react-fullstack.avif";
import img3 from "../../images/java-angular-fullstack.avif";
import img4 from "../../images/MERN.avif";
import img5 from "../../images/MEAN.avif";
import img6 from "../../images/Python.avif";
import img7 from "../../images/dot-net.avif";
import img8 from "../../images/REACT.webp";
import img9 from "../../images/ANGULAR.webp";
import img10 from "../../images/dot-net-angular.webp";
import android from "../../images/tech/android.png";
import angular from "../../images/tech/angular.png";
import dotnet from "../../images/tech/dotnet.png";
import ios from "../../images/tech/ios.png";
import java from "../../images/tech/java.png";
import mysql from "../../images/tech/mysql.png";
import nodejs from "../../images/tech/nodejs.png";
import oracle from "../../images/tech/oracle.png";
import php from "../../images/tech/php.png";
import python from "../../images/tech/python.png";
import react from "../../images/tech/react.png";
import intern from "../../images/intern.png";
import fresher from "../../images/fresher.png";
import experienced from "../../images/experienced.png";
import resume from "../../images/resume.png";
import careerBanner from "../../images/career-banner-new.svg";
import { HashLink } from "react-router-hash-link";

const Career = () => {
  const images = [img4, img9, img1, img10, img8, img3, img2, img5, img7, img6];
  const tech = [
    java,
    android,
    angular,
    ios,
    react,
    php,
    mysql,
    python,
    oracle,
    dotnet,
    nodejs,
    oracle,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  const words = [
    "B.Tech",
    "Graduate",
    "PG",
    "CSE",
    "ECE",
    "IT",
    "BCA",
    "MCA",
    "BSC IT",
  ];
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFading(false);
      }, 500); // Match fade-out duration
    }, 2500); // Total duration including fade-in/out

    return () => clearInterval(interval);
  }, [words.length]);
  
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.fuzedminds.com/career" />
        <title>fuzedMinds - career</title>
      </Helmet>
      <div className="overflow-hidden">
        <div>
          <NavBar />
        </div>
        
        {/* Standout Banner Section - Inspired from Homepage */}
        <div className="relative w-full min-h-[100vh] flex flex-col bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 overflow-hidden">
          {/* Decorative SVG doodles */}
          <svg className="absolute left-0 top-0 w-32 h-32 opacity-20 z-0" fill="none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="6" />
          </svg>
          <svg className="absolute right-0 top-10 w-24 h-24 opacity-10 z-0" fill="none" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" stroke="#06b6d4" strokeWidth="6" rx="12" />
          </svg>
          <svg className="absolute left-10 bottom-0 w-24 h-24 opacity-10 z-0" fill="none" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" stroke="#0891b2" strokeWidth="6" fill="none" />
          </svg>
          
          {/* Career-Related Logos in Banner Background */}
          <img src={resume} alt="Resume" className="absolute top-[15%] left-[25%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          <img src={intern} alt="Internship" className="absolute top-[35%] right-[25%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          <img src={fresher} alt="Fresher" className="absolute bottom-[25%] left-[30%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          <img src={experienced} alt="Experienced" className="absolute top-[45%] left-[5%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          <img src={intern} alt="Internship" className="absolute bottom-[15%] right-[30%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          <img src={fresher} alt="Fresher" className="absolute top-[55%] right-[5%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          <img src={experienced} alt="Experienced" className="absolute bottom-[35%] left-[5%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          
          {/* Banner Content */}
          <div className="flex flex-1 items-center justify-center py-8 px-4 md:px-0 relative z-10">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-8 pt-16 md:pt-0">
              {/* Left: Headline, subheadline, CTA, contact/info */}
              <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
                <div className="mb-4 text-sm font-semibold text-blue-600 uppercase tracking-wide bg-blue-100 px-3 py-1 rounded-full inline-block">
                  Career Opportunities
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-left leading-tight">
                  Looking for the right<br />
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">opportunity?</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium mb-6 text-left">
                  We're here to help you take the next step in your career. Explore our open roles and let's see how you can grow with us!
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 w-full">
                  <button 
                    onClick={() => document.getElementById('career-options').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                  >
                    Explore Roles
                  </button>
                  <div className="flex items-center gap-2 text-cyan-700 font-semibold text-base sm:text-lg bg-cyan-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow border border-cyan-100">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                    Multiple Positions
                  </div>
                </div>
              </div>
              
              {/* Right: Hero image and stat cards */}
              <div className="flex-1 flex flex-col items-center justify-center relative w-full max-w-lg">
                <div className="transition-all duration-700 hover:scale-105 backdrop-blur-xl bg-white/20 rounded-3xl border border-white/40 p-8 shadow-2xl hover:shadow-3xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10">
                    <img 
                      src={careerBanner} 
                      alt="Career Opportunities" 
                      className="w-full max-w-xs md:max-w-md rounded-2xl drop-shadow-lg" 
                    />
                  </div>
                </div>
                
                {/* Stat cards floating over image */}
                <div className="absolute left-0 top-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border border-blue-100 z-20">
                  <div className="text-blue-700 font-bold text-lg">3+</div>
                  <div className="text-xs text-gray-500">Roles</div>
                </div>
                <div className="absolute right-0 bottom-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border border-cyan-100 z-20">
                  <div className="text-cyan-700 font-bold text-lg">100%</div>
                  <div className="text-xs text-gray-500">Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Options Section */}
        <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-10 relative overflow-hidden" id="career-options">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-200/40 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/35 rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-cyan-200/45 rounded-full animate-spin"></div>
          </div>

          <div className="flex flex-wrap justify-center p-3 relative z-10">
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group lg:w-3/12 m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse mr-3"></div>
                  <h1 className="font-sans text-[20px] font-medium text-center text-blue-900">
                    We Hire
                  </h1>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="rounded-full w-[80px] h-[80px] pt-4 flex items-center justify-center bg-white/15 backdrop-blur-lg border border-white/50 shadow-lg">
                    <img className="rounded-lg" src={intern} loading="lazy" alt="Intern" />
                  </div>
                </div>
                <h1 className="font-sans text-[36px] font-semibold text-center mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Intern</span>
                </h1>
                <p className="my-3 text-md text-[20px] font-light text-center text-gray-700 leading-relaxed">
                  We hire unpaid interns to provide real-world learning
                  opportunities while benefiting from their fresh ideas and
                  enthusiasm. It's a chance for interns to build skills and
                  portfolios, and for us to discover future talent and ensure a
                  cultural fit—all with mutual growth in mind.
                </p>
              </div>
            </div>
            
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group lg:w-3/12 m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse mr-3"></div>
                  <h1 className="font-sans text-[20px] font-medium text-center text-blue-900">
                    We Hire
                  </h1>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="rounded-full w-[80px] h-[80px] pt-4 flex items-center justify-center bg-white/15 backdrop-blur-lg border border-white/50 shadow-lg">
                    <img className="rounded-lg" src={fresher} loading="lazy" alt="Fresher" />
                  </div>
                </div>
                <h1 className="font-sans text-[36px] font-semibold text-center mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Fresher</span>
                </h1>
                <p className="my-3 text-md text-[20px] font-light text-center text-gray-700 leading-relaxed">
                  Freshers bring energy, fresh ideas, and a strong desire to learn.
                  Their adaptability and creativity help us shape talent while
                  building a strong, long-term team.
                </p>
              </div>
            </div>
            
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group lg:w-3/12 m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse mr-3"></div>
                  <h1 className="font-sans text-[20px] font-medium text-center text-blue-900">
                    We Hire
                  </h1>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="rounded-full w-[80px] h-[80px] pt-4 flex items-center justify-center bg-white/15 backdrop-blur-lg border border-white/50 shadow-lg">
                    <img className="rounded-lg" src={experienced} loading="lazy" alt="Experienced" />
                  </div>
                </div>
                <h1 className="font-sans text-[36px] font-semibold text-center mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Experienced</span>
                </h1>
                <p className="my-3 text-md text-[20px] font-light text-center text-gray-700 leading-relaxed">
                  Experienced candidates bring expertise, leadership, and immediate
                  impact. Their skills help tackle challenges, mentor teams, and
                  drive the company forward.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Internship Section */}
        <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-10 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-200/40 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/35 rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-cyan-200/45 rounded-full animate-spin"></div>
          </div>

          <div className="flex flex-wrap justify-center p-10 relative z-10">
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden lg:w-3/12 m-3 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <h1 className="font-sans text-[28px] font-light text-blue-900">Openings for</h1>
                <h1 className="font-sans text-[36px] font-semibold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Internship</span>
                </h1>
                <div className="flex justify-center items-center pt-4 transition-opacity">
                  <div className="h-2/4 w-3/4">
                    <img
                      src={images[currentIndex]}
                      alt="Slideshow"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden lg:w-8/12 m-3 items-center md:mt-10 relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <p className="my-3 text-md text-[20px] font-normal text-gray-700 leading-relaxed">
                  Take the first step in building your career with our unpaid
                  internship program and gain hands-on experience under the guidance
                  of highly skilled and experienced mentors. Enjoy flexible timings
                  while receiving valuable career guidance to help shape your
                  future.
                </p>
                <div className="flex justify-center p-4">
                  <HashLink to="/skilldevelopment#">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                      Apply
                    </button>
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fresher Section */}
        <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-10 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-200/40 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/35 rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-cyan-200/45 rounded-full animate-spin"></div>
          </div>

          <div className="flex flex-wrap justify-center p-10 relative z-10">
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden lg:w-3/12 m-3 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <h1 className="font-sans text-[28px] font-light text-blue-900">Openings for</h1>
                <h1 className="font-sans text-[36px] font-semibold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Fresher</span>
                </h1>
                <div className="flex justify-center items-center pt-4">
                  <div
                    className={`text-6xl font-bold transition-opacity duration-500 ${
                      isFading ? "opacity-0" : "opacity-100"
                    } bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 bg-clip-text text-transparent`}
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      textShadow: "0px 4px 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    {words[index]}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden lg:w-8/12 m-3 items-center md:mt-10 relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <p className="my-3 text-md text-[20px] font-normal text-gray-700 leading-relaxed">
                  Kickstart your career with us! We offer exciting opportunities for
                  freshers across various educational backgrounds, including B.Tech,
                  Graduate, PG, CSE, ECE, IT, BCA, MCA, BSc IT, and EEE. Enjoy a
                  competitive salary and a chance to work with a dynamic team that
                  values your skills and potential. Whether you're a recent graduate
                  or a postgraduate, we're here to help you launch a successful
                  career in a supportive and innovative environment.
                </p>
                <div className="flex justify-center p-4">
                  <HashLink to="">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                      Opening Soon
                    </button>
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experienced Section */}
        <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-10 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-200/40 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/35 rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-cyan-200/45 rounded-full animate-spin"></div>
          </div>

          <div className="flex flex-wrap justify-center p-10 relative z-10">
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden lg:w-3/12 m-3 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <h1 className="font-sans text-[28px] font-light text-blue-900">Openings for</h1>
                <h1 className="font-sans text-[36px] font-semibold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Experienced</span>
                </h1>
                <div className="flex justify-center items-center pt-4">
                  <img
                    src={tech[currentIndex]}
                    alt="Slideshow"
                    className="w-20 h-20 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden lg:w-8/12 m-3 items-center md:mt-10 relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <p className="my-3 text-md text-[20px] font-normal text-gray-700 leading-relaxed">
                  We are on the lookout for skilled professionals in Frontend
                  Development, Backend Development, Full Stack Development, Database
                  Management, Cloud Computing, and Testing. If you have expertise in
                  building intuitive interfaces, crafting robust backend systems,
                  managing data effectively, or ensuring seamless performance
                  through testing, we want you on our team! Join us to work on
                  innovative projects, earn a competitive salary, and grow your
                  career in a supportive and forward-thinking environment.
                </p>
                <div className="flex justify-center p-4">
                  <HashLink to="">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                      Opening Soon
                    </button>
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Send Your Resume Section */}
        <div className="relative w-full py-20 overflow-hidden">
          {/* Background with gradient and patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-20 w-24 h-24 bg-cyan-500/20 rounded-full animate-bounce"></div>
              <div className="absolute bottom-20 left-20 w-28 h-28 bg-blue-500/20 rounded-full animate-ping"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-spin"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-cyan-400/30 rounded-full animate-bounce"></div>
            </div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          {/* Main content container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium uppercase tracking-wider">
                  Ready to Join?
                </span>
              </div>

              {/* Main headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Send Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
                  RESUME
                </span>{" "}
                Today!
              </h2>

              {/* Sub-headline */}
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to take the next step in your career?{" "}
                <span className="font-bold text-white">Send us your resume</span>{" "}
                and let's explore opportunities together!
              </p>

              {/* Email display */}
              <div className="mb-12">
                <div className="inline-flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <svg className="w-6 h-6 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white font-semibold text-xl">hr@fuzedminds.com</span>
                </div>
              </div>

              {/* CTA Button with enhanced styling */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:hr@fuzedminds.com"
                  className="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl"
                >
                  <svg
                    className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Send Resume</span>
                </a>

                {/* Additional contact info */}
                <div className="flex items-center gap-3 text-white/80 font-medium">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <span>WhatsApp: 63614 68385</span>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/70 text-sm">Response Time</div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/70 text-sm">Confidential</div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-2">Fast</div>
                  <div className="text-white/70 text-sm">Processing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;
