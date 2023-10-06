import React from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Shared/Navbar/Navbar";
import { Cube } from "react-preloaders2";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Cube color={"#261c0e"} background="#d90254" time={1500} />
    </div>
  );
}

export default App;
