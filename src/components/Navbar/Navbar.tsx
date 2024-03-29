import React from "react";
import "./navbar.scss";
import { facebook, linkedin } from "../../assets";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
function Navbar() {
  return (
    <div className="navbar">
      {/*sidebar */}
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          NHPL Dev
        </motion.span>
        <div className="social">
          <a href="#">
            <img src={facebook} alt="facebook image" />
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin image" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
