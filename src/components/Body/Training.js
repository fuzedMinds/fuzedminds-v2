import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer";
import img1 from "../../images/pre-placement-training-java.avif";

const Training = () => {
  const java = "https://forms.office.com/r/weMaFtFPyP";
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.fuzedminds.com/training" />
        <title>fuzedMinds - Training</title>
        <meta name="description" content="Join our Training program at Fuzed Minds and start your IT career." />
      </Helmet>

      <div id="training" className="training">
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
                Become a software engineer with our comprehensive
                <span className="text-[#fb443a]"> training </span> programs
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="bg-gray-100 py-5">
        <section>
          <div className="my-4 py-4">
            <h2 className="my-2 text-center text-3xl text-blue-900 font-bold">
              Trainings
            </h2>

            <div className="flex justify-center">
              <div className="w-24 border-b-4 border-blue-900"></div>
            </div>
            <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
              Ready to code? Our software engineering training provides
              essential skills and knowledge to start and advance your career in
              tech.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center p-3">
            <div className="bg-white   overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[457px] m-3 ">
              <div className=" text-justify text-sm  h-[400px]">
                <img
                  alt="card img"
                  className="rounded-lg "
                  src={img1}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Java Placement Training
                </h2>
                <p className="text-md font-medium">
                  Our Java placement training program offers comprehensive
                  support to help you secure your ideal job. We provide guidance
                  on resume building, conduct mock interviews, enhance your
                  logical thinking skills, and cover probable FAQs to prepare
                  you for success in the job market.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <a
                  href={java}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-5 text-white  bg-[#38b000] hover:bg-[#494bf5]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                    Apply
                  </button>
                </a>
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
