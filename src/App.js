import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import DemoProduct from "./pages/DemoProduct";

import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import Training from "./components/Body/Training";
import ApplicationDevelopement from "./components/Body/ApplicationDevelopement";
import Main from "./pages/Main";
import Contact from "./components/Body/Contact";
import SEOHead from "./components/SEOHead";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Services from "./components/Body/Services";
import Career from "./components/Body/Career";
import SkillDevelopment from "./pages/SkillDevelopment";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("FuzedMinds - Custom Software Development & IT Solutions | Bhubaneswar, Odisha");

  return (
    <>
      <SEOHead />
      <GoogleAnalytics />
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skilldevelopment" element={<SkillDevelopment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/internship" element={<SkillDevelopment />} />
            <Route path="/training" element={<Training />} />
            <Route
              path="/applicationdevelopement"
              element={<ApplicationDevelopement />}
            />
            <Route path="/demo" element={<DemoProduct />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
