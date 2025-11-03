import React from "react";
import "./App.css";
import Menubar from "./components/Menubar";

const App = () => {
  return (
    <>
      {/* Fixed background */}
      <div className="app-main"></div>
      <Menubar></Menubar>
      {/* Scrollable content */}
      <div className="content"></div>
    </>
  );
};

export default App;
