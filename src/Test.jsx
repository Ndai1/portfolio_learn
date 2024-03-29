import React from "react";
import { motion } from "framer-motion";
function Test() {
  return (
    <div className="course">
      <motion.div
        className="box"
        initial={{ scale: 0 }}
        animate={{ opacity: 0, rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      ></motion.div>
    </div>
  );
}

export default Test;
