"use client";
import Image from "next/image";
import React from "react";
import { easeInOut, motion } from "framer-motion";
const services = [
  { number: "01", title: "Ignite Your Business Growth" },
  { number: "02", title: "Tailored Holistic Solutions" },
  { number: "03", title: "Maximize Your ROI" },
  { number: "06", title: "Full Funnel Advertising Strategy" },
  { number: "05", title: "Transparent and Confident Delegation" },
  { number: "04", title: "Collaborative Account Management" },
];

const ServiceItem = ({ service, left }) => (
  <motion.div
    initial={{ opacity: 0, x: left ? -100 : 100, scale: 1.2 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{
      delay: 0.3 * service.number,
      ease: easeInOut,
      type: "spring",
    }}
    viewport={{ once: true }}
    className={`flex items-center lg:w-auto min-w-[80px] max-md:max-w-[120px]  z-10 ${
      left
        ? service.number % 2 == 1
          ? "md:-mr-24 -mr-10   flex-row-reverse max-md:ml-10 "
          : "flex-row-reverse -mr-16 "
        : service.number % 2 == 0
        ? "lg:-ml-24 -ml-[70px] "
        : "flex-row lg:-ml-16 -ml-8 "
    } `}
  >
    <div className="bg-blue-500 text-white rounded-full  flex items-center justify-center lg:p-4 p-2 font-bold lg:text-4xl text-base ">
      {service.number}
    </div>
    <div className=" h-1 bg-background w-10" />
    <div className=" border-blue-500 border-2 rounded-xl p-2  relative lg:w-[300px] min-h-[67px]  flex items-center justify-center lg:px-5 text-center lg:text-base text-[8px] text-balance font-bold text-[#272727]">
      <div className="absolute h-1.5  w-10 -top-1 left-1/2 -translate-x-1/2 bg-white z-[11]" />
      {service.title}
      <div className="absolute h-1.5  w-10 -bottom-1 left-1/2 -translate-x-1/2 bg-white z-[11]" />
    </div>
  </motion.div>
);

const AM1 = () => (
  <div className="flex flex-wrap items-center justify-center space-y-6 md:space-y-0 md:space-x-6 my-20">
    <div className="flex flex-col space-y-4 ">
      {services.slice(0, 3).map((service) => (
        <ServiceItem key={service.number} service={service} left={true} />
      ))}
    </div>
    <div className="lg:p-20 p-12  bg-white border-2 border-dashed border-background border-t-0 border-l-0 rotate-45  flex items-center justify-center rounded-full">
      <Image
        src="/images/sa1.png"
        alt=""
        width={150}
        height={150}
        className="-rotate-45 lg:w-[150px] lg:h-[150px] h-[50px] w-[50px]"
      />
    </div>
    <div className="flex flex-col space-y-4 ">
      {services.slice(3).map((service) => (
        <ServiceItem key={service.number} service={service} left={false} />
      ))}
    </div>
  </div>
);

export default AM1;
