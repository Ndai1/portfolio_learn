import { motion } from "framer-motion";
import React from "react";

function ToggleButton({ setOpen }) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg
        height="23"
        width="23"
        viewBox="0 0 23 23"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 2 16.5 L 17 2.5" },
          }}
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        />

        <motion.path
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          strokeWidth="3"
          stroke="black"
          d="M 2 9.423 L 20 9.423"
          strokeLinecap="round"
        />

        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}

export default ToggleButton;
