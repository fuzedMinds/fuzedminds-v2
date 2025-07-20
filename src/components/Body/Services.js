import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer";
import Reviews from "../Reviews";
import useReviews from "../../hooks/useReviews";
import services from "../../images/services-1.svg";
import fmStamp from "../../images/fuzedMindStamp-removebg.png";
import businessSolutionBanner from "../../images/business-solution-banner.svg";
import webDevelopment from "../../images/service/websiteDevelopement.png";
import androidAppDevelopment from "../../images/service/androidAppDevelopment.png";
import iosAppDevelopment from "../../images/service/iosAppDevelopment.png";
import apiIntegration from "../../images/service/apiIntegration.png";
import customAPI from "../../images/service/customAPI.png";
import itConsultation from "../../images/service/itConsultation.png";
import { HashLink } from "react-router-hash-link";
import javaLogo from "../../images/tech/java.png";
import reactLogo from "../../images/tech/react.png";
import nodeLogo from "../../images/tech/nodejs.png";
import pythonLogo from "../../images/tech/python.png";
import angularLogo from "../../images/tech/angular.png";
import androidLogo from "../../images/tech/android.png";

const Services = () => {
  const { reviews, loading, error } = useReviews();

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-violet-50 to-purple-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading reviews...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    console.error('Error loading reviews:', error);
  }

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.fuzedminds.com/services" />
        <title>fuzedMinds - Services</title>
        <meta
          name="description"
          content="Join our internship program at Fuzed Minds and start your IT career."
        />
      </Helmet>
      <div className="overflow-hidden">
        <div>
          <NavBar />
        </div>
        
        {/* Standout Banner Section - Similar to Homepage */}
        <div className="relative w-full min-h-[100vh] flex flex-col bg-gradient-to-br from-pink-50 via-violet-50 to-purple-100 overflow-hidden">
          {/* Decorative SVG doodles */}
          <svg className="absolute left-0 top-0 w-32 h-32 opacity-20 z-0" fill="none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#ec4899" strokeWidth="6" />
          </svg>
          <svg className="absolute right-0 top-10 w-24 h-24 opacity-10 z-0" fill="none" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" stroke="#8b5cf6" strokeWidth="6" rx="12" />
          </svg>
          <svg className="absolute left-10 bottom-0 w-24 h-24 opacity-10 z-0" fill="none" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" stroke="#f43f5e" strokeWidth="6" fill="none" />
          </svg>
          
          {/* Decorative Tech Logos in Banner Background */}
          <img src={javaLogo} alt="Java" className="absolute top-[10%] left-[12%] w-16 md:w-20 opacity-15 grayscale pointer-events-none select-none z-0" draggable={false} />
          <img src={reactLogo} alt="React" className="absolute top-[25%] right-[10%] w-16 md:w-20 opacity-15 grayscale pointer-events-none select-none z-0" draggable={false} />
          <img src={nodeLogo} alt="Node.js" className="absolute bottom-[18%] left-[18%] w-16 md:w-20 opacity-15 grayscale pointer-events-none select-none z-0" draggable={false} />
          <img src={pythonLogo} alt="Python" className="absolute top-[60%] left-[8%] w-16 md:w-20 opacity-15 grayscale pointer-events-none select-none z-0" draggable={false} />
          <img src={angularLogo} alt="Angular" className="absolute bottom-[10%] right-[18%] w-16 md:w-20 opacity-15 grayscale pointer-events-none select-none z-0" draggable={false} />
          <img src={androidLogo} alt="Android" className="absolute top-[70%] right-[8%] w-16 md:w-20 opacity-15 grayscale pointer-events-none select-none z-0" draggable={false} />
          
          {/* Banner Content */}
          <div className="flex flex-1 items-center justify-center py-8 px-4 md:px-0 relative z-10">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-8 pt-16 md:pt-0">
              {/* Left: Headline, subheadline, CTA, contact/info */}
              <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
                <div className="mb-4 text-sm font-semibold text-pink-600 uppercase tracking-wide bg-pink-100 px-3 py-1 rounded-full inline-block">
                  Business Solutions
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-left leading-tight">
                  Transform your business with<br />
                  <span className="bg-gradient-to-r from-pink-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">innovative digital solutions</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium mb-6 text-left">
                  We deliver comprehensive business solutions that drive growth, efficiency, and competitive advantage for your organization.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 w-full">
                  <HashLink to="#services" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-pink-600 to-violet-600 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                      Explore Our Services
                    </button>
                  </HashLink>
                  <div className="flex items-center gap-2 text-violet-700 font-semibold text-base sm:text-lg bg-violet-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow border border-violet-100">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Custom Solutions
                  </div>
                </div>
              </div>
              
              {/* Right: Hero image and stat cards */}
              <div className="flex-1 flex flex-col items-center justify-center relative w-full max-w-lg">
                <div className="transition-all duration-700 hover:scale-105 backdrop-blur-xl bg-white/20 rounded-3xl border border-white/40 p-8 shadow-2xl hover:shadow-3xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10">
                    <img 
                      src={businessSolutionBanner} 
                      alt="Business Solutions" 
                      className="w-full max-w-xs md:max-w-md rounded-2xl drop-shadow-lg" 
                    />
                  </div>
                </div>
                
                {/* Stat cards floating over image */}
                <div className="absolute left-0 top-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border border-pink-100 z-20">
                  <div className="text-pink-700 font-bold text-lg">50+</div>
                  <div className="text-xs text-gray-500">Services Offered</div>
                </div>
                <div className="absolute right-0 bottom-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border border-violet-100 z-20">
                  <div className="text-violet-700 font-bold text-lg">99%</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <div className="flex flex-wrap justify-center p-10 bg-gradient-to-br from-pink-50 via-violet-50 to-purple-50 relative overflow-hidden" id="services">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-violet-200/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-200/35 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-12 h-12 bg-rose-200/45 rounded-full animate-spin"></div>
        </div>

        <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 lg:w-2/5 m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full animate-pulse mr-3"></div>
              <h1 className="font-sans text-[20px] font-medium bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">
                Our Solution
              </h1>
            </div>
            <h1 className="font-sans text-[36px] font-semibold text-gray-900">
              Makes your Business better
            </h1>
            <h1 className="font-sans text-[16px] font-medium pt-2 text-gray-700">
              We offer extensive services across multiple domains
            </h1>
            <ul className="list-disc ml-5 text-gray-700 mt-4">
              <li>Startups and Entrepreneurship</li>
              <li>Information Technology and Software Development</li>
              <li>E-commerce and Retail</li>
              <li>Artificial Intelligence</li>
              <li>Healthcare and Pharmaceuticals</li>
              <li>Agriculture and Agritech</li>
              <li>Education and Edtech</li>
              <li>Renewable Energy</li>
              <li>Tourism and Hospitality</li>
              <li>Portfolio</li>
              <li>Event Management</li>
            </ul>
          </div>
        </div>
        
        <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 lg:w-2/5 m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full animate-pulse mr-3"></div>
              <h1 className="font-sans text-[20px] font-medium bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">
                You might have a question !!
              </h1>
            </div>
            <h1 className="font-sans text-[36px] font-semibold text-gray-900">
              Why fuzedMinds?
            </h1>
            <p className="my-3 text-md text-[20px] font-light text-gray-700 leading-relaxed">
              Someone would choose us because we combine expertise with
              innovation, delivering solutions that not only meet expectations but
              exceed them—every time. With us, you're not just choosing a service
              provider; you're choosing a partner committed to your success.
            </p>
            <div className="flex justify-center mt-6">
              <img className="md:h-48 md:p-4 drop-shadow-lg hover:scale-110 transition-transform duration-300" src={fmStamp} alt="FuzedMinds Stamp" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-50 via-violet-50 to-purple-50 pt-10 pb-10 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-violet-200/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-200/35 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-12 h-12 bg-rose-200/45 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/4 w-18 h-18 bg-pink-300/25 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-violet-300/30 rounded-full animate-bounce"></div>
        </div>

        <div className="flex flex-wrap justify-center p-3 relative z-10">
          <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full animate-pulse mr-3"></div>
                <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                  <img className="rounded-lg" src={webDevelopment} loading="lazy" alt="Web Development" />
                </div>
              </div>
              <h3 className="text-gray-900 text-2xl font-bold mb-4 drop-shadow-lg">
                <span className="bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">Web Development</span>
              </h3>
              <div>
                <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                  We bring your ideas to life on the web, crafting user-friendly
                  and visually stunning websites. Whether it's a sleek portfolio,
                  a robust e-commerce platform, or a corporate site, we ensure
                  every project is built for performance, scalability, and impact,
                  making your online presence truly unforgettable.
                </p>
              </div>
            </div>
          </div>
          
          <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full animate-pulse mr-3"></div>
                <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                  <img className="rounded-lg" src={androidAppDevelopment} loading="lazy" alt="Android App Development" />
                </div>
              </div>
              <h3 className="text-gray-900 text-2xl font-bold mb-4 drop-shadow-lg">
                <span className="bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">Android App Development</span>
              </h3>
              <div>
                <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                  We create Android apps that fit right into your users' hands.
                  From intuitive designs to smooth functionality, our apps are
                  built to engage and delight. Whether it's a startup idea or
                  enterprise solution, we make sure it's a perfect fit for the
                  Android ecosystem.
                </p>
              </div>
            </div>
          </div>
          
          <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full animate-pulse mr-3"></div>
                <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                  <img className="rounded-lg" src={iosAppDevelopment} loading="lazy" alt="iOS App Development" />
                </div>
              </div>
              <h3 className="text-gray-900 text-2xl font-bold mb-4 drop-shadow-lg">
                <span className="bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">iOS App Development</span>
              </h3>
              <div>
                <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                  We craft iOS apps that deliver exceptional user experiences.
                  From sleek designs to powerful functionality, our apps are
                  built to meet Apple's high standards. Whether it's a consumer
                  app or enterprise solution, we ensure it's optimized for the
                  iOS ecosystem.
                </p>
              </div>
            </div>
          </div>
          
          <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full animate-pulse mr-3"></div>
                <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                  <img className="rounded-lg" src={apiIntegration} loading="lazy" alt="API Integration" />
                </div>
              </div>
              <h3 className="text-gray-900 text-2xl font-bold mb-4 drop-shadow-lg">
                <span className="bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">API Integration</span>
              </h3>
              <div>
                <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                  We seamlessly integrate APIs to connect your applications with
                  external services and data sources. Our expertise ensures
                  reliable, secure, and efficient API connections that enhance
                  your application's functionality and user experience.
                </p>
              </div>
            </div>
          </div>
          
          <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full animate-pulse mr-3"></div>
                <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                  <img className="rounded-lg" src={customAPI} loading="lazy" alt="Custom API" />
                </div>
              </div>
              <h3 className="text-gray-900 text-2xl font-bold mb-4 drop-shadow-lg">
                <span className="bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">Custom API</span>
              </h3>
              <div>
                <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                  We design and develop custom APIs tailored to your specific
                  business needs. From RESTful APIs to GraphQL solutions, we
                  create robust, scalable, and secure APIs that power your
                  applications and enable seamless data exchange.
                </p>
              </div>
            </div>
          </div>
          
          <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full animate-pulse mr-3"></div>
                <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                  <img className="rounded-lg" src={itConsultation} loading="lazy" alt="IT Consultation" />
                </div>
              </div>
              <h3 className="text-gray-900 text-2xl font-bold mb-4 drop-shadow-lg">
                <span className="bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">IT Consultation</span>
              </h3>
              <div>
                <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                  We guide you through the ever-evolving tech landscape with our
                  IT consultation services. From strategizing upgrades to solving
                  technical challenges, we provide insights and solutions that
                  align with your goals and drive success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Solutions Reviews Section */}
      <Reviews
        title="Business Solutions Reviews"
        subtitle="See what our business clients say about our solutions and services"
        reviews={reviews.businessReviews}
        theme="blue"
        autoScroll={false}
        showNavigation={false}
      />

      {/* Ready to Transform Section */}
      <div className="relative w-full py-20 overflow-hidden">
        {/* Background with gradient and patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-violet-900 to-purple-900">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500/20 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-24 h-24 bg-violet-500/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-28 h-28 bg-purple-500/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-rose-500/20 rounded-full animate-spin"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-violet-400/30 rounded-full animate-bounce"></div>
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
                Ready to Transform?
              </span>
            </div>

            {/* Main headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-purple-400">
                TRANSFORM
              </span>{" "}
              your business?
            </h2>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's build something{" "}
              <span className="font-bold text-white">amazing together!</span>
            </p>

            {/* CTA Button with enhanced styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://wa.me/916361468385"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl"
              >
                <svg
                  className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Get Started Today</span>
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
                <div className="text-3xl font-bold text-white mb-2">2</div>
                <div className="text-white/70 text-sm">Projects Delivered</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-white/70 text-sm">Client Satisfaction</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/70 text-sm">Support Available</div>
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

export default Services;
