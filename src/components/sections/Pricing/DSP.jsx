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
  FaMagic,
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
  FaClipboardList,
  FaComment,
  FaCube,
  FaDatabase,
  FaFilm,
  FaGem,
  FaGlobe,
  FaHandshake,
  FaHeadset,
  FaKey,
  FaList,
  FaMicrochip,
  FaMoneyBill1Wave,
  FaNetworkWired,
  FaRobot,
  FaTable,
  FaThumbsUp,
  FaTrophy,
  FaUserTie,
  FaWarehouse,
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
import HorizontalTestimonials from "@/components/HorizontalTestimonials";
const Items = [
  {
    hl1: "Advanced Audience Targeting",
    l1: (
      <>
        Utilize Amazon’s extensive customer data to target specific audience
        segments, including in-market shoppers, lifestyle-based audiences, and
        more.
      </>
    ),
    i1: <FaUsersCog />,
  },
  {
    hl1: "Comprehensive Campaign Strategy:",
    l1: (
      <>
        Develop a tailored strategy that aligns with your business goals,
        utilizing Amazon DSP’s full range of ad formats, from display ads to
        video ads.
      </>
    ),
    i1: <FaProjectDiagram />,
  },
  {
    hl1: "Creative Optimization:",
    l1: (
      <>
        Engage your audience with custom creatives designed to capture attention
        and drive conversions, with options for dynamic creative optimization.
      </>
    ),
    i1: <FaPallet />,
  },
  {
    hl1: "Cross-Channel Reach:",
    l1: (
      <>
        Extend your reach beyond Amazon with programmatic ads on third-party
        websites, apps, and Amazon-owned properties like IMDb.
      </>
    ),
    i1: <FaShareAlt />,
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
    hl1: "Brand Safety & Transparency:",
    l1: (
      <>
        Benefit from robust brand safety controls and transparent reporting,
        ensuring your ads appear in the right context and reach the intended
        audience.
      </>
    ),
    i1: <FaThumbsUp />,
  },
  {
    hl1: "Dedicated Account Management:",
    l1: (
      <>
        Work with a dedicated account manager who will oversee your campaigns,
        provide strategic advice, and ensure your DSP efforts align with your
        overall marketing strategy.
      </>
    ),
    i1: <FaHandshake />,
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

const DSP = ({ IN }) => {
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
            <div className="">
              <div className="">
                <h2 className="text-2xl font-semibold">
                  Ready to Scale Your Business with Amazon DSP?
                </h2>
                <p>
                  We believe in customized solutions that fit your unique
                  business needs. Fill out the form below, and one of our DSP
                  experts will contact you to discuss a tailored plan designed
                  to achieve your goals.
                </p>
              </div>
            </div>
            <div className="w-full">
              {" "}
              <Pricing
                businessDetails
                monthlyAdvertisingBudget={[
                  `<${IN ? "₹50,000" : "$1,000"}`,
                  `${IN ? "₹50,000 - ₹1,00,000" : "$1,000-$2,000"}`,
                  `${IN ? " ₹1,00,000-₹5,00,000 " : "$2,000-$10,000"}`,
                  `> ${IN ? "₹5,00,000" : "$10,000"}`,
                ]}
                primaryAdvertisingGoals
                businessName
                preferredServices
                additionalInfo
                quoteReq
                ASIN={false}
                formType="DSP"
              />
            </div>{" "}
          </div>
        </div>
      </div>
      <Why1 />
      <Link
        href="#quote"
        className="mx-auto w-full flex items-center justify-center"
      >
        {" "}
        <Button variant="cta" className="px-28 py-8  text-2xl">
          Get a custom Quote
        </Button>
      </Link>{" "}
      <HorizontalTestimonials />
      <div className="">
        {/* <Works /> */}
        <div className="text-3xl text-center text-background font-bold">
          Amazon Advertising FAQs:
        </div>
        <FAQ faqs={additionalFaq} />
        <CTA1 link="/amazon-dsp-services" />

        <Awards />
      </div>
    </div>
  );
};

export default DSP;
