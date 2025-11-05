import React from "react";
import "./App.css";
import Menubar from "./components/menubar/Menubar";
import About from "./components/about/About";
import IntroB from "./components/intro/IntroB";
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
      </div>
    </>
  );
};

export default App;
