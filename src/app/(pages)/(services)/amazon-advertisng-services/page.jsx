"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { easeIn, motion } from "framer-motion";
import AM1 from "@/components/sections/services/AM1";
import Audit from "@/components/forms/Audit";
import Image from "next/image";
import Services from "@/components/sections/about/Services";
import { approchItems, marqueeItem } from "@/lib/data";
import CTA from "@/components/pages/growth/CTA";
import Footer from "@/components/Footer";
import Marquee from "@/components/ui/marquee";
import CycleCard from "@/components/cards/CycleCard";
import { StickyScrollCards } from "@/components/pages/advertising/StickyScrollCards";
import Awards from "@/components/sections/Awards";

const cycle = [
  {
    title: "Looking for Inspiration",
    description: "The first point of contact for product/brand inspiration.",
  },
  {
    title: "Product/Brand Awareness",
    description: "Increasing awareness of your product or brand.",
  },
  {
    title: "Improving Purchase Intent",
    description: "Enhancing the intent of customers to make a purchase.",
  },
  {
    title: "Finding Information",
    description:
      "Addressing customer preferences and providing relevant information.",
  },
  {
    title: "Driving Purchase",
    description: "Encouraging customers to make a purchase.",
  },
];
const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg-white  bg-grid-black/[0.05] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl mx-auto my-20 z-[39] lg:px-5">
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
          >
            Amazon Advertising Services
          </motion.h3>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
          >
            Engage Shoppers Through the Product Discovery Cycle{" "}
          </motion.h2>
          <motion.p
            className="mx-auto lg:max-w-4xl text-center text-wrap"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
          >
            Understanding the customer journey is key to engaging with shoppers
            effectively. The product discovery cycle highlights the path toward
            connecting with customers:
          </motion.p>
          <div className="flex flex-row flex-wrap justify-center  gap-10 relative z-10 my-20 max-lg:px-5  ">
            {cycle.map((item, idx) => (
              <CycleCard item={item} index={idx} key={idx} />
            ))}
          </div>
          <div className="my-5 p-2">
            {" "}
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
            >
              Holistic Flywheel Strategy for Amazon Advertising
            </motion.h2>
            <motion.p
              className="mx-auto max-w-4xl text-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
            >
              We create a holistic Flywheel strategy tailored to your Amazon
              Advertising needs, taking into account the core value of your
              product and leveraging data to unlock the Amazon Flywheel.
            </motion.p>{" "}
          </div>
          <div className="my-5 p-2">
            {" "}
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
            >
              Unlocking the Full Potential of Your Amazon Presence
            </motion.h2>
            <motion.p
              className="mx-auto max-w-4xl text-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
            >
              Unlock the full potential of your Amazon presence with our
              targeted advertising campaigns, designed to maximize ROI. We
              utilize advanced techniques for enhanced visibility and sales
              while optimizing ad spend. Through our marketing stream and
              tracking capabilities, we ensure that every dollar spent delivers
              a meaningful impact, driving measurable results for your brand.
            </motion.p>{" "}
          </div>
          <div className="flex  flex-row flex-wrap px-5 gap-10 items-center justify-center">
            <Image
              src="/images/1.png"
              alt=""
              width={500}
              height={500}
              className="w-[250px] h-auto "
            />
            <Image
              src="/images/amazon2.png"
              alt=""
              width={500}
              height={500}
              className="w-[250px] h-auto "
            />
          </div>
          <StickyScrollCards />
          <div className="my-10 p-4">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
            >
              Unlocking the Full Potential of Your Amazon Presence
            </motion.h2>
            <motion.p
              className="mx-auto max-w-4xl text-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
            >
              Unlock the full potential of your Amazon presence with our
              targeted advertising campaigns, designed to maximize ROI. We
              utilize advanced techniques for enhanced visibility and sales
              while optimizing ad spend. Through our marketing stream and
              tracking capabilities, we ensure that every dollar spent delivers
              a meaningful impact, driving measurable results for your brand.
            </motion.p>
          </div>
          <div className="">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10 px-4"
            >
              No one-size-fits-all here,{" "}
              <span className="text-[#039BE4]">
                only tailored strategies. {" "}
              </span>
            </motion.h2>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              className="nunito  text-base lg:text-xl max-w-5xl mx-auto text-center my-7 px-4"
            >
              At Seller Circle, we specialize in scaling sales for brands on
              Amazon and other marketplaces through a holistic approach and
              proven strategies for PPC and DSP. As an advanced Amazon partner
              with hands-on expertise across all categories, we’ve worked with
              over 1000+ brands, tailoring unique strategies to maximize ROI and
              impact profits. Our proactive, data-driven team ensures
              transparent advertising and effective conversion engines. With our
              tech-enabled, comprehensive services, your brand will not only
              grow but thrive in the competitive marketplace. Join us and
              experience continuous and sustainable growth.
            </motion.p>
          </div>
          <div className="flex flex-row flex-wrap gap-16 mt-16 px-4 pl-8">
            <div className="flex flex-row lg:max-w-[45%]">
              <div>
                <div className="w-[2px] rounded-2xl h-[90%] justify-self-center self-center bg-[#A9A8A8] mt-[20px]" />
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                {" "}
                {approchItems.map((item, index) => (
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 100 }}
                    viewport={{ once: true }}
                    key={index}
                    className="flex items-center justify-center  gap-5 flex-row font-bold relative "
                  >
                    <div className="absolute -left-6">
                      <Image
                        src="/images/20.webp"
                        alt=""
                        height={50}
                        width={50}
                      />
                    </div>{" "}
                    jj
                    <div className="  rounded-full flex items-center justify-center ml-10">
                      {" "}
                      <Image
                        src={item.icon}
                        height={100}
                        width={100}
                        alt=""
                        className="lg:min-h-[100px] min-h-[50px] min-w-[50px] lg:min-w-[100px]"
                      />
                    </div>
                    <div className="h-[70px] w-[70px] flex items-center justify-center text-6xl bg-clip-text from-[#755AFF] to-[#9B88FF] bg-gradient-to-r text-transparent font-extrabold">
                      {index + 1}
                    </div>
                    {item.text}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mx-auto">
              <Audit />
            </div>
          </div>
          <Awards />
          <Services slice="2" />
          <div className="">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10"
            >
              Brands <span className="text-[#039BE4]">we work with  </span>
            </motion.h2>
            <div className="my-10 overflow-hidden w-screen lg:max-w-7xl">
              <Marquee
                pauseOnHover
                className="flex items-center justify-center overflow-hidden max-w-6xl mx-auto"
              >
                {marqueeItem.map((item, index) => (
                  <div
                    className="max-w-[300px] flex items-center mx-5 "
                    key={index}
                  >
                    <Image src={item} alt="" width={150} height={150} />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
