import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer";
import phone from "../../images/phone.png";
import whatsapp from "../../images/whatsapp.png";
import email from "../../images/mail.png";
import linkedIn from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import x from "../../images/x.png";
import demo from "../../images/demo.png";
import other from "../../images/other.png";
import query from "../../images/query.png";
import location from "../../images/location.png";
import Inquiry from "../../images/Inquiry.png";
import contactBanner from "../../images/contact-banner.svg";
import { HashLink } from "react-router-hash-link";


const Contact = () => {
  const openDialer = () => {
    window.location.href = "tel:+916361468385"; // Replace with the desired phone number
  };

  const openWhatsApp = () => {
    window.location.href = "https://wa.me/6361468385"; // Replace with the desired phone number (without + symbol)
  };

  const sendEmail = () => {
    window.location.href = "mailto:hr@fuzedminds.com"; // Replace with the desired email address
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/company/fuzedminds-technologies/",
      "_blank"
    );
    //window.location.href = "https://www.linkedin.com/in/fuzedminds"; // Replace with the desired LinkedIn profile URL
  };

  const openFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61565379877004",
      "_blank"
    ); // Opens Facebook in a new tab
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/fuzedminds", "_blank"); // Replace with the desired Instagram profile URL
  };

  const openTwitter = () => {
    window.open("https://x.com/fuzedMindsTech", "_blank"); // Replace with the desired Twitter profile URL
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.fuzedminds.com/contact" />
        <title>fuzedMinds - Contact</title>
        <style>
          {`
            .gradient-primary {
              background: linear-gradient(135deg, #2364aa 0%, #3da5d9 50%, #73bfb8 100%);
            }
            .gradient-text {
              background: linear-gradient(135deg, #2364aa 0%, #3da5d9 50%, #73bfb8 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .gradient-bg {
              background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 50%, #f0fdfa 100%);
            }
            .color-primary { color: #2364aa; }
            .color-secondary { color: #3da5d9; }
            .color-accent { color: #73bfb8; }
            .bg-primary { background-color: #2364aa; }
            .bg-secondary { background-color: #3da5d9; }
            .bg-accent { background-color: #73bfb8; }
            .bg-primary-light { background-color: rgba(35, 100, 170, 0.1); }
            .bg-secondary-light { background-color: rgba(61, 165, 217, 0.1); }
            .bg-accent-light { background-color: rgba(115, 191, 184, 0.1); }
            .border-primary { border-color: #2364aa; }
            .border-secondary { border-color: #3da5d9; }
            .border-accent { border-color: #73bfb8; }
          `}
        </style>
      </Helmet>
      <div className="overflow-hidden">
        <div>
          <NavBar />
        </div>
        
        {/* Standout Banner Section - Similar to Homepage and Services */}
        <div className="relative w-full min-h-[100vh] flex flex-col gradient-bg overflow-hidden">
          {/* Decorative SVG doodles */}
          <svg className="absolute left-0 top-0 w-32 h-32 opacity-20 z-0" fill="none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#2364aa" strokeWidth="6" />
          </svg>
          <svg className="absolute right-0 top-10 w-24 h-24 opacity-10 z-0" fill="none" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" stroke="#3da5d9" strokeWidth="6" rx="12" />
          </svg>
          <svg className="absolute left-10 bottom-0 w-24 h-24 opacity-10 z-0" fill="none" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" stroke="#73bfb8" strokeWidth="6" fill="none" />
          </svg>
          

          
          {/* Contact Method Logos in Banner Background */}
          <img src={email} alt="Email" className="absolute top-[15%] left-[25%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          <img src={whatsapp} alt="WhatsApp" className="absolute top-[35%] right-[25%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          <img src={phone} alt="Phone" className="absolute bottom-[25%] left-[30%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          <img src={linkedIn} alt="LinkedIn" className="absolute top-[45%] left-[5%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          <img src={instagram} alt="Instagram" className="absolute bottom-[15%] right-[30%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          <img src={facebook} alt="Facebook" className="absolute top-[55%] right-[5%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          <img src={x} alt="X" className="absolute bottom-[35%] left-[5%] w-12 md:w-16 opacity-20 pointer-events-none select-none z-0" draggable={false} />
          
          {/* Banner Content */}
          <div className="flex flex-1 items-center justify-center py-8 px-4 md:px-0 relative z-10">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-8 pt-16 md:pt-0">
              {/* Left: Headline, subheadline, CTA, contact/info */}
              <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
                <div className="mb-4 text-sm font-semibold color-primary uppercase tracking-wide bg-primary-light px-3 py-1 rounded-full inline-block">
                  Get In Touch
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-left leading-tight">
                  Ready to start your<br />
                  <span className="gradient-text">next project?</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium mb-6 text-left">
                  We're here to help you bring your ideas to life. Let's discuss how we can transform your vision into reality.
                </p>
                

                
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 w-full">
                  <button 
                    onClick={() => document.getElementById('contact-options').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full gradient-primary text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                  >
                    Contact Us
                  </button>
                  <div className="flex items-center gap-2 color-accent font-semibold text-base sm:text-lg bg-accent-light rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow border border-accent">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 color-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Quick Response
                  </div>
                </div>
              </div>
              
              {/* Right: Hero image and stat cards */}
              <div className="flex-1 flex flex-col items-center justify-center relative w-full max-w-lg">
                <div className="transition-all duration-700 hover:scale-105 backdrop-blur-xl bg-white/20 rounded-3xl border border-white/40 p-8 shadow-2xl hover:shadow-3xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary-light rounded-3xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10">
                    <img 
                      src={contactBanner} 
                      alt="Contact Us" 
                      className="w-full max-w-xs md:max-w-md rounded-2xl drop-shadow-lg" 
                    />
                  </div>
                </div>
                
                {/* Stat cards floating over image */}
                <div className="absolute left-0 top-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border border-primary z-20">
                  <div className="color-primary font-bold text-lg">24/7</div>
                  <div className="text-xs text-gray-500">Support</div>
                </div>
                <div className="absolute right-0 bottom-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border border-secondary z-20">
                  <div className="color-secondary font-bold text-lg">100%</div>
                  <div className="text-xs text-gray-500">Satisfaction</div>
                </div>
                

              </div>
            </div>
          </div>
        </div>

        {/* Contact Options Section */}
        <div className="gradient-bg py-10 relative overflow-hidden" id="contact-options">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary-light rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-secondary-light rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-light rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-primary-light rounded-full animate-spin"></div>
          </div>

          <div className="flex flex-wrap justify-center p-3 relative z-10">
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-primary-light rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 gradient-primary rounded-full animate-pulse mr-3"></div>
                  <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                    <img className="rounded-lg" src={demo} loading="lazy" alt="Demo" />
                  </div>
                </div>
                <h3 className="text-gray-900 text-2xl font-bold mb-4 drop-shadow-lg">
                  <span className="gradient-text">Demo</span>
                </h3>
                <div>
                  <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                    Request a personalized demo to explore our solutions in
                    action and see how they can meet your needs effectively.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary-light rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 gradient-primary rounded-full animate-pulse mr-3"></div>
                  <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                    <img className="rounded-lg" src={query} loading="lazy" alt="Query" />
                  </div>
                </div>
                <h3 className="text-gray-900 text-2xl font-bold mb-4 drop-shadow-lg">
                  <span className="gradient-text">Query</span>
                </h3>
                <div>
                  <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                    Have questions or need more information? Reach out to us,
                    and we'll provide clear answers and guidance tailored to
                    your concerns.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-accent-light rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 gradient-primary rounded-full animate-pulse mr-3"></div>
                  <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                    <img className="rounded-lg" src={other} loading="lazy" alt="Other" />
                  </div>
                </div>
                <h3 className="text-gray-900 text-2xl font-bold mb-4 drop-shadow-lg">
                  <span className="gradient-text">Other</span>
                </h3>
                <div>
                  <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                    For any other inquiries or specific requests, let us know!
                    We're here to assist with anything you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods Section */}
        <div className="gradient-bg py-10 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary-light rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-secondary-light rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-light rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-primary-light rounded-full animate-spin"></div>
            <div className="absolute top-1/2 left-1/4 w-18 h-18 bg-secondary-light rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-accent-light rounded-full animate-bounce"></div>
          </div>

          <div className="flex justify-center relative z-10">
            <div className="rounded-full w-[60px] h-[60px] pt-4 flex items-center justify-center">
              <img className="rounded-full" src={location} loading="lazy" alt="Location" />
            </div>
          </div>
          
          <div className="flex items-center justify-center mb-8 relative z-10">
            <div className="w-3 h-3 gradient-primary rounded-full animate-pulse mr-3"></div>
            <h1 className="text-center font-sans font-semibold text-3xl gradient-text">
              Reach Out to Us
            </h1>
            <div className="w-3 h-3 gradient-primary rounded-full animate-pulse ml-3"></div>
          </div>

          <div className="flex flex-wrap justify-center pb-20 relative z-10">
            {/* WhatsApp */}
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden group w-96 m-5">
              <div className="absolute inset-0 bg-primary-light rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex justify-center items-center">
                  <img
                    alt="WhatsApp Icon"
                    className="h-20 w-20 shadow-lg rounded-full"
                    src={whatsapp}
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h2 className="text-xl font-semibold color-primary">WhatsApp</h2>
                  <h3 className="text-2xl font-light text-gray-700">+91 63614 68385</h3>
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    onClick={openWhatsApp}
                    className="px-6 py-3 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                  >
                    Message
                  </button>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden group w-96 m-5">
              <div className="absolute inset-0 bg-secondary-light rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex justify-center items-center">
                  <img
                    alt="Email Icon"
                    className="h-20 w-20 shadow-lg rounded-full"
                    src={email}
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h2 className="text-xl font-semibold color-secondary">Email</h2>
                  <h3 className="text-2xl font-light text-gray-700">hr@fuzedminds.com</h3>
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    onClick={sendEmail}
                    className="px-6 py-3 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                  >
                    Mail
                  </button>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden group w-96 m-5">
              <div className="absolute inset-0 bg-accent-light rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex justify-center items-center">
                  <img
                    alt="LinkedIn Icon"
                    className="h-20 w-20 shadow-lg rounded-full"
                    src={linkedIn}
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h2 className="text-xl font-semibold color-accent">LinkedIn</h2>
                  <h3 className="text-2xl font-light text-gray-700">/fuzedminds</h3>
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    onClick={openLinkedIn}
                    className="px-6 py-3 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                  >
                    Connect
                  </button>
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden group w-96 m-5">
              <div className="absolute inset-0 bg-primary-light rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex justify-center items-center">
                  <img
                    alt="Facebook Icon"
                    className="h-20 w-20 shadow-lg rounded-full"
                    src={facebook}
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h2 className="text-xl font-semibold color-primary">Facebook</h2>
                  <h3 className="text-2xl font-light text-gray-700">/fuzedminds Technologies</h3>
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    onClick={openFacebook}
                    className="px-6 py-3 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden group w-96 m-5">
              <div className="absolute inset-0 bg-secondary-light rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex justify-center items-center">
                  <img
                    alt="Instagram Icon"
                    className="h-20 w-20 shadow-lg rounded-full"
                    src={instagram}
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h2 className="text-xl font-semibold color-secondary">Instagram</h2>
                  <h3 className="text-2xl font-light text-gray-700">/fuzedminds</h3>
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    onClick={openInstagram}
                    className="px-6 py-3 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>

            {/* X (Twitter) */}
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden group w-96 m-5">
              <div className="absolute inset-0 bg-accent-light rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex justify-center items-center">
                  <img
                    alt="X Icon"
                    className="h-20 w-20 shadow-lg rounded-full"
                    src={x}
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h2 className="text-xl font-semibold color-accent">X</h2>
                  <h3 className="text-2xl font-light text-gray-700">/fuzedMindsTech</h3>
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    onClick={openTwitter}
                    className="px-6 py-3 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Your Inquiry Section */}
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
                  Have Questions?
                </span>
              </div>

              {/* Main headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Submit Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-purple-400">
                  INQUIRY
                </span>{" "}
                Now!
              </h2>

              {/* Sub-headline */}
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
                Got questions about our services?{" "}
                <span className="font-bold text-white">We're here to help!</span>{" "}
                Send us your inquiry and get a quick response.
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
                  <span>Send Inquiry</span>
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
                  <div className="text-white/70 text-sm">Support</div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-2">Quick</div>
                  <div className="text-white/70 text-sm">Response</div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-2">Expert</div>
                  <div className="text-white/70 text-sm">Guidance</div>
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

export default Contact;
