import React from "react";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import AllInOne from "../components/AllInOne";
import We from "../components/We";
import Cta from "../components/Cta";
import Portfolio from "../components/Portfolio";
import Clients from "../components/Clients";

const Main = () => {
  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Hero Section */}
      <Home />

      {/* All-in-One Value Prop */}
      <section>
        <AllInOne />
      </section>

      {/* What We Do */}
      <section>
        <We />
      </section>

      {/* About Us */}
      <section >
        <About />
      </section>

      {/* Call to Action */}
      <section>
        <Cta />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
