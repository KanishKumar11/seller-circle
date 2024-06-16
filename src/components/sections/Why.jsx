"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Why = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col">
      {" "}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-4xl lg:text-5xl uppercase text-center my-7"
      >
        Why <span className="text-[#039BE4]">Seller circle? </span>
      </motion.h2>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/why-us.png"
          alt=""
          width={1280}
          height={1500}
          className="inset-0 bg-cover object-cover"
        />
      </motion.div>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-2xl max-w-5xl mx-auto lg:text-5xl uppercase text-center mt-7"
      >
        Crafting Amazon narratives that convert:{" "}
        <span className="text-[#039BE4]">Let’s get you Retail Ready </span>
      </motion.h2>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="mb-20 font-bold text-xl lg:text-3xl max-w-4xl mx-auto text-center p-5"
      >
        30+ years of expertise blend into captivating stories through Product
        display images, A+, brand stories, videos, and a bespoke Brand store for
        maximum engagement .
      </motion.p>
    </div>
  );
};

export default Why;
