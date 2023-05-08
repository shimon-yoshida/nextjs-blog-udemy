import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import SectionAnimationWrapper from "./SectionAnimationWrapper";
import SideInTitle from "./SideInTitle";
import SideInSection from "./SideInSection";

const InfoYashima = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      {/* <SectionAnimationWrapper className="flex justify-center"> */}

      {/* </SectionAnimationWrapper> */}
      <div
        className="bg-gradient-to-b from-blue-200 to-blue-600 w-full py-14"
        id="InfoYashima"
      >
        <div className="max-w-screen-xl px-6 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col w-full">
            <ScrollAnimationWrapper>
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 px-6 ">
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
                  <div className="mt-2 relative cursor-pointer">
                    <img
                      src="/images/八洲学園高校はどんな学校？.png"
                      width={400}
                      height={300}
                      alt="八洲学園高校はどんな学校？"
                      className="rounded-xl"
                    />
                    <div className="flex items-center absolute bottom-0 left-0 w-full h-10 bg-blue-500 bg-opacity-50 rounded-b-xl">
                      <p className="mx-auto text-white text-lg">
                        八洲ってどんな学校？
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
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
                  <div className="mt-2 relative cursor-pointer">
                    <img
                      src="/images/キャンパス情報.jpg"
                      width={400}
                      height={400}
                      alt="キャンパス情報"
                      className="rounded-xl"
                    />
                    <div className="flex items-center absolute bottom-0 left-0 w-full h-10 bg-blue-500 bg-opacity-50 rounded-b-xl">
                      <p className="mx-auto text-white text-lg">
                        キャンパス情報
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
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
                  <div className="mt-2 relative cursor-pointer">
                    <img
                      src="/images/学校生活.jpg"
                      width={400}
                      height={300}
                      alt="学校生活"
                      className="rounded-xl"
                    />
                    <div className="flex items-center absolute bottom-0 left-0 w-full h-10 bg-blue-500 bg-opacity-50 rounded-b-xl">
                      <p className="mx-auto text-white text-lg">学校生活</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
              {/* </div>
            <div className="grid grid-flow-row md:grid-flow-col grid-cols-2 md:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-4 px-6 sm:px-0 lg:px-6"> */}
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
                  <div className="mt-2 relative cursor-pointer">
                    <img
                      src="/images/八洲学園高校はどんな学校？.png"
                      width={400}
                      height={300}
                      alt="八洲学園高校はどんな学校？"
                      className="rounded-xl"
                    />
                    <div className="flex items-center absolute bottom-0 left-0 w-full h-10 bg-blue-500 bg-opacity-50 rounded-b-xl">
                      <p className="mx-auto text-white text-lg">
                        八洲ってどんな学校？
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
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
                  <div className="mt-2 relative cursor-pointer">
                    <img
                      src="/images/キャンパス情報.jpg"
                      width={400}
                      height={400}
                      alt="キャンパス情報"
                      className="rounded-xl"
                    />
                    <div className="flex items-center absolute bottom-0 left-0 w-full h-10 bg-blue-500 bg-opacity-50 rounded-b-xl">
                      <p className="mx-auto text-white text-lg">
                        キャンパス情報
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
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
                  <div className="mt-2 relative cursor-pointer">
                    <img
                      src="/images/学校生活.jpg"
                      width={400}
                      height={300}
                      alt="学校生活"
                      className="rounded-xl"
                    />
                    <div className="flex items-center absolute bottom-0 left-0 w-full h-10 bg-blue-500 bg-opacity-50 rounded-b-xl">
                      <p className="mx-auto text-white text-lg">学校生活</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </div>

      <SideInTitle props={true} />
      <SideInSection props={true}>
        セクションフィールドテスト　左から
      </SideInSection>

      <SideInTitle props={false} />
      <SideInSection props={false}>
        セクションフィールドテスト　右から
      </SideInSection>
      <style jsx="true">{`
        .box_img {
          position: relative;
        }
        .under_title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
};

export default InfoYashima;
