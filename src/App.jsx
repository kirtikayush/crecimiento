import React from "react";
import "./App.css";
import Menubar from "./components/menubar/Menubar";
import Intro from "./components/intro/Intro";

const App = () => {
  return (
    <>
      {/* Fixed background */}
      <div className="app-main"></div>
      <Menubar></Menubar>
      {/* Scrollable content */}
      <div className="content">
        <Intro />
      </div>
    </>
  );
};

export default App;
