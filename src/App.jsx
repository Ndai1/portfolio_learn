import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id="Portfolio">
        <Parallax></Parallax>
      </section>
      <section id="Project"></section>
      <section id="Contact"></section>
    </div>
  );
}

export default App;
