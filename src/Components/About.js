import React from "react";
import { motion } from "framer-motion";

function About(props) {
  return (
    <motion.div
    initial= {{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <div>
      <h1>About</h1>
    </div>
    </motion.div>
  )
}

export default About;
