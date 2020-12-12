import * as React from "react";
import { motion } from "framer-motion";

const variants1 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const variants2 = {
  open: {
    transition: { staggerChildren: 3, delayChildren: 1.0 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const links = ["/compsci", "/gallery"];
const list = ["Comp Sci Programs", "The Gallery"];

export const MenuItem = ({i}) => {
  return (
    <motion.ul className="menuUL" variants={variants2}>
    {itemIds.map(i => (
      <motion.li className="menuLI"
        variants={variants1}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        key={i}
      >
        <div className="text-placeholder" >
        <a className="projects" href={links[i]}>{list[i]}</a>
        </div>
      </motion.li>
    ))}

  </motion.ul>

  );
};
const itemIds = [0, 1];
