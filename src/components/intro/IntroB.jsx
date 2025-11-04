import React, { useState, useEffect } from "react";
import IntroImg1 from "../../assets/images/intro/homepage1.png";
import "./IntroB.css";
import { Parallax } from "react-scroll-parallax";

const IntroB = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-main">
        <h1>Crecimiento Consulting Services</h1>
        <p>
          Strategic consulting partner dedicated to transforming your business
          challenges into sustainable growth opportunities through expert
          guidance and proven methodologies.
        </p>
        <button>
          <span>Get Started</span>
        </button>
      </div>

      {isDesktop ? (
        <Parallax speed={-10}>
          <img src={IntroImg1} alt="Intro Background" className="intro-img" />
        </Parallax>
      ) : (
        <img src={IntroImg1} alt="Intro Background" className="intro-img" />
      )}
    </div>
  );
};

export default IntroB;
