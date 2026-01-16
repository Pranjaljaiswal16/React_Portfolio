import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Hero from "../home/Hero";
import About from "./About";
import Services from "../home/Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
};

export default Pages;
