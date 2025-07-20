import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import useReviews from "../hooks/useReviews";
import javaBackend from "../images/java-backend.avif";
import javaReactFullstack from "../images/java-react-fullstack.avif";
import javaAngularFullstack from "../images/java-angular-fullstack.avif";
import mern from "../images/MERN.avif";
import mean from "../images/MEAN.avif";
import react from "../images/REACT.webp";
import angular from "../images/ANGULAR.webp";
import python from "../images/Python.avif";
import dotnet from "../images/dot-net.avif";
import dotnetAngular from "../images/dot-net-angular.webp";
import skillBanner from "../images/skill-development-banner.svg";
import javaLogo from "../images/tech/java.png";
import reactLogo from "../images/tech/react.png";
import nodeLogo from "../images/tech/nodejs.png";
import pythonLogo from "../images/tech/python.png";
import angularLogo from "../images/tech/angular.png";
import androidLogo from "../images/tech/android.png";

const myCourses = [
  {
    title: "JAVA Backend Developer",
    image: javaBackend,
    description: "Get an internship in realtime java backend development.",
    durations: "1 Month, 3 Month, 6 Month",
  },
  {
    title: "JAVA + React JS fullstack Developer",
    image: javaReactFullstack,
    description: "Get an internship in realtime java and react js fullstack development.",
    durations: "1 Month, 3 Month, 6 Month",
  },
  {
    title: "JAVA + Angular fullstack Developer",
    image: javaAngularFullstack,
    description: "Get an internship in realtime java and angular fullstack development.",
    durations: "1 Month, 3 Month, 6 Month",
  },
  {
    title: "MERN stack Developer",
    image: mern,
    description: "Get an internship in realtime Mongo db, Express js, React js, Node js fullstack development.",
    durations: "1 Month, 3 Month, 6 Month",
  },
  {
    title: "MEAN stack Developer",
    image: mean,
    description: "Get an internship in realtime Mongo db, Express js, Angular, Node js fullstack development.",
    durations: "1 Month, 3 Month, 6 Month",
  },
  {
    title: "React js Developer",
    image: react,
    description: "Get an internship in realtime React js development.",
    durations: "1 Month, 3 Month, 6 Month",
  },
  {
    title: "Angular js Developer",
    image: angular,
    description: "Get an internship in realtime Angular js fullstack development.",
    durations: "1 Month, 3 Month, 6 Month",
  },
  {
    title: "Python Developer",
    image: python,
    description: "Get an internship in realtime python development.",
    durations: "1 Month, 3 Month, 6 Month",
  },
  {
    title: ".NET backend Developer",
    image: dotnet,
    description: "Get an internship in realtime .net backend development.",
    durations: "1 Month, 3 Month, 6 Month",
  },
  {
    title: ".NET + Angular js fullstack Developer",
    image: dotnetAngular,
    description: "Get an internship in realtime .net and Angular fullstack development.",
    durations: "1 Month, 3 Month, 6 Month",
  },
];

const SkillDevelopment = () => {
  const [search, setSearch] = useState("");
  const { reviews, loading, error } = useReviews();

  const filteredCourses = myCourses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.description.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
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
      <NavBar />
      
      {/* Standout Banner Section - Similar to Homepage and Services */}
      <div className="relative w-full min-h-[100vh] flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 overflow-hidden">
        {/* Decorative SVG doodles */}
        <svg className="absolute left-0 top-0 w-32 h-32 opacity-20 z-0" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="6" />
        </svg>
        <svg className="absolute right-0 top-10 w-24 h-24 opacity-10 z-0" fill="none" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" stroke="#10b981" strokeWidth="6" rx="12" />
        </svg>
        <svg className="absolute left-10 bottom-0 w-24 h-24 opacity-10 z-0" fill="none" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" stroke="#06b6d4" strokeWidth="6" fill="none" />
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
              <div className="mb-4 text-sm font-semibold text-blue-600 uppercase tracking-wide bg-blue-100 px-3 py-1 rounded-full inline-block">
                Skill Development
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-left leading-tight">
                Master the skills that<br />
                <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 bg-clip-text text-transparent">drive innovation</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium mb-6 text-left">
                Kickstart your tech career with hands-on, real-world training and internships in the latest technologies.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 w-full">
                <button 
                  onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  Explore Courses
                </button>
                <div className="flex items-center gap-2 text-green-700 font-semibold text-base sm:text-lg bg-green-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow border border-green-100">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Real Projects
                </div>
              </div>
            </div>
            
            {/* Right: Hero image and stat cards */}
            <div className="flex-1 flex flex-col items-center justify-center relative w-full max-w-lg">
              <div className="transition-all duration-700 hover:scale-105 backdrop-blur-xl bg-white/20 rounded-3xl border border-white/40 p-8 shadow-2xl hover:shadow-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <img 
                    src={skillBanner} 
                    alt="Skill Development" 
                    className="w-full max-w-xs md:max-w-md rounded-2xl drop-shadow-lg" 
                  />
                </div>
              </div>
              
              {/* Stat cards floating over image */}
              <div className="absolute left-0 top-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border border-blue-100 z-20">
                <div className="text-blue-700 font-bold text-lg">10+</div>
                <div className="text-xs text-gray-500">Courses</div>
              </div>
              <div className="absolute right-0 bottom-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border border-green-100 z-20">
                <div className="text-green-700 font-bold text-lg">100%</div>
                <div className="text-xs text-gray-500">Practical</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 py-8 px-2 md:px-8 relative overflow-hidden" id="courses">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-green-200/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/35 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-12 h-12 bg-green-200/45 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/4 w-18 h-18 bg-blue-300/25 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-green-300/30 rounded-full animate-bounce"></div>
        </div>

        <div className="max-w-6xl mx-auto mb-8 relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-green-500 rounded-full animate-pulse mr-3"></div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
              Skill Development Courses
            </h1>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-green-500 rounded-full animate-pulse ml-3"></div>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            Explore our internship-oriented courses. Filter or search to find your best fit.
          </p>
          {/* Search Bar */}
          <div className="flex flex-wrap gap-2 mb-6">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        
        {/* Courses Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {filteredCourses.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg py-12">
              No courses found.
            </div>
          ) : (
            filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-blue-600/10 rounded-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-36 object-cover rounded-t-lg mb-4"
                    loading="lazy"
                  />
                  <h2 className="text-lg font-bold text-blue-900 mb-2 text-center">
                    {course.title}
                  </h2>
                  <p className="text-gray-700 text-sm mb-2 text-center">
                    {course.description}
                  </p>
                  <p className="text-sm text-center mb-4">
                    <span className="font-semibold">Durations:</span> {course.durations}
                  </p>
                  <button className="mt-auto px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 backdrop-blur-sm text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 mx-auto border border-white/20">
                    Apply
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Skill Development Reviews Section */}
      <Reviews
        title="Skill Development Reviews"
        subtitle="Hear from our students who have successfully completed our training programs"
        reviews={reviews.skillReviews}
        theme="green"
        autoScroll={true}
        showNavigation={true}
      />

      {/* Ready to Transform Section */}
      <div className="relative w-full py-20 overflow-hidden">
        {/* Background with gradient and patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-green-900 to-blue-800">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-24 h-24 bg-green-500/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-28 h-28 bg-blue-500/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-green-500/20 rounded-full animate-spin"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-green-400/30 rounded-full animate-bounce"></div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-400">
                TRANSFORM
              </span>{" "}
              your career?
            </h2>

            {/* Sub-headline with success stats */}
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
              Join{" "}
              <span className="font-bold text-white">100+ successful students</span>{" "}
              who have already passed our programs and launched their tech careers!
            </p>

            {/* Success highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-white/70 text-sm">Students Passed</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-white/70 text-sm">Tech Courses</div>
              </div>
            </div>

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
                <span>Start Your Journey</span>
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

            {/* Additional trust indicators */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-1">1-6</div>
                <div className="text-white/70 text-xs">Months Duration</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/70 text-xs">Mentor Support</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-white/70 text-xs">Hands-on</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-1">Real</div>
                <div className="text-white/70 text-xs">Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <Footer />
    </>
  );
};

export default SkillDevelopment; 