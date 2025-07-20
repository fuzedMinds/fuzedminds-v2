import React from "react";
import img from "../images/about-us-banner.svg";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <>
      <div id="about" className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-200/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-purple-200/35 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-cyan-200/45 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/25 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-purple-300/30 rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-700 text-sm font-medium uppercase tracking-wider">
                About Us
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We Create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                Digital Solutions
              </span>{" "}
              That Drive Growth
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your business, your rules. We'll build the software to match your unique needs and way of doing things.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image Section */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                {/* Image with overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl z-10"></div>
                <img
                  src={img}
                  alt="About Us"
                  className="w-full h-auto rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating stats card */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                </div>
                
                {/* Floating achievement card */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                    <div className="text-xs text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content Section */}
            <div className="space-y-8">
              {/* Mission Statement */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We create high-quality, custom web applications designed specifically to meet the needs of organizations, institutions, and SMEs. Our team of experienced software developers is ready to assist in building the applications you envision.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h4>
                  <p className="text-gray-600 text-sm">Tailored software that perfectly fits your business requirements</p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h4>
                  <p className="text-gray-600 text-sm">Quick turnaround times without compromising on quality</p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h4>
                  <p className="text-gray-600 text-sm">Experienced developers dedicated to your success</p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h4>
                  <p className="text-gray-600 text-sm">Round-the-clock assistance for your peace of mind</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <HashLink to="/services#">
                  <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="mr-3">Explore Our Services</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
