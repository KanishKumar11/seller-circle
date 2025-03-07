"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import CaseStudyCarousel from "./CaseStudyCarousel";

const Creative = () => {
  return (
    <div className="mx-auto  flex flex-col my-20 lg:px-20 px-8">
      {" "}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-bold text-xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
      >
        Creative Success
      </motion.h3>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-2xl lg:text-6xl max-w-5xl mx-auto text-center my-7"
      >
        Elevating Creativity to Success:{" "}
        <span className="text-[#039BE4]">Your Roadmap to Achievements! </span>
      </motion.h2>
      <CaseStudyCarousel homePage />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className=" flex items-center justify-center "
      >
        {" "}
        <Link href="/case-studies">
          <Button variant="cta">VIEW OUR SUCCESS STORIES</Button>
        </Link>
      </motion.div>{" "}
    </div>
  );
};

export default Creative;
