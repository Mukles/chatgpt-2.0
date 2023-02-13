import { motion } from "framer-motion";
import React from "react";

interface Props {
  value: number;
  children: any;
}

const Pager = ({ children, value }: Props) => {
  return (
    <div className="page-container">
      <motion.div
        transition={{
          tension: 190,
          friction: 70,
          mass: 0.4,
        }}
        initial={false}
        animate={{ x: -value * 100 + "%" }}
        className="page-animated"
      >
        {React.Children.map(children, (child, i) => (
          <div
            className="page"
            key={i}
            aria-hidden={value !== i}
            tabIndex={value === i ? 0 : -1}
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pager;
