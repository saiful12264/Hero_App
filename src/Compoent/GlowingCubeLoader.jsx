import React from "react";
import { motion } from "framer-motion";
import { PuffLoader } from "react-spinners";

const GlowingCubeLoader = () => {
 return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-xl z-50">
      <motion.p
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
        className="text-5xl font-bold text-transparent bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]"
      >
        Loading
      </motion.p>
    </div>
  );
};

export default GlowingCubeLoader;
