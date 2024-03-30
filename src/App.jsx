import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id="Portfolio"></section>
      <section id="Project"></section>
      <section id="Contact"></section>
    </div>
  );
}

export default App;
