/**
 * Motion demo
 *
 */

import React from "react";
import { motion } from "framer-motion";

const variants = {
  hide: {
    opacity: 0,
    x: "-100vw",
  },

  visible: (direction) => {
    console.log("x", direction);

    return {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        type: "tween",
        staggerChildren: 0.4,
        staggerDirection: -1,
      },
    };
  },
};

const innerVariants = {
  hide: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const MotionDemo = () => {
  return (
    <React.Fragment>
      <div className="m-auto max-w-[400px] mt-32">
        <motion.div variants={variants} initial="hide" animate="visible">
          <motion.h1 variants={innerVariants} className="py-2">
            Motion demo
          </motion.h1>
          <motion.ul variants={innerVariants}>
            <li> List 1</li>
            <li> List 2 </li>
            <li> List 3 </li>
            <li> List 4 </li>
          </motion.ul>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default MotionDemo;
