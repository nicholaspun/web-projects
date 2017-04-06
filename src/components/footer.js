import React from "react";
import img from "../data/GitHub-Mark-Light-64px.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <a href="https://github.com/nicholaspun">
      <img src={img} alt="github logo" className="logo" />
    </a>
  )
}

export default Footer;
