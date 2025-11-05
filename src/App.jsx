import React from "react";
import "./App.css";
import Menubar from "./components/menubar/Menubar";
import About from "./components/about/About";
import IntroB from "./components/intro/IntroB";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      {/* Fixed background */}
      <div className="app-main"></div>
      <Menubar></Menubar>
      {/* Scrollable content */}
      <div className="content">
        <IntroB />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default App;
