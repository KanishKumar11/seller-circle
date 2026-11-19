"use client";
import React from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import ServiceCard from "@/components/cards/ServiceCard";

const Services = ({ slice }) => {
  return (
    <div className="mx-auto my-20 max-w-7xl flex flex-col  px-8 relative z-10">
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-extrabold text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        OUR SERVICES
      </motion.h3>
      <div className="flex flex-row flex-wrap justify-center mb-20 gap-10 relative z-10 mt-20 ">
        {services
          .filter((item, idx) => idx + 1 != slice)
          .map((item, index) => (
            <ServiceCard item={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Services;
