"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Marquee from "../ui/marquee";
import { easeIn, easeInOut, motion } from "framer-motion";
const strategiesItem = [
  {
    icon: "/images/31.svg",
    title: "Data-Driven Insights",
    description:
      "At the forefront of our approach is delivering clear and impactful insights on how advertising outcomes align with business objectives. We leverage tech-driven APIs for Amazon advertising, enabling informed real-time decisions.",
  },
  {
    icon: "/images/32.svg",
    title: "Culture & Our Experianced Team",
    description:
      "Our in-house account experts and advertising managers collaborate on advanced strategies, bringing diverse expertise from unique backgrounds and skill sets. We are certified with over 14 advertising certifications and are advanced.",
  },
  {
    icon: "/images/33.svg",
    title: "Speed to Market - Our Experience",
    description:
      "With extensive experience across multiple categories and working with over 6000+ brands, we excel in delivering various services swiftly. Our agility in launching and researching products to formulating strategies is our hallmark, powered by our in-house retail tech and our SAAS partner's data-driven approach, ensuring efficiency in reaching the market.",
  },
  {
    icon: "/images/34.svg",
    title: "Transparency",
    description:
      "Transparency is a cornerstone of our values. You can expect candid feedback that prioritizes your best interests, ensuring no missed opportunities. We provide upfront insights on what's working and what's not, backed by clear data and reporting.",
  },
];
const marqueeItem = [
  "/images/s1.png",
  "/images/s2.png",
  "/images/s3.png",
  "/images/s4.png",
  "/images/s5.png",
  "/images/s6.png",
  "/images/s7.png",
  "/images/s8.png",
  "/images/s9.png",
  "/images/s10.png",
];
const Strategies = () => {
  const [hoverIndex, setHoverIndex] = useState(undefined);
  const handleHover = (index) => {
    setHoverIndex(index);
  };
  return (
    <div className="mx-auto max-w-7xl flex flex-col my-20 px-8">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className=" font-extrabold text-2xl lg:text-5xl max-w-4xl mx-auto text-center my-7 uppercase"
      >
        Crafting strategies as{" "}
        <span className="text-[#039BE4]"> unique as your business. </span>{" "}
      </motion.h2>
      <div className="flex flex-row flex-wrap items-start justify-center lg:justify-between gap-3">
        {strategiesItem.map((item, index) => (
          <div className="drop-shadow-xl" key={index}>
            <div className=" bg-white py-8 px-5 lg:w-[230px] min-h-[500px]   w-[85%] group rounded-[43px]">
              <div className="flex p-5 w-[110%]  ml-4 bg-[#039BE4] items-center justify-center rounded-[23px] relative mt-7">
                <Image
                  src={item.icon}
                  width={120}
                  height={60}
                  alt=""
                  className="h-[80px] w-[120px]"
                />
                <div className="bg-[#039BE4] -bottom-11 h-[140%] w-1/2 absolute right-0 -z-10 rounded-[40px]" />
                <div className="bg-[#066EA0] -bottom-[42.5px] h-[43px] w-[87px] absolute right-1 -z-10 rounded-[21px]" />
              </div>
              <h2 className="font-extrabold text-2xl text-center mt-5">
                {item.title}
              </h2>
              <div className="overflow-hidden min-h-[150px] max-h-[200px]">
                <p
                  className={`max-w-[380px] text-center mt-3 ${
                    hoverIndex == index ? "h-auto" : "h-[100px] "
                  }`}
                >
                  {item.description}
                </p>
              </div>
              <div
                className={`flex items-end justify-end bg-white/40 backdrop-blur-none w-full z-20 relative h-16  ${
                  hoverIndex == index ? "" : "-mb-5 absolute bottom-4 "
                } `}
              >
                {" "}
                <Button
                  variant="cta"
                  className="mx-auto"
                  onClick={() =>
                    hoverIndex === index
                      ? handleHover(undefined)
                      : handleHover(index)
                  }
                >
                  KNOW MORE
                </Button>
              </div>
            </div>
          </div>
        ))}
        <div className="w-[230px] h-full flex flex-col items-center justify-center">
          <Image
            src="/images/1.svg"
            alt=""
            width={200}
            height={200}
            className="self-center"
          />
          <Button variant="cta" className="px-9 mt-5">
            KNOW MORE
          </Button>
        </div>
      </div>
      <div className="my-20">
        <Marquee
          pauseOnHover
          className="flex items-center justify-center gap-5"
        >
          {marqueeItem.map((item, index) => (
            <div className="max-w-[300px] flex items-center " key={index}>
              <Image
                src={item}
                alt=""
                loading="lazy"
                width={300}
                height={200}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Strategies;
