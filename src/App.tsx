import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Tech from "./components/tech/Tech";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div className="bg-primary relative z-0">
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <section id="about">
        <About />
      </section>
      {/* 
      <section id="about">
        <About />
      </section>

      <section id="work">
        <Experience></Experience>
      </section>
      <section id="Projects">My Projects</section>
      <section id="contact">
        <Experience></Experience>
      </section> */}
    </div>
  );
}

export default App;
