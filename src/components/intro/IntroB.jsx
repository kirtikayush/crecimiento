import React, { useState, useEffect } from "react";
import IntroImg1 from "../../assets/images/intro/homepage1.png";
import "./IntroB.css";
import IntroImg2 from "../../assets/images/intro/introImage2.png";
import IntroImg3 from "../../assets/images/intro/introImage3.png";
import { Parallax } from "react-scroll-parallax";

const IntroB = () => {
  const [isWideEnough, setIsWideEnough] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => setIsWideEnough(window.innerWidth > 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div className="intro-container">
    //   <div className="intro-main">
    //     <h1>Crecimiento Consulting Services</h1>
    //     <p>
    //       Strategic consulting partner dedicated to transforming your business
    //       challenges into sustainable growth opportunities through expert
    //       guidance and proven methodologies.
    //     </p>
    //     <button>
    //       <span>Get Started</span>
    //     </button>
    //   </div>

    //   {isDesktop ? (
    //     <Parallax speed={-10}>
    //       <img src={IntroImg1} alt="Intro Background" className="intro-img" />
    //     </Parallax>
    //   ) : (
    //     <img src={IntroImg1} alt="Intro Background" className="intro-img" />
    //   )}
    // </div>
    <div className="intro-container">
      {isWideEnough ? (
        <Parallax speed={-20} className="intro-parallax">
          <img
            src={IntroImg3}
            alt="Crecimiento Consulting"
            className="intro-background"
          />
        </Parallax>
      ) : (
        <img
          src={IntroImg3}
          alt="Crecimiento Consulting"
          className="intro-background"
        />
      )}
      <div className="intro-main">
        <h1>Crecimiento Consulting Services</h1>
        <p>
          Strategic consulting partner dedicated to transforming your business.
        </p>
        <div className="intro-buttons">
          <button>
            <span>Get Started</span>
          </button>
          <button>
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroB;
