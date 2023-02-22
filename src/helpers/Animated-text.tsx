import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleAnimation } from "../App/feature/user/other";

type AnimatedTextProps = {
  text: string;
};

const characterAnimation = {
  hidden: {
    display: "none",
  },
  visible: {
    display: "inline",
  },
};

const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const dispatch = useDispatch();
  const animatedText = text.split("");

  const onAnimationDone = () => {
    dispatch(toggleAnimation());
  };

  return (
    <motion.p
      onAnimationComplete={onAnimationDone}
      variants={sentence}
      initial={"hidden"}
      animate={"visible"}
      className="animate-text"
    >
      {animatedText.map((text, i) => (
        <motion.span aria-hidden="true" variants={characterAnimation} key={i}>
          {text}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedText;
