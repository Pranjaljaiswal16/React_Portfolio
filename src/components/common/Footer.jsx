import React from "react";
import { social } from "../data/dummyData";

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos="zoom-in-left">{item.icon}</i>
          </>
        ))}
        <p data-aos="zoom-in-right">All Right Resceved 2026</p>
      </footer>
    </>
  );
};

export default Footer;
