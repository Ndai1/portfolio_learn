import React from "react";
import "./app.scss";
import Test from "./Test";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar></Navbar>
      </section>
      <section id="Portfolio"></section>
      <section id="Project"></section>
      <section id="Contact"></section>
    </div>
  );
}

export default App;
