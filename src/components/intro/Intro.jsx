import React, { useEffect, useState } from "react";
import "./Intro.css";
import IntroImg1 from "../../assets/images/intro/homepage1.png";

const Intro = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isParallaxEnabled = windowWidth > 1200;

  return (
    <section className="intro-parallax">
      <div
        className="intro-content"
        style={{
          transform: isParallaxEnabled
            ? `translateY(${offsetY * 0.2}px)`
            : "none",
        }}
      >
        <h1>
          Crecimiento Consulting Services Pvt Ltd: Empowering Your Business
          Growth
        </h1>
        <p>
          Strategic consulting partner dedicated to transforming your business
          challenges into sustainable growth opportunities through expert
          guidance and proven methodologies.
        </p>
        <button>
          <span>Get Started</span>
        </button>
      </div>

      <div
        className="intro-background"
        style={{
          transform: isParallaxEnabled
            ? `translateY(${Math.floor(offsetY * 0.4)}px)`
            : "none",
        }}
      >
        <img src={IntroImg1} alt="Intro Background" />
      </div>
    </section>
  );
};

export default Intro;
