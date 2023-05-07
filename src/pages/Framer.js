import React, { useMemo } from "react";
import { motion } from "framer-motion";
import css from "styled-jsx/css";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";

const Framer = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <ScrollAnimationWrapper className="flex justify-center">
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-relaxed"
        >
          八洲学園高等学校について
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
        >
          よくあるご質問も含めて以下の内容を御覧ください。
        </motion.p>
      </ScrollAnimationWrapper>

      <div className={`${className} wrapper`}>
        <motion.button whileTap={{ scale: 1.5 }} className={className}>
          クリック
        </motion.button>
      </div>
      {styles}

      <div
        style={{
          display: "flex",
          height: "100lvh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "10px",
            backgroundColor: "pink",
          }}
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        />
      </div>
      <ScrollAnimationWrapper className="flex justify-center">
        <motion.div
          variants={scrollAnimation}
          className="justify-center items-center py-2 px-2 lg:px-2 xl:px-2"
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <div className="p-2 lg:p-0 mt-2">
            <img
              src="/images/八洲学園高校はどんな学校？.png"
              width={400}
              height={300}
              alt="八洲学園高校はどんな学校？"
              className="rounded-xl"
            />
          </div>
          <p className="text-lg text-black-600 font-medium capitalize my-2">
            八洲ってどんな学校？
          </p>
        </motion.div>
      </ScrollAnimationWrapper>

      <motion.div
        animate={{ x: 100 }}
        transition={{ type: "spring", damping: 0 }}
      >
        <p>ああああああ</p>
      </motion.div>
    </>
  );
};

const { className, styles } = css.resolve`
  .wrapper {
    margin: 100px;
  }
  button {
    border: none;
    border-radius: 8px;
    width: 100px;
    height: 30px;
    background: red;
    color: white;
  }
`;

export default Framer;
