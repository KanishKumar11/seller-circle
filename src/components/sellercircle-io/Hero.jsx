import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-5 items-center justify-center lg:py-20 py-8">
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="text-tp lg:w-1/2 flex flex-col gap-5 my-10"
      >
        <motion.h2
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={variants1}
          className="font-[900] text-balance text-left lg:text-5xl text-3xl"
        >
          Welcome to SellerCircle.io Amazon Analytics
        </motion.h2>
        <motion.h3
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={variants1}
          className="text-3xl font-bold text-left text-balance"
        >
          All your Amazon data. At your fingertips
        </motion.h3>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-semibold text-lg text-balance"
        >
          Unlock the full potential of your Amazon business with our
          comprehensive analytics application. Our state-of-the-art platform
          provides you with the insights you need to optimize every aspect of
          your Amazon operations. From inventory management to advanced
          advertising analytics, we have you covered.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ y: 0, x: 0 }}
        whileHover={{ x: 20, y: -20 }}
        className="lg:w-1/2 bg-[url('/sellercircle-io/images/bg2.png')] bg-cover flex flex-col items-start z-0 relative"
      >
        <div className="flex flex-row items-center justify-between z-10 -ml-5">
          <motion.div className="p-3 w-10 flex items-center justify-center h-10 text-pretty border border-gray-300 rounded-full bg-white ">
            3
          </motion.div>
          <div className="md:w-[400px] w-[200px] h-0.5 bg-gray-700" />
          <div className="relative">
            <Image
              src="/sellercircle-io/images/16.png"
              alt=""
              height={200}
              width={200}
              className="animate-rotate"
            />
            <div className="absolute inset-0 h-full w-full flex flex-col items-center justify-center">
              <span className="font-bold">Prediction</span>
              What Might?
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between z-10 -ml-5 ">
          <div className="p-3 w-10 flex items-center justify-center h-10 text-pretty border border-gray-300 rounded-full bg-white ">
            2
          </div>
          <div className="md:w-[300px] w-[160px] h-0.5 bg-gray-700" />
          <div className="relative">
            <Image
              src="/sellercircle-io/images/16.png"
              alt=""
              height={170}
              width={170}
              className="animate-rotate"
            />
            <div className="absolute inset-0 h-full w-full flex flex-col items-center justify-center">
              <span className="font-bold">Analysis</span>
              Why?
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-row items-center justify-between z-10 -ml-5">
          <div className="p-3 w-10 flex items-center justify-center h-10 text-pretty border border-gray-300 rounded-full bg-white ">
            1
          </div>
          <div className="md:w-[200px] w-[125px] h-0.5 bg-gray-700" />
          <div className="relative">
            <Image
              src="/sellercircle-io/images/16.png"
              alt=""
              height={150}
              width={150}
              className="animate-rotate"
            />
            <div className="absolute inset-0 h-full w-full flex flex-col items-center justify-center">
              <span className="font-bold">Reporting</span>
              What?
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
