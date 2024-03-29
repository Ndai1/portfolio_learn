import React, { useState } from "react";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import { motion } from "framer-motion";
function Sidebar() {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div animate={open ? "open" : "closed"} className="sidebar">
      <motion.div variants={variants} className="bg">
        <Links></Links>
        <Links></Links>
        <Links></Links>
        <Links></Links>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
