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
    <div className="relative mx-auto h-screen w-full">
      <div className="absolute inset-0 top-[120px] mx-auto max-w-7xl sm:px-16 px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center">
          <div className="h-5 w-5 rounded-full bg-[#915eff]"></div>
          <div className="violet-gradient h-40 w-1 sm:h-40"></div>
        </div>
        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
            Hi, I'm <span className="text-[#915eff] font-bold	">NHPL Dev</span>
          </h1>
          <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-white-100 mt-2">
            I'm a Frontend & Backend developer
          </p>
          <img src={hero} alt="hero" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// <div className="wrapper mx-auto flex w-full max-w-7xl items-center justify-between">
// <motion.div
//   className="textContainer"
//   initial="initial"
//   animate="animate"
//   variants={textVariants}
// >
//   {/* <motion.h2 variants={textVariants}>NGUYEN HO PHI LONG</motion.h2> */}
//   <motion.h1 variants={textVariants}>Fullstack Developer </motion.h1>

//   <motion.div variants={textVariants} className="buttons">
//     <motion.button variants={textVariants}>
//       See the latest works
//     </motion.button>
//     <motion.button variants={textVariants}>Contact me</motion.button>
//   </motion.div>
//   <motion.img
//     animate="scrollButton"
//     variants={textVariants}
//     src={scroll}
//   />
// </motion.div>
// </div>

// <div className="imageContainer">
// <img src={hero} alt="" />
// </div>
