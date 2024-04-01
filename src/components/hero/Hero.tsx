import React from "react";
import "./hero.scss";
import { hero, scroll } from "../../assets";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          {/* <motion.h2 variants={textVariants}>NGUYEN HO PHI LONG</motion.h2> */}
          <motion.h1 variants={textVariants}>Fullstack Developer </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img
            animate="scrollButton"
            variants={textVariants}
            src={scroll}
          />
        </motion.div>
      </div>

      <div className="imageContainer">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
