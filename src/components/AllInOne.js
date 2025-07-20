import React from "react";
import together from "../images/together.png";
import { HashLink } from "react-router-hash-link";

const AllInOne = () => {
  return (
    <div className="flex flex-wrap justify-center p-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 mb-0 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-200/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-200/35 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-cyan-200/45 rounded-full animate-spin"></div>
      </div>
      
      <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 lg:w-2/5 m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse mr-3"></div>
            <h1 className="font-sans text-[20px] font-medium text-black bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              A one-stop solution
            </h1>
          </div>
          <h1 className="font-sans text-[36px] font-bold text-black mb-4 drop-shadow-lg">
            fuzedMinds Technologies
          </h1>
          <h1 className="font-sans text-[16px] font-medium pt-2 text-black/80 mb-4">
            Expand Your Business Digitally with Our Expertise
          </h1>
          <p className="my-3 text-md font-normal pt-2 text-black/70 mb-6 leading-relaxed">
            We help you take your business to the next level with smart,
            personalized digital solutions. Whether it's boosting your online
            presence or connecting with more customers, we've got you covered!
          </p>
          <HashLink to="/contact#">
            <div className="relative group">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 group-hover:shadow-3xl">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-pulse"></span>
                <span className="relative z-10 block px-8 py-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900">
                  <div className="relative z-10 flex items-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1 font-bold">
                      Connect with us
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </HashLink>
        </div>
      </div>
      
      <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 lg:w-2/5 m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <div className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 h-12 w-12 text-center flex items-center justify-center shadow-lg">
              <p className="text-white font-extrabold text-[30px] animate-bounce"> &#x201F;</p>
            </div>
            <div className="ml-4">
              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
            </div>
          </div>
          <p className="my-3 text-md text-[20px] font-light text-black/80 mb-6 leading-relaxed italic">
            "Whether you're a small startup, growing mid-sized company, or a large
            enterprise, we're here to guide you every step of the way. Let's work
            together to achieve your goals!"
          </p>
          <div className="flex justify-center">
            <img
              className="h-20 animate-spin animate-infinite animate-duration-[20000ms] animate-delay-0 drop-shadow-lg hover:scale-110 transition-transform duration-300"
              src={together}
              alt="Together"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
