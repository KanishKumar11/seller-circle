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
  FaBrush,
  FaChartBar,
  FaChartLine,
  FaClipboardList,
  FaClock,
  FaComment,
  FaCreditCard,
  FaCrosshairs,
  FaCube,
  FaDatabase,
  FaFilm,
  FaFilter,
  FaFlag,
  FaGem,
  FaGlobe,
  FaHandshake,
  FaHeadset,
  FaImages,
  FaIndustry,
  FaKey,
  FaLifeRing,
  FaList,
  FaMicrochip,
  FaMoneyBill1Wave,
  FaNetworkWired,
  FaPuzzlePiece,
  FaRobot,
  FaSitemap,
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
    hl1: "Multi-Channel Strategy Development:",
    l1: (
      <>
        Create customized advertising strategies for each marketplace, including
        Amazon, Walmart, Flipkart, and other leading platforms, to maximize your
        reach and engagement.
      </>
    ),
    i1: <FaNetworkWired />,
  },
  {
    hl1: "Marketplace Optimization:",
    l1: (
      <>
        Optimize your product listings and advertisements for each platform,
        focusing on keyword relevance, competitive pricing, and compelling
        creatives.
      </>
    ),
    i1: <FaFilter />,
  },
  {
    hl1: "Targeted Advertising Campaigns:",
    l1: (
      <>
        Implement targeted ad campaigns across marketplaces to reach your ideal
        customers, using advanced targeting options to drive higher engagement
        and conversions.
      </>
    ),
    i1: <FaCrosshairs />,
  },
  {
    hl1: "Performance Analytics and Reporting:",
    l1: (
      <>
        Monitor and analyze the performance of your advertising campaigns with
        detailed reports, providing insights into metrics like impressions,
        clicks, and sales to refine strategies.
      </>
    ),
    i1: <FaTable />,
  },
  {
    hl1: "Ad Spend Management:",
    l1: (
      <>
        Efficiently manage your advertising budget with strategic allocation and
        optimization, ensuring cost-effective campaigns that deliver measurable
        results.
      </>
    ),
    i1: <FaCreditCard />,
  },
  {
    hl1: "Creative Design and Copywriting:",
    l1: (
      <>
        Develop high-quality ad creatives and compelling copy that resonate with
        your target audience, enhancing the effectiveness of your campaigns.
      </>
    ),
    i1: <FaImages />,
  },
  {
    hl1: "Ongoing Support and Optimization:",
    l1: (
      <>
        Receive continuous support and optimization to ensure your campaigns
        adapt to market changes and evolving business goals, maintaining peak
        performance.
      </>
    ),
    i1: <FaLifeRing />,
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

const Marketplaces = ({ IN }) => {
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
                targetMarkets
                interest3
                advertisingFocus
                additionalInfo
                quoteReq
                ASIN={false}
                formType="marketplacesExpansion"
              />
            </div>{" "}
          </div>
        </div>
      </div>
      <CTA1 link="/marketplaces-expansion" />
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

export default Marketplaces;
