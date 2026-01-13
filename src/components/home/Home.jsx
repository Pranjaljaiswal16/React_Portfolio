import React from "react";
import Hero from "./Hero";
import About from "../pages/About";
import Services from "./Services";
import Counter from "../pages/Counter";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
    </>
  );
};

export default Home;
