import React from "react";
import "./App.css";
import Main from "./components/main/Main";
import NavBar from "./components/navbar/navBar";
import Right from "./components/right/Right";

const App = () => {
  return (
    <div id="container">
      <div id="nav-box">
        <NavBar />
      </div>
      <Main />
      <Right />
    </div>
  );
};

export default App;