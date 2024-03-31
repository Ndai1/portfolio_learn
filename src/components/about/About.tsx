import React from "react";
import "./about.scss";
import { web, backend, reactjs, linkedin } from "../../assets";

const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <p>INTRODUCTION</p>
        <h1>Overview.</h1>
        <h4>
          I'm a skilled software developer with experience in .NET backend and
          Typescript & Javascript Frontend, and expertise in frameworks like
          .NET MVC, .NET 6 above, ReactJS. I'm a quicker learner and collaborate
          closely with clients to crate efficent, scaleable, and user-friendly
          solutions that solve real-world problems. Let's work together to bring
          your ideas to life!
        </h4>

        <div className="serviceBlock">
          <div className="serviceDetail">
            <div className="serviceContent">
              <img src={web} alt="" />
              <h3>Web developer</h3>
            </div>
          </div>

          <div className="serviceDetail">
            <div className="serviceContent">
              <img src={linkedin} alt="" />
              <h3>Web developer zcxz</h3>
            </div>
          </div>

          <div className="serviceDetail">
            <div className="serviceContent">
              <img src={linkedin} alt="" />
              <h3>Web developer</h3>
            </div>
          </div>
          <div className="serviceDetail">
            <div className="serviceContent">
              <img src={linkedin} alt="" />
              <h3>Web developer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
