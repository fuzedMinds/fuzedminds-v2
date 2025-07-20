import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
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

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/company/fuzedminds-technologies/",
      "_blank"
    );
  };

  return (
    <>
      <footer className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-cyan-50 to-blue-100">
          {/* Decorative SVG doodles */}
          <svg className="absolute left-0 top-0 w-32 h-32 opacity-10 z-0" fill="none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="6" />
          </svg>
          <svg className="absolute right-0 top-10 w-24 h-24 opacity-10 z-0" fill="none" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" stroke="#06b6d4" strokeWidth="6" rx="12" />
          </svg>
          <svg className="absolute left-10 bottom-0 w-24 h-24 opacity-10 z-0" fill="none" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" stroke="#0891b2" strokeWidth="6" fill="none" />
          </svg>
          
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-200/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/35 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-12 h-12 bg-cyan-200/45 rounded-full animate-spin"></div>
        </div>

        <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 py-16 font-sans">
          {/* Top area: Blocks */}
          <div className="flex flex-wrap justify-center p-3">
            {/* 1st block - Company Info */}
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group col-span-12 lg:col-span-4 w-[257px] m-3 text-center shadow-2xl hover:shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse mr-3"></div>
                  <h3 className="text-4xl mb-4 font-bold">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">fuzedMinds</span>
                  </h3>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse ml-3"></div>
                </div>
                <div className="text-md font-medium text-gray-700">
                  <h5 className="text-blue-900 font-semibold">Bhubaneswar</h5>
                  <p>Odisha</p>
                  <p>India</p>
                </div>
              </div>
            </div>

            {/* 2nd block - Links */}
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group col-span-6 md:col-span-6 lg:col-span-1 ml-7 w-[257px] m-3 text-center shadow-2xl hover:shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <h6 className="text-xl font-semibold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">LINKS</span>
                </h6>
                <ul className="text-md space-y-3">
                  <li>
                    <HashLink
                      to="/#about"
                      className="text-blue-900 hover:text-cyan-600 hover:tracking-wider transition-all duration-300 ease-in-out font-medium hover:font-semibold"
                    >
                      About
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/#services"
                      className="text-blue-900 hover:text-cyan-600 hover:tracking-wider transition-all duration-300 ease-in-out font-medium hover:font-semibold"
                    >
                      Services
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/contact#"
                      className="text-blue-900 hover:text-cyan-600 hover:tracking-wider transition-all duration-300 ease-in-out font-medium hover:font-semibold"
                    >
                      Contact
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/career#"
                      className="text-blue-900 hover:text-cyan-600 hover:tracking-wider transition-all duration-300 ease-in-out font-medium hover:font-semibold"
                    >
                      Career
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3rd block - Services */}
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group col-span-5 md:col-span-6 lg:col-span-4 w-[257px] m-3 text-center shadow-2xl hover:shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <h6 className="text-xl font-semibold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">OUR SERVICES</span>
                </h6>
                <ul className="text-md space-y-3">
                  <li>
                    <Link
                      to="#"
                      className="text-blue-900 hover:text-cyan-600 hover:tracking-wider transition-all duration-300 ease-in-out font-medium hover:font-semibold"
                    >
                      Application Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-blue-900 hover:text-cyan-600 hover:tracking-wider transition-all duration-300 ease-in-out font-medium hover:font-semibold"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <HashLink
                      to="/services#"
                      className="text-blue-900 hover:text-cyan-600 hover:tracking-wider transition-all duration-300 ease-in-out font-medium hover:font-semibold"
                    >
                      Other
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4th block - Social Media */}
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group col-span-12 text-center lg:col-span-3 font-bold uppercase w-[257px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="text-xl mb-6 font-semibold">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Social Media Links</span>
                </div>

                <div className="text-md font-light mb-6 text-gray-700">
                  Follow us on social media.
                </div>
                
                <div className="mx-auto text-center mt-2">
                  <ul className="flex justify-center mb-4 md:mb-0 space-x-4">
                    <li>
                      <Link
                        to="#"
                        onClick={openInstagram}
                        className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110"
                        aria-label="Instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 48 48"
                        >
                          <radialGradient
                            id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                            cx="19.38"
                            cy="42.035"
                            r="44.899"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#fd5"></stop>
                            <stop offset=".328" stopColor="#ff543f"></stop>
                            <stop offset=".348" stopColor="#fc5245"></stop>
                            <stop offset=".504" stopColor="#e64771"></stop>
                            <stop offset=".643" stopColor="#d53e91"></stop>
                            <stop offset=".761" stopColor="#cc39a4"></stop>
                            <stop offset=".841" stopColor="#c837ab"></stop>
                          </radialGradient>
                          <path
                            fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                          ></path>
                          <radialGradient
                            id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                            cx="11.786"
                            cy="5.54"
                            r="29.813"
                            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#4168c9"></stop>
                            <stop
                              offset=".999"
                              stopColor="#4168c9"
                              stopOpacity="0"
                            ></stop>
                          </radialGradient>
                          <path
                            fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                          ></path>
                          <circle
                            cx="31.5"
                            cy="16.5"
                            r="1.5"
                            fill="#fff"
                          ></circle>
                          <path
                            fill="#fff"
                            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                    
                    <li>
                      <Link
                        to="#"
                        onClick={openTwitter}
                        className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110"
                        aria-label="Twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#212121"
                            fillRule="evenodd"
                            d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#fff"
                            d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                          ></path>
                          <polygon
                            fill="#fff"
                            points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                          ></polygon>
                          <polygon
                            fill="#fff"
                            points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                          ></polygon>
                        </svg>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/"
                        onClick={openLinkedIn}
                        className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#0288D1"
                            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                          ></path>
                          <path
                            fill="#FFF"
                            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                    
                    <li>
                      <Link
                        to="/"
                        onClick={openFacebook}
                        className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110"
                        aria-label="Facebook"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#039be5"
                            d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4 mt-8">
            <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 w-full md:w-4/5 mx-auto text-center shadow-2xl hover:shadow-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="text-sm text-gray-700 font-semibold py-1">
                  Copyright &copy; {new Date().getFullYear()}
                  {"  "}
                  <HashLink to="#" className="hover:text-cyan-600 transition-colors duration-300 font-bold">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">fuzedMinds technologies pvt ltd</span>
                  </HashLink>
                  . All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
