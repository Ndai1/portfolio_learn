import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Tech from "./components/tech/Tech";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>

      <section id="About">
        <About />

      </section>


      <section id="Projects"></section>
      <section id="Portfolio"></section>
      <section id="Contact"></section>
    </div>
  );
}

export default App;
