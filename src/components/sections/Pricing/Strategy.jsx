"use client";
import Pricing from "@/components/forms/Pricing";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { BiPieChart, BiWindow } from "react-icons/bi";
import {
  FaCogs,
  FaColumns,
  FaDollarSign,
  FaFileAlt,
  FaFunnelDollar,
  FaHandsHelping,
  FaMagic,
  FaMapMarkerAlt,
  FaPallet,
  FaPencilAlt,
  FaProjectDiagram,
  FaRedo,
  FaShareAlt,
  FaShieldAlt,
  FaTachometerAlt,
  FaUsersCog,
} from "react-icons/fa";
import {
  FaChartBar,
  FaChartLine,
  FaClipboardList,
  FaClock,
  FaComment,
  FaCube,
  FaDatabase,
  FaFilm,
  FaGem,
  FaGlobe,
  FaHandshake,
  FaHeadset,
  FaIndustry,
  FaKey,
  FaList,
  FaMicrochip,
  FaMoneyBill1Wave,
  FaNetworkWired,
  FaPuzzlePiece,
  FaRobot,
  FaTable,
  FaThumbsUp,
  FaTrophy,
  FaUserTie,
  FaWarehouse,
  FaWrench,
} from "react-icons/fa6";
import { HiMegaphone } from "react-icons/hi2";
import {
  IoBookOutline,
  IoPeopleOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
// import Works from "../../Works";
import FAQ from "@/components/pages/Faq";
// import Awards from "../../Awards";
import Link from "next/link";
// import CTA1 from "./CTA1";
import Works from "../Works";
import Awards from "../Awards";
import CTA1 from "./creative/CTA1";
import Marquee from "@/components/ui/marquee";
import { ReviewCard } from "../CustomerMarquee";
import { reviews } from "@/lib/data";
import Why1 from "./Why1";
import { motion } from "framer-motion";
import HorizontalTestimonials from "@/components/HorizontalTestimonials";
const Items = [
  {
    hl1: "Comprehensive Market Analysis",
    l1: (
      <>
        Gain deep insights into market trends, competitor strategies, and
        customer behavior to inform your business decisions.
      </>
    ),
    i1: <FaIndustry />,
  },
  {
    hl1: "Customized Strategy Development:",
    l1: (
      <>
        Develop tailored strategies that align with your unique business
        objectives, leveraging data-driven insights and industry best practices.
      </>
    ),
    i1: <FaPuzzlePiece />,
  },
  {
    hl1: "Performance Optimization:",
    l1: (
      <>
        Enhance your existing campaigns and operations with targeted
        recommendations and actionable strategies to boost performance and drive
        growth.
      </>
    ),
    i1: <FaWrench />,
  },
  {
    hl1: "Brand Positioning and Differentiation:",
    l1: (
      <>
        Establish a strong market presence and differentiate your brand through
        strategic positioning and innovative approaches.
      </>
    ),
    i1: <FaMapMarkerAlt />,
  },
  {
    hl1: "Performance Reporting & Insights:",
    l1: (
      <>
        Receive detailed performance reports with insights into impressions,
        clicks, conversions, and more, helping you make data-driven decisions.
      </>
    ),
    i1: <FaClipboardList />,
  },
  {
    hl1: "Operational Efficiency:",
    l1: (
      <>
        Streamline your operations for maximum efficiency, including inventory
        management, logistics, and customer service strategies.
      </>
    ),
    i1: <FaClock />,
  },
  {
    hl1: "Actionable Insights and Reporting:",
    l1: (
      <>
        Receive detailed reports and actionable insights that help you measure
        success, track progress, and make informed decisions.
      </>
    ),
    i1: <FaChartLine />,
  },
  {
    hl1: "Ongoing Support and Guidance:",
    l1: (
      <>
        Benefit from continuous support and expert advice as you implement and
        refine your strategies, ensuring long-term success.
      </>
    ),
    i1: <FaHandsHelping />,
  },
];

const additionalFaq = [
  {
    question: "What is Amazon DSP and how does it benefit my business?",
    answer:
      "Amazon DSP allows you to programmatically buy display, video, and audio ads across Amazon's network of websites, as well as third-party exchanges. It enables precise audience targeting and cross-channel reach, helping you effectively engage potential customers.",
  },
  {
    question: "What makes your DSP services different from others?",
    answer:
      "Our DSP services are tailored to your specific needs, combining expert strategy with advanced technology. We use AI and machine learning for optimization, and our dedicated account managers ensure your campaigns align with your business goals.",
  },
  {
    question: "How do you ensure the safety of my brand while advertising?",
    answer:
      "We implement robust brand safety controls, ensuring your ads appear in appropriate and safe environments. We also provide transparent reporting so you can see exactly where your ads are displayed.",
  },
  {
    question:
      "Will you perform an account audit before starting the DSP campaigns?",
    answer:
      "Yes, we conduct a thorough audit of your current advertising efforts and account setup. This allows us to identify opportunities for improvement and craft a DSP strategy that’s aligned with your goals.",
  },
];

const Strategy = ({ IN }) => {
  const Items2 = [
    {
      // hl1: "Brand or Ad Video Package",
      l1: (
        <>
          <ul className="flex flex-col gap-4 my-3">
            {" "}
            <li className="flex gap-3 items-center">
              <div>
                {" "}
                <FaDollarSign className="block aspect-square w-5 h-5" />
              </div>
              <b>Contact for pricing</b>
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              Inclusions:
            </li>
            <ul className="ml-10">
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                Comprehensive Amazon account management{" "}
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                Amazon advertising management{" "}
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                tailored advertising strategies{" "}
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                content creation
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                inventory management
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                SEO and listing optimization
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                regular performance reporting
              </li>
              <li className="flex gap-3">
                <div>
                  {" "}
                  <CheckCircleIcon className="block aspect-square w-5 h-5" />
                </div>
                dedicated account management
              </li>
            </ul>
          </ul>
        </>
      ),
      // i1: <FaGem />,
    },
  ];
  const [whatActive, setWhatActive] = useState(true);
  const [moduleActive, setModuleActive] = useState(false);
  return (
    <div>
      {" "}
      <div className="">
        {" "}
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase mt-10 px-4"
        >
          Unlock Your Business Potential with{" "}
          <span className="text-[#039BE4]">Expert Strategy and Consulting</span>
        </motion.h2>{" "}
        <motion.p
          className="mx-auto lg:max-w-4xl max-lg:p-4 text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
        >
          Our Strategy and Consulting services are designed to help you navigate
          the complexities of the Amazon marketplace and achieve your business
          goals with confidence. Whether you&#39;re launching a new product or
          optimizing existing strategies, our experts are here to guide you
          every step of the way.
        </motion.p>
      </div>
      <div className="flex lg:flex-row flex-col relative my-4">
        <div className="lg:w-1/2 w-full p-5 flex flex-col gap-12 lg:px-10">
          <h2
            className="lg:text-3xl  font-extrabold text-xl flex gap-2 items-center cursor-pointer text-background"
            onClick={() => setWhatActive(!whatActive)}
          >
            <FaList /> What&#39;s Included
            {whatActive ? <ChevronUp /> : <ChevronDown />}
          </h2>
          {whatActive &&
            Items.map((item, idx) => (
              <div className="flex flex-col text-[#272727] gap-10 " key={idx}>
                <div className="flex flex-col gap-10">
                  <div className="flex gap-7">
                    {" "}
                    <div className="w-8 h-8 text-5xl text-background">
                      {item.i1}
                    </div>{" "}
                    <div>
                      <h3 className="lg:text-2xl  font-bold text-lg">
                        {item.hl1}
                      </h3>
                      <p>{item.l1}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 ">
          <div className="absolute -top-20" id="quote"></div>{" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex flex-col gap-6  w-full justify-center ">
            {" "}
            <div className="w-full">
              {" "}
              <Pricing
                businessDetails
                businessName
                consulting
                challenges
                intrest
                additionalInfo
                quoteReq
                ASIN={false}
                formType="strategyAndConsulting"
              />
            </div>{" "}
          </div>
        </div>
      </div>
      <CTA1 link="/strategy-and-consulting" />
      {/* <Why1 /> */}
      <HorizontalTestimonials />
      <div className="">
        {/* <Works /> */}
        {/* <div className="text-3xl text-center text-background font-bold">
          Amazon Advertising FAQs:
        </div>
        <FAQ faqs={additionalFaq} />
        <CTA1 link="//amazon-advertising" /> */}

        <Awards />
      </div>
    </div>
  );
};

export default Strategy;
