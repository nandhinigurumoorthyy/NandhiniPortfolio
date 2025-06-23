import { animate, motion } from "framer-motion";

const circleVariants = {
  animate1: {
    scale: [1, 1.2, 1],
    x: [0, 100, 0],
    y: [0, 50, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  animate2: {
    scale: [1, 1.1, 1],
    x: [0, 120, 0],
    y: [0, -60, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  animate3: {
    scale: [1, 1.3, 1],
    x: [0, 140, 0],
    y: [0, 70, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  animate4: {
    scale: [1, 1.4, 1],
    x: [0, 160, 0],
    y: [0, -80, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  animate5: {
    scale: [1, 1.5, 1],
    x: [0, 180, 0],
    y: [0, 90, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  animate6: {
    scale: [1, 1.6, 1],
    x: [0, 200, 0],
    y: [0, -100, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const BlurBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[150px] opacity-70">
      <motion.div
        className="bg-[#818cf8]/30 w-[350px] h-[250px] rounded-full absolute"
        variants={circleVariants}
        animate="animate1"
      ></motion.div>
      <motion.div
        className="bg-[#5f6368]/40 w-[360px] h-[260px] rounded-full absolute"
        variants={circleVariants}
        animate="animate2"
      ></motion.div>
      <motion.div
        className="bg-[#9ca3af]/30 w-[370px] h-[270px] rounded-full absolute"
        variants={circleVariants}
        animate="animate3"
      ></motion.div>
      <motion.div
        className="bg-[#a78bfa]/20 w-[380px] h-[280px] rounded-full absolute"
        variants={circleVariants}
        animate="animate4"
      ></motion.div>
      <motion.div
        className="bg-[#6b7280]/30 w-[390px] h-[290px] rounded-full absolute"
        variants={circleVariants}
        animate="animate5"
      ></motion.div>
      <motion.div
        className="bg-[#60a5fa]/30 w-[400px] h-[300px] rounded-full absolute"
        variants={circleVariants}
        animate="animate6"
      ></motion.div>
    </div>
  );
};

export default BlurBackground;
