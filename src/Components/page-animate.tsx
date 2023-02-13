import { motion } from "framer-motion";

interface Props {
  children: any;
  value: any;
}

const PageAnimate = ({ children, value }: Props) => {
  return (
    <motion.div
      transition={{
        tension: 190,
        friction: 70,
        mass: 0.4,
      }}
      initial={false}
      animate={{ x: value * -100 + "%" }}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimate;
