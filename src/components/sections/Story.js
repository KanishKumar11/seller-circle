import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon";
import { IoThunderstormOutline } from "react-icons/io5";
import { MdOutlineElectricBolt } from "react-icons/md";

const Details = ({ year, text, t1, t2, t3, t4, id, month }) => {
  const ref = useRef(null);
  const visible = id % 2;
  return (
    <li
      ref={ref}
      className="my-8 w-[60%] lg:w-[80%] mx-auto flex flex-col lg:flex-row justify-center  gap-5 "
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="lg:block hidden text-right ml-10   self-end justify-self-end "
      >
        <h3
          className={`captalize font-[900] text-5xl max-sm:text-xl text-background text-right  ${
            visible ? " lg:visible" : "lg:invisible"
          }`}
        >
          {year}
        </h3>

        <div className={`${!visible ? " lg:visible" : "lg:invisible"}`}>
          <h3 className="captalize text-[#303f5b] font-[800] text-5xl max-sm:text-xl">
            {month}
          </h3>
          {text && (
            <p
              className={`font-medium w-full text-base md:text-xl flex gap-2 border items-start justify-start  mt-5 text-[#303f5b]  ${
                !visible ? " lg:visible" : "lg:invisible"
              }`}
            >
              {" "}
              <div className="text-xl  ml-auto border h-full w-max text-background ">
                <MdOutlineElectricBolt />
              </div>
              <span className="border">{text}</span>
            </p>
          )}
          {t1 && (
            <ul
              className={`font-medium w-full text-base md:text-xl mt-5  text-left items-start flex flex-col text-[#303f5b] ${
                !visible ? " lg:visible" : "lg:invisible"
              }`}
            >
              <li className="flex gap-2 items-start  my-2">
                <div className="text-xl mt-2 h-full w-max text-background ">
                  <MdOutlineElectricBolt />
                </div>
                {t1}
              </li>
              {t2 && (
                <>
                  {" "}
                  <li className="flex gap-2 items-start  my-2">
                    <div className="text-xl mt-2 h-full w-max text-background ">
                      <MdOutlineElectricBolt />
                    </div>
                    {t2}
                  </li>
                  <li className="flex gap-2 items-start  my-2 ">
                    <div className="text-xl mt-2 h-full w-max text-background ">
                      <MdOutlineElectricBolt />
                    </div>
                    {t3}
                  </li>
                </>
              )}
              {t4 && (
                <li className="flex gap-2 items-start  my-2">
                  <div className="text-xl mt-2 h-full w-max text-background ">
                    <MdOutlineElectricBolt />
                  </div>
                  {t4}
                </li>
              )}
            </ul>
          )}
        </div>
      </motion.div>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="lg:ml-10 "
      >
        <h3
          className={`captalize font-[900] text-5xl max-sm:text-xl text-background  ${
            !visible ? " lg:visible" : "lg:invisible"
          }`}
        >
          {year}
        </h3>

        <div className={`${visible ? " lg:visible" : "lg:invisible"}`}>
          {" "}
          <h3 className="captalize text-[#303f5b] font-[800] text-5xl max-sm:text-xl">
            {month}
          </h3>
          <p
            className={`font-medium w-full text-base md:text-xl mt-5 text-[#303f5b] ${
              visible ? " lg:visible" : "lg:invisible"
            }`}
          >
            {text}
          </p>
          {t1 && (
            <ul
              className={`font-medium w-full text-base md:text-xl mt-5  text-[#303f5b]  ${
                visible ? " lg:visible" : "lg:invisible"
              }`}
            >
              <li className="flex gap-2 items-start my-2">
                <div className="text-xl mt-2 h-full w-max text-background ">
                  <MdOutlineElectricBolt />
                </div>{" "}
                {t1}
              </li>
              {t2 && (
                <li className="flex gap-2 items-start my-2">
                  <div className="text-xl mt-2 h-full w-max text-background ">
                    <MdOutlineElectricBolt />
                  </div>{" "}
                  {t2}
                </li>
              )}
              {t3 && (
                <li className="flex gap-2 items-start my-2">
                  <div className="text-xl mt-2 h-full w-max text-background ">
                    <MdOutlineElectricBolt />
                  </div>{" "}
                  {t3}
                </li>
              )}
              {t4 && (
                <li className="flex gap-2 items-start my-2">
                  <div className="text-xl mt-2 h-full w-max text-background ">
                    <MdOutlineElectricBolt />
                  </div>{" "}
                  {t4}
                </li>
              )}
            </ul>
          )}
        </div>
      </motion.div>
    </li>
  );
};

const OurStory = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-10 mx-auto max-w-6xl lg:ml-20 " id="ourStory">
      <div
        ref={ref}
        className="w-full mx-auto relative xs:!w-[130%] md:!w-full lg:w-[90%] md:-ml-[10%]"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute  top-0 w-[5px] h-full bg-[#272727] rounded-2xl origin-top  max-md:w-[2px] left-[0px] lg:left-1/2 lg:ml-9 xs:!left-[20px]"
        />
        <ul className="w-full flex-col flex items-start justify-between ml-4 xs:ml-2">
          <Details
            year="2016"
            t1="Started Consulting Amazon Initiative on Training online sellers"
            id="1"
          />
          <Details
            year="2017"
            month="JANUARY"
            t1="Started Consulting and On-boarding for Amazon India with a Team of 10 Specialists"
            id="2"
          />
          <Details
            year=""
            month="SEPTEMBER "
            t1="Incorporated AJ Digi Media Private Limited"
            id="2"
          />
          <Details
            year=""
            month="DECEMBER "
            t1="Awarded Rising Star of the Year for Seller Management by Amazon"
            id="4"
          />
          <Details
            year="2018"
            month="JANUARY"
            t1="Expanded Catalogue as a service"
            t2=" Expanded Onboarding Engagement with Amazon with a Team of 20 Specialists"
            id="5"
          />
          <Details
            year=""
            month="DECEMBER"
            t1="Awarded Most Valuable for Onboarding Amazon India"
            id="5"
          />
          <Details
            year="2019"
            month="JANUARY"
            t1="Awarded Best High-Value Seller Management by Amazon"
            id="6"
          />
          <Details
            year=""
            month="August"
            t1="Awarded Partner of the Year for Advertising Management by Amazon Service Provider Network (SPN)"
            id="6"
          />
          <Details
            year=""
            month="September"
            t1="Expanded Operations in 2 States"
            id="6"
          />
          <Details
            year="2020"
            month="March"
            t1="Expanded Operation with Amazon Global Selling and Started Enabling sellers to sell from India to other Global Marketplaces"
            id="9"
          />
          <Details
            year=""
            month="December"
            t1="Started Creative Design Services"
            id="9"
          />
          <Details
            year="2021"
            month="January"
            t1="Expanded Total Team of 40 Trained Specialists"
            id="12"
          />
          <Details
            year=""
            month="June"
            t1="Amazon Gold Partner Award"
            t2="Amazon High GMS Award"
            t3="Amazon Reinstatement Champion Award"
            id="12"
          />
          <Details
            year="2022"
            t1="100+ D2C Growth and Full-service management"
            t2="500 Brand Stores Created on Amazon"
            t3="30,000 A+ Catalogue creations"
            id="13"
          />
          <Details
            year="2023"
            t1="E4M Awards 2023 Winner, Best use of Mobile to Drive Sales"
            t2="E4M Awards 2023 Winner, Best PPC Campaign"
            t3="Amazon Ads Catalyst Winner for Q1, Q2, Q3 & Q4"
            t4="$100 Mn Advertising Spend managed"
            id="14"
          />
        </ul>
      </div>
    </div>
  );
};

export default OurStory;
