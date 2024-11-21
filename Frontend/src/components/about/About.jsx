import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Aboutus from "../Aboutus";


function About() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen">
        <Aboutus />
      </div>
      <Footer />
    </div>
  );
}

export default About;
