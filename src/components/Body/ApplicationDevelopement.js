import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer";
import img5 from "../../images/build.svg";
import img6 from "../../images/collaberate.svg";
import img7 from "../../images/train.svg";
import img8 from "../../images/guide.svg";
import img9 from "../../images/solve.svg";

const Training = () => {
  return (
    <>
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.fuzedminds.com/applicationdevelopement" />
          <title>fuzedMinds - applicationdevelopement</title>
          <meta name="description" content="Your digital future starts here. Let's build it together." />
        </Helmet>
      </div>
      

      <div id="applicationdevelopement" className="applicationdevelopement">
        <div>
          <NavBar />
        </div>
        <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-0 p-2 md:p-12 h-5/6">
          <div
            id="home"
            className="flex flex-col lg:flex-row py-28 justify-between text-center lg:text-left"
          >
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
                {/* We build digital solutions to help businesses scale */}
                Build your application with industry standard protcols. Let's 
                <span className="text-[#fb443a]"> develope </span> together ....
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="bg-gray-100 py-5">
        <section>
          <div className="my-4 py-4">
            <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
              Your digital future starts here. Let's build it together.
            </h2>
          </div>
        </section>
        <section>
        <div className="px-12">
          <div className="flex flex-wrap justify-center p-3 ">
            <div className="transition-all hover:bg-[#A5A6FB] hover:text-white rounded-lg p-3 group w-[357px] m-3">
              <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                <img className="rounded-full" src={img5} loading="lazy" />
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                We <span className="font-black">Build</span>
              </h3>
              <div>
                <p className="my-3 text-md font-medium">
                  We specialize in creating custom applications tailored to your
                  specific needs. Our team of experts works closely with you to
                  bring your vision to life, ensuring that the final product is
                  both innovative and effective in meeting your business goals.
                  From initial concept to final deployment, we handle every step
                  of the development process with precision and dedication.
                </p>
              </div>
            </div>
            <div className="transition-all hover:bg-[#A5A6FB] hover:text-white rounded-lg p-3 group w-[357px] m-3">
              <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                <img className="rounded-full" src={img6} loading="lazy" />
              </div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                We <span className="font-black">Collaborate</span>
              </h3>
              <div>
                <p className="my-3 text-md font-medium">
                  Collaboration is at the heart of what we do. We partner with
                  you to understand your goals and challenges, working together
                  to create solutions that drive success. Our team values open
                  communication and continuous feedback to ensure that every
                  project aligns with your vision and achieves your desired
                  outcomes. Together, we bring your ideas to life.
                </p>
              </div>
            </div>
            <div className="transition-all hover:bg-[#A5A6FB] hover:text-white rounded-lg p-3 group w-[357px] m-3">
              <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                <img className="rounded-full" src={img7} loading="lazy" />
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                We <span className="font-black">Train</span>
              </h3>
              <div>
                <p className="my-3 text-md font-medium">
                  We provide comprehensive training programs designed to empower
                  individuals and teams with the skills and knowledge needed to
                  excel in their fields. Our hands-on approach ensures you gain
                  practical experience with the latest tools and technologies,
                  preparing you to tackle real-world challenges effectively.
                  Whether you're looking to enhance your current skills or learn
                  something entirely new, our training programs are tailored to
                  meet your specific needs and help you achieve your
                  professional goals.
                </p>
              </div>
            </div>
            <div className="transition-all hover:bg-[#A5A6FB] hover:text-white rounded-lg p-3 group w-[357px] m-3">
              <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                <img className="rounded-full" src={img8} loading="lazy" />
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                We <span className="font-black">Guide</span>
              </h3>
              <div>
                <p className="my-3 text-md font-medium">
                  We offer expert guidance to help you navigate the complexities
                  of technology and business development. Our team of
                  experienced professionals is here to support you every step of
                  the way, providing insights and advice to help you make
                  informed decisions and achieve your objectives. Whether you're
                  starting a new project or looking to optimize existing
                  processes, we guide you to success with personalized
                  strategies and solutions.
                </p>
              </div>
            </div>
            <div className="transition-all hover:bg-[#A5A6FB] hover:text-white rounded-lg p-3 group w-[357px] m-3">
              <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                <img className="rounded-full" src={img9} loading="lazy" />
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                We <span className="font-black">Solve</span>
              </h3>
              <div>
                <p className="my-3 text-md font-medium">
                  We specialize in solving complex problems with innovative
                  solutions tailored to your unique needs. Our team is dedicated
                  to understanding your challenges and delivering effective
                  strategies that drive results. From overcoming technical
                  hurdles to streamlining business processes, we tackle every
                  issue with creativity and expertise to ensure your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Training;
