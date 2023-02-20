import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  isGpt: boolean;
};

const characterAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { deay: 0.08, staggerChildren: 0.02 },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, isGpt }) => {
  const animatedText = isGpt ? text.split("") : [];

  return isGpt ? (
    <motion.p
      variants={sentence}
      initial="hidden"
      animate="visible"
      className="animate-text"
    >
      {animatedText.map((text, i) => (
        <motion.span aria-hidden="true" variants={characterAnimation} key={i}>
          {text}
        </motion.span>
      ))}
    </motion.p>
  ) : (
    <p>{text}</p>
  );
};

export default AnimatedText;
