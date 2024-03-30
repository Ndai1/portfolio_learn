import { motion } from "framer-motion";
import { scale } from "maath/dist/declarations/src/vector2";
import React from "react";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Portfolio", "Project", "Contact"];
  return (
    <>
      <motion.div variants={variants} className="links">
        {items.map((item) => (
          <motion.a
            key={item}
            href={`#${item}`}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default Links;
