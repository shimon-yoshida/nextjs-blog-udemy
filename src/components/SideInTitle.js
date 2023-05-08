import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getSideInAnimation from "../utils/getSideInAnimation";

const SideInTitle = ({ props }) => {
  const sideInAnimation = useMemo(() => getSideInAnimation(props), []);
  return (
    <motion.div
      className="bg-gradient-to-b from-blue-200 to-blue-600 w-4/5 py-14 my-5"
      initial="offscreen"
      whileInView="onscreen"
      variants={sideInAnimation}
      viewport={{ once: true }}
    >
      <p className="text-white text-3xl font-bold ml-10">セクションテスト</p>
    </motion.div>
  );
};

export default SideInTitle;
