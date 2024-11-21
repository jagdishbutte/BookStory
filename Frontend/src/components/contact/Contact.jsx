import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Contactus from "../Contactus";


function Contact() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen">
        <Contactus />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
