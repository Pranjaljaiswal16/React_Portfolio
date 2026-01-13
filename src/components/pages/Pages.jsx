import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Hero from "../home/Hero";
import About from "./About";
import Services from "../home/Services";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default Pages;
