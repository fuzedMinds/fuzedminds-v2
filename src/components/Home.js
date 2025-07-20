import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { HashLink } from "react-router-hash-link";
import NavBar from "./Navbar/NavBar";
import Reviews from "./Reviews";
import useReviews from "../hooks/useReviews";
import heroImg from "../images/home-1.svg";
import fuzedLogo from "../images/fuzedMinds-full-logo.png";
import javaLogo from "../images/tech/java.png";
import awsLogo from "../images/aws.png";
import gcpLogo from "../images/gcp.png";
import pythonLogo from "../images/tech/python.png";
import reactLogo from "../images/tech/react.png";
import nodeLogo from "../images/tech/nodejs.png";

const partnerLogos = [
  { name: "Google Cloud Partner" },
  { name: "Meta Business Partners" },
  { name: "Google Partner" },
  { name: "Shopify Partner" },
  { name: "TikTok Marketing Partners" },
];

const Home = () => {
  const { reviews, loading, error } = useReviews();

  if (loading) {
    return (
      <>
        <Helmet>
          <link rel="canonical" href="https://www.fuzedminds.com/" />
          <title>fuzedMinds - Home</title>
          <meta
            name="description"
            content="Your business, your rules. We'll build the software to match. We'll create software that perfectly fits your company's specific needs and way of doing things."
          />
        </Helmet>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
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
        <link rel="canonical" href="https://www.fuzedminds.com/" />
        <title>fuzedMinds - Home</title>
        <meta
          name="description"
          content="Your business, your rules. We'll build the software to match. We'll create software that perfectly fits your company's specific needs and way of doing things."
        />
      </Helmet>
      <div className="relative w-full min-h-[100vh] flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        {/* Decorative SVG doodles */}
        <svg className="absolute left-0 top-0 w-32 h-32 opacity-20 z-0" fill="none" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="#6366f1" strokeWidth="6" /></svg>
        <svg className="absolute right-0 top-10 w-24 h-24 opacity-10 z-0" fill="none" viewBox="0 0 100 100"><rect x="20" y="20" width="60" height="60" stroke="#f59e42" strokeWidth="6" rx="12" /></svg>
        <svg className="absolute left-10 bottom-0 w-24 h-24 opacity-10 z-0" fill="none" viewBox="0 0 100 100"><polygon points="50,10 90,90 10,90" stroke="#06b6d4" strokeWidth="6" fill="none" /></svg>
        {/* Decorative Tech Logos in Banner Background */}
        <img src={javaLogo} alt="Java" className="absolute top-[10%] left-[12%] w-16 md:w-20 opacity-20 grayscale pointer-events-none select-none z-0" draggable={false} />
        <img src={awsLogo} alt="AWS" className="absolute top-[25%] right-[10%] w-16 md:w-20 opacity-20 grayscale pointer-events-none select-none z-0" draggable={false} />
        <img src={gcpLogo} alt="GCP" className="absolute bottom-[18%] left-[18%] w-16 md:w-20 opacity-20 grayscale pointer-events-none select-none z-0" draggable={false} />
        <img src={pythonLogo} alt="Python" className="absolute top-[60%] left-[8%] w-16 md:w-20 opacity-20 grayscale pointer-events-none select-none z-0" draggable={false} />
        <img src={reactLogo} alt="React" className="absolute bottom-[10%] right-[18%] w-16 md:w-20 opacity-20 grayscale pointer-events-none select-none z-0" draggable={false} />
        <img src={nodeLogo} alt="Node.js" className="absolute top-[70%] right-[8%] w-16 md:w-20 opacity-20 grayscale pointer-events-none select-none z-0" draggable={false} />
        {/* NavBar */}
        <div className="relative z-20">
          <NavBar />
        </div>
        {/* Banner Content */}
        <div className="flex flex-1 items-center justify-center py-8 px-4 md:px-0 relative z-10">
          <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-8 pt-16 md:pt-0">
            {/* Left: Headline, subheadline, CTA, contact/info */}
            <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
              <div className="mb-4 text-sm font-semibold text-blue-600 uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full inline-block">100% Satisfaction Guarantee</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-left leading-tight">
                Your business, your rules.<br />
                <span className="bg-gradient-to-r from-blue-700 via-purple-500 to-orange-400 bg-clip-text text-transparent">We'll build the software to match</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium mb-6 text-left">
                We'll create software that perfectly fits your business's specific needs and unique way of doing things.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 w-full">
                <a 
                  href="https://wa.me/916361468385" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-green-600 text-white font-bold text-base sm:text-lg shadow hover:bg-green-700 transition-all duration-200 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Send a message
                  </button>
                </a>
                <div className="flex items-center gap-2 text-green-700 font-semibold text-base sm:text-lg bg-green-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow border border-green-100">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <span className="hidden sm:inline">WhatsApp: </span>63614 68385
                </div>
              </div>
            </div>
            {/* Right: Hero image and stat cards */}
            <div className="flex-1 flex flex-col items-center justify-center relative w-full max-w-lg">
              <img src={heroImg} alt="Skill Development" className="w-full max-w-xs md:max-w-md rounded-2xl shadow-lg z-10 relative" />
              {/* Stat cards floating over image */}
              <div className="absolute left-0 top-8 bg-white rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border border-blue-100 z-20">
                <div className="text-blue-700 font-bold text-lg">2</div>
                <div className="text-xs text-gray-500">Projects Delivered</div>
              </div>
              <div className="absolute right-0 bottom-8 bg-white rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border border-blue-100 z-20">
                <div className="text-blue-700 font-bold text-lg">98%</div>
                <div className="text-xs text-gray-500">Client Satisfaction</div>
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

            {/* Skill Development Reviews Section */}
      <Reviews
        title="Skill Development Reviews"
        subtitle="Hear from our students who have successfully completed our training programs"
        reviews={reviews.skillReviews}
        theme="green"
        autoScroll={true}
        showNavigation={true}
      />
    </>
  );
};

export default Home;
