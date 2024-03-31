import React from "react";
import "./about.scss";
import { creator, web, backend, reactjs, linkedin } from "../../assets";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../utils/motion";
import Tech from "../tech/Tech";
const services = [
  {
    index: 0,
    title: "Web developer",
    icon: web,
  },
  {
    index: 1,
    title: "Backend developer",
    icon: backend,
  },
  {
    index: 2,
    title: "Frontend developer",
    icon: reactjs,
  },
  {
    index: 3,
    title: "Quick leaner",
    icon: creator,
  },
];

const About = () => {
  return (
    <>
      <div className="about">
        <motion.div
          initial="hidden"
          animate="show"
          variants={textVariant()}
          className="wrapper"
        >
          <motion.div variants={textVariant()}>
            <motion.p variants={fadeIn("", "", 0.1, 1)}>INTRODUCTION</motion.p>
            <motion.h1 variants={fadeIn("", "", 0.5, 1)}>Overview.</motion.h1>
            <motion.h4 variants={fadeIn("", "", 1, 1)}>
              I'm a skilled software developer with experience in .NET backend
              and Typescript & Javascript Frontend, and expertise in frameworks
              like .NET MVC, .NET 6 above, ReactJS. I'm a quicker learner and
              collaborate closely with clients to crate efficent, scaleable, and
              user-friendly solutions that solve real-world problems. Let's work
              together to bring your ideas to life!
            </motion.h4>
          </motion.div>

          <div className="serviceBlock">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className="serviceDetail"
              >
                <div className="serviceContent">
                  <img src={service.icon} alt="" />
                  <h3>{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="technologies">
            <Tech />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
