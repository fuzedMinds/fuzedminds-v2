import React from "react";

import img5 from "../images/build.svg";
import img6 from "../images/collaberate.svg";
import img7 from "../images/train.svg";
import img8 from "../images/guide.svg";
import img9 from "../images/explore.png";
import explore from "../images/solve.svg";
import javaLogo from "../images/tech/java.png";
import reactLogo from "../images/tech/react.png";
import angularLogo from "../images/tech/angular.png";
import nodeLogo from "../images/tech/nodejs.png";
import pythonLogo from "../images/tech/python.png";
import dotnetLogo from "../images/tech/dotnet.png";
import htmlLogo from "../images/tech/html.png";
import cssLogo from "../images/tech/css.png";
import jsLogo from "../images/tech/js.png";
import mysqlLogo from "../images/tech/mysql.png";
import oracleLogo from "../images/tech/oracle.png";
import phpLogo from "../images/tech/php.png";
import gitLogo from "../images/tech/git.png";
import jiraLogo from "../images/tech/jira.png";
import dbLogo from "../images/tech/db.png";
import androidLogo from "../images/tech/android.png";
import iosLogo from "../images/tech/ios.png";
import aiLogo from "../images/tech/ai.png";

const We = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-10 pb-10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-200/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-200/35 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-cyan-200/45 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/4 w-18 h-18 bg-blue-300/25 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-purple-300/30 rounded-full animate-bounce"></div>
      </div>

      {/* Decorative Tech Logos in Background */}
      <img src={javaLogo} alt="Java" className="absolute top-[10%] left-[5%] w-16 md:w-20 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={reactLogo} alt="React" className="absolute top-[20%] right-[8%] w-16 md:w-20 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={angularLogo} alt="Angular" className="absolute bottom-[15%] left-[12%] w-16 md:w-20 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={nodeLogo} alt="Node.js" className="absolute top-[60%] right-[5%] w-16 md:w-20 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={pythonLogo} alt="Python" className="absolute bottom-[25%] right-[15%] w-16 md:w-20 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={dotnetLogo} alt=".NET" className="absolute top-[40%] left-[20%] w-16 md:w-20 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={htmlLogo} alt="HTML" className="absolute top-[15%] left-[35%] w-14 md:w-16 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={cssLogo} alt="CSS" className="absolute top-[25%] left-[45%] w-14 md:w-16 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={jsLogo} alt="JavaScript" className="absolute top-[35%] left-[55%] w-14 md:w-16 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={mysqlLogo} alt="MySQL" className="absolute top-[45%] left-[65%] w-14 md:w-16 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={oracleLogo} alt="Oracle" className="absolute top-[55%] left-[75%] w-14 md:w-16 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={phpLogo} alt="PHP" className="absolute top-[65%] left-[85%] w-14 md:w-16 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={gitLogo} alt="Git" className="absolute top-[75%] left-[15%] w-14 md:w-16 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={jiraLogo} alt="Jira" className="absolute top-[85%] left-[25%] w-14 md:w-16 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={dbLogo} alt="Database" className="absolute top-[5%] left-[85%] w-14 md:w-16 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={androidLogo} alt="Android" className="absolute top-[30%] left-[95%] w-14 md:w-16 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={iosLogo} alt="iOS" className="absolute top-[50%] left-[95%] w-14 md:w-16 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      <img src={aiLogo} alt="AI" className="absolute top-[70%] left-[95%] w-14 md:w-16 opacity-10 grayscale pointer-events-none select-none z-0" draggable={false} />
      
      <section>
        <div className="flex flex-wrap justify-center p-3 font-sans">
          <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse mr-3"></div>
                <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                  <img className="rounded-full" src={img5} loading="lazy" />
                </div>
              </div>
              <h3 className="text-blue-900 text-2xl font-bold mb-4 drop-shadow-lg">
                We <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Build</span>
              </h3>
              <div>
                <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                  We specialize in creating custom applications tailored to your
                  specific needs. Our team of experts works closely with you to
                  bring your vision to life, ensuring that the final product is
                  both innovative and effective in meeting your business goals.
                  From initial concept to final deployment, we handle every step
                  of the development process with precision and dedication.
                </p>
              </div>
            </div>
          </div>
          <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse mr-3"></div>
                <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                  <img className="rounded-full" src={img6} loading="lazy" />
                </div>
              </div>
              <h3 className="text-blue-900 text-2xl font-bold mb-4 drop-shadow-lg">
                We <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Collaborate</span>
              </h3>
              <div>
                <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                  Collaboration is at the heart of what we do. We partner with you
                  to understand your goals and challenges, working together to
                  create solutions that drive success. Our team values open
                  communication and continuous feedback to ensure that every
                  project aligns with your vision and achieves your desired
                  outcomes. Together, we bring your ideas to life.
                </p>
              </div>
            </div>
          </div>
          <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse mr-3"></div>
                <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                  <img className="rounded-full" src={img7} loading="lazy" />
                </div>
              </div>
              <h3 className="text-blue-900 text-2xl font-bold mb-4 drop-shadow-lg">
                We <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Consult</span>
              </h3>
              <div>
                <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                  We offer personalized consultation services for app development
                  and software projects. Whether you need guidance on building an
                  app or support in finding the right team members, we're here to
                  make the process smooth and successful. Let's work together to
                  turn your ideas into reality!
                </p>
              </div>
            </div>
          </div>
          <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse mr-3"></div>
                <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                  <img className="rounded-full" src={img8} loading="lazy" />
                </div>
              </div>
              <h3 className="text-blue-900 text-2xl font-bold mb-4 drop-shadow-lg">
                We <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Guide</span>
              </h3>
              <div>
                <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                  We offer expert guidance to help you navigate the complexities
                  of technology and business development. Our team of experienced
                  professionals is here to support you every step of the way,
                  providing insights and advice to help you make informed
                  decisions and achieve your objectives. Whether you're starting a
                  new project or looking to optimize existing processes, we guide
                  you to success with personalized strategies and solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse mr-3"></div>
                <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                  <img className="rounded-full" src={img9} loading="lazy" />
                </div>
              </div>
              <h3 className="text-blue-900 text-2xl font-bold mb-4 drop-shadow-lg">
                We <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solve</span>
              </h3>
              <div>
                <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                  We specialize in solving complex problems with innovative
                  solutions tailored to your unique needs. Our team is dedicated
                  to understanding your challenges and delivering effective
                  strategies that drive results. From overcoming technical hurdles
                  to streamlining business processes, we tackle every issue with
                  creativity and expertise to ensure your success.
                </p>
              </div>
            </div>
          </div>
          <div className="transition-all duration-500 hover:scale-105 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/40 p-8 group w-[357px] m-3 shadow-2xl hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse mr-3"></div>
                <div className="rounded-full w-[60px] h-[60px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/50 shadow-lg">
                  <img className="rounded-full" src={explore} loading="lazy" />
                </div>
              </div>
              <h3 className="text-blue-900 text-2xl font-bold mb-4 drop-shadow-lg">
                We <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Explore</span>
              </h3>
              <div>
                <p className="my-3 text-md font-normal text-gray-700 leading-relaxed">
                  Exploration is at the heart of what we do. We love diving into
                  new ideas, learning from challenges, and discovering innovative
                  solutions. By staying curious and embracing change, we push
                  boundaries and grow together. Every step forward is a chance to
                  create something meaningful and impactful, driven by a passion
                  for exploration and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default We;
