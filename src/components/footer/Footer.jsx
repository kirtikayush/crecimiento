import React from "react";
import "./Footer.css";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const email = "mailto:principalismranchi@gmail.com";
  return (
    <div className="footer-container">
      <div className="footer-main">
        Crecimiento Consulting Services Private Limited
        <div className="footer-contact">
          <h1>Connect with us</h1>
          <a href="mailto:principalismranchi@gmail.com">
            <FaEnvelope className="footer-icon" />
          </a>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
