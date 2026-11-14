"use client";
import React from "react";
import Image from "next/image";
import Marquee from "../ui/marquee";
const marqueeItem = [
  "/images/brands/1.png",
  "/images/brands/2.png",
  "/images/brands/3.png",
  "/images/brands/4.png",
  "/images/brands/5.png",
  "/images/brands/6.png",
  "/images/brands/7.png",
  // "/images/brands/8.png",
  "/images/brands/9.png",
  "/images/brands/10.png",
  "/images/brands/11.png",
  // "/images/brands/12.png",
  // "/images/brands/13.png",
  // "/images/brands/14.png",
  "/images/brands/15.png",
];
import { motion } from "framer-motion";
import Working from "./Working";

const WeAre = () => {
  return (
    <div className="mx-auto  lg:max-w-7xl w-auto   flex items-center  flex-col flex-wrap lg:pr-20 pr-8 relative z-20 overflow-hidden ">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nsans text-3xl lg:text-7xl font-extrabold lg:mx-auto text-center text-balance "
      >
        &quot;We are one circle of growth,{" "}
        <span className="text-[#039BE4]">succeeding like a flywheel</span>”
      </motion.h2>
      <div className="my-10 overflow-hidden w-screen lg:max-w-7xl">
        <Marquee
          pauseOnHover
          className="flex items-center justify-center overflow-hidden max-w-6xl mx-auto"
        >
          {marqueeItem.map((item, index) => (
            <div className="max-w-[300px] flex items-center mx-5 " key={index}>
              <Image src={item} alt="" width={150} height={150} />
            </div>
          ))}
        </Marquee>
      </div>
      <Working />
    </div>
  );
};

export default WeAre;
