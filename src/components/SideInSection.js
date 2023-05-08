import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getSideInAnimation from "../utils/getSideInAnimation";

const SideInSection = ({ children, props }) => {
  const sideInAnimation = useMemo(() => getSideInAnimation(props), []);
  return (
    <motion.div
      className="bg-gradient-to-br from-blue-200 via-blue-800 to-blue-600 w-4/5 h-96 py-14 my-5"
      initial="offscreen"
      whileInView="onscreen"
      variants={sideInAnimation}
      viewport={{ once: true }}
    >
      <p className="text-white text-3xl font-bold ml-10">{children}</p>
    </motion.div>
  );
};

export default SideInSection;
