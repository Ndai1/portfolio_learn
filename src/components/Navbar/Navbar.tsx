import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { navLinks } from "../../constants";
import { motion } from "framer-motion";
import { close, menu } from "../../assets";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function Navbar() {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop <= 100) {
        setActive("");
      }
    };

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;
        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    //

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <div className="sm:px-16 px-6 fixed top-0 z-20 flex w-full items-center py-5">
      {/* <Sidebar /> */}

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <motion.span
          className="flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          NHPL Dev
        </motion.span>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="hidden list-none flex-row gap-10 sm:flex"
        >
          {navLinks.map((link) => (
            <motion.li
              variants={item}
              key={link.id}
              className={`${
                active === link.id ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] hover:text-white`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
        </motion.ul>

        {/* mobile ul */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-1 items-center justify-end sm:hidden"
        >
          <motion.img
            variants={container}
            initial="hidden"
            animate="visible"
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-10 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-1 list-none flex-col items-start justify-end gap-2"
            >
              {navLinks.map((link) => (
                <motion.li
                  variants={item}
                  key={link.id}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className={`${
                    active === link.id ? "text-white" : "text-secondary"
                  } cursor-pointer text-[18px] hover:text-white`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
