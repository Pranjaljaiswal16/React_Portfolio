import React from "react";
import Hero from "./Hero";
import About from "../pages/About";
import Services from "./Services";
import Counter from "../pages/Counter";
import Portfolio from "../pages/Portfolio";
import Testimonials from "../pages/Testimonials";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Blogs />
      <Contact />
    </>
  );
};

export default Home;
