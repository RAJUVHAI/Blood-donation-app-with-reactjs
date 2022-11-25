import React from "react";
import Footer from "../Layouts/Frontend/Footer";
import Navbar from "../Layouts/Frontend/Navbar";
import BloodInfo from "./BloodInfo/BloodInfo";
import ContactForm from "./ContactForm/ContactForm";
import Hero from "./Hero/Hero";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BloodInfo />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
