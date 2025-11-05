import React from "react";
import "./App.css";
import Menubar from "./components/menubar/Menubar";
import About from "./components/about/About";
import IntroB from "./components/intro/IntroB";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
const App = () => {
  return (
    <>
      {/* Fixed background */}
      <div className="app-main"></div>
      <Menubar></Menubar>
      {/* Scrollable content */}
      <div className="content">
        <IntroB />
        {/* <section id="about">
          <About />
        </section> */}
        <About id="about" />
        <Services id="services" />
        <Footer id="footer" />
      </div>
    </>
  );
};

export default App;
