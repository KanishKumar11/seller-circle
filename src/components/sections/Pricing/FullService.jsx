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
  FaMagic,
  FaPallet,
  FaPencilAlt,
  FaShieldAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import {
  FaCertificate,
  FaChartBar,
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
  FaMoneyBill1Wave,
  FaTable,
  FaTrophy,
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
import HorizontalTestimonials from "@/components/HorizontalTestimonials";
const Items = [
  {
    hl1: "Comprehensive Amazon Account Management",
    l1: (
      <>
        <b>Benefit:</b> End-to-end management of your Amazon account, ensuring
        optimal performance, compliance, and growth.
      </>
    ),
    i1: <FaTachometerAlt />,
  },
  {
    hl1: "Amazon Advertising Management",
    l1: (
      <>
        <b>Benefit:</b> Expert management of all your Amazon ad campaigns,
        including Sponsored Products, Sponsored Brands, and Sponsored Display,
        to maximize your advertising ROI.
      </>
    ),
    i1: <FaChartBar />,
  },
  {
    hl1: "Tailored Advertising Strategies",
    l1: (
      <>
        <b>Benefit:</b> Custom advertising campaigns designed to drive targeted
        traffic, increase sales, and enhance brand visibility on Amazon.
      </>
    ),
    i1: <FaCogs />,
  },
  {
    hl1: "Data-Driven Optimization",
    l1: (
      <>
        <b>Benefit:</b> Continuous monitoring and optimization of advertising
        campaigns based on detailed analytics and performance data, ensuring
        your ads deliver the best possible results.
      </>
    ),
    i1: <FaDatabase />,
  },
  {
    hl1: "Creative Content Creation",
    l1: (
      <>
        <b>Benefit:</b> High-quality content creation, including product images,
        A+ content, brand videos, and storefront designs that enhance your
        brand&#39;s presence and engagement on Amazon.
      </>
    ),
    i1: <FaMagic />,
  },
  {
    hl1: "Inventory and Order Management",
    l1: (
      <>
        <b>Benefit:</b> Efficient handling of inventory and order processes to
        reduce stockouts, optimize storage costs, and improve overall
        operational efficiency.
      </>
    ),
    i1: <FaWarehouse />,
  },
  {
    hl1: "SEO and Listing Optimization",
    l1: (
      <>
        <b>Benefit:</b> SEO-optimized product listings that improve visibility,
        enhance discoverability, and increase conversion rates on Amazon.
      </>
    ),
    i1: <FaPencilAlt />,
  },
  {
    hl1: "Regular Performance Reporting",
    l1: (
      <>
        <b>Benefit:</b> Detailed and transparent reporting on key performance
        indicators (KPIs), including advertising metrics, to keep you informed
        and in control of your business&#39;s growth trajectory.
      </>
    ),
    i1: <FaTable />,
  },
  {
    hl1: "Dedicated Account Manager",
    l1: (
      <>
        <b>Benefit:</b> A single point of contact who understands your business,
        provides strategic advice, and ensures all services align with your
        goals.
      </>
    ),
    i1: <FaHeadset />,
  },
];

const additionalFaq = [
  {
    question:
      "What services are included in the Full Service Management package?",
    answer:
      "The package includes comprehensive Amazon account management, Amazon advertising management, advertising strategy development, content creation, inventory management, SEO and listing optimization, performance reporting, and a dedicated account manager.",
  },
  {
    question: "How does the Amazon Advertising Management service work?",
    answer:
      "Our Amazon Advertising Management involves the setup, monitoring, and optimization of Sponsored Products, Sponsored Brands, and Sponsored Display campaigns, all tailored to enhance your brand's presence and drive sales.",
  },
  {
    question: "What is the role of the Dedicated Account Manager?",
    answer:
      "The Dedicated Account Manager serves as your primary point of contact, ensuring that all services are aligned with your business goals. They provide strategic advice, manage communication, and oversee the day-to-day operations of your Amazon account.",
  },
  {
    question: "How do you approach SEO and Listing Optimization?",
    answer:
      "We optimize your product listings using relevant keywords, high-quality images, and engaging content to improve visibility and conversion rates. Our SEO strategies are designed to increase your products' discoverability on Amazon.",
  },

  {
    question: "What kind of content creation is included?",
    answer:
      "Our content creation services cover everything from high-quality product images and A+ content to brand videos and storefront designs. We create visually appealing and engaging content that enhances your brand’s presence on Amazon.",
  },
  {
    question: "How do you handle inventory and order management?",
    answer:
      "We manage your inventory to ensure optimal stock levels, reduce the risk of stockouts, and streamline the order fulfillment process, all aimed at improving operational efficiency.",
  },
  {
    question: "What is included in the regular performance reporting?",
    answer:
      "You will receive detailed reports that cover key performance indicators (KPIs) such as sales, advertising metrics, and overall account health. These reports help you stay informed and make data-driven decisions.",
  },
  {
    question: "How do you develop tailored advertising strategies?",
    answer:
      "We create custom advertising strategies based on a deep analysis of your target audience, competition, and market trends. Our goal is to drive targeted traffic to your products and maximize your return on investment.",
  },
  {
    question: "What technology do you use for advertising management?",
    answer:
      "We leverage AI and machine learning-based technologies combined with automation and manual interfaces to optimize your advertising campaigns. Our approach includes dayparting, Share of Voice (SOV) analysis, and other advanced techniques to ensure your ads reach the right audience at the right time.",
  },
];

const FullService = ({ IN }) => {
  const Items2 = [
    {
      // hl1: "Brand or Ad Video Package",
      l1: (
        <>
          <ul className="flex flex-col gap-4 my-3">
            {" "}
            {/* <li className="flex gap-3 items-center">
              <div>
                {" "}
                <FaDollarSign className="block aspect-square w-5 h-5" />
              </div>
              <b>Contact for pricing</b>
            </li> */}
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
            <FaList /> What&#39;s Included (with benefits)
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
          <h2
            className="lg:text-3xl  font-extrabold text-xl flex gap-2 items-center cursor-pointer text-background"
            onClick={() => setModuleActive(!moduleActive)}
          >
            <FaCertificate /> Inclusions:
            {moduleActive ? <ChevronUp /> : <ChevronDown />}
          </h2>
          {moduleActive &&
            Items2.map((item, idx) => (
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
            ))}{" "}
        </div>

        <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 ">
          <div className="bg-background text-white text-xl font-bold p-5 rounded-xl">
            Contact for pricing</div>
          <div className="absolute -top-20" id="quote"></div>{" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex flex-col gap-14 items-center w-full justify-center ">
            {" "}
            <div className="w-full">
              {" "}
              <Pricing
                businessName
                ASIN={false}
                IN
                monthlyAdvertisingBudget={[
                  `${IN ? "<₹100,000" : "<$5,000"}`,
                  `${IN ? "₹100,000-₹500,000" : "$5,000-$20,000"}`,
                  `${IN ? "₹500,000-₹1,000,000" : "$20,000-$50,000"}`,
                  `${IN ? ">₹1,000,000" : ">$50,000"}`,
                ]}
                monthlyRevenue={[
                  `${IN ? "<₹100,000" : "<$10,000"}`,
                  `${IN ? "₹100,000-₹500,000" : "$10,000-$50,000"}`,
                  `${IN ? "₹500,000-₹1,500,000" : "$50,000-$100,000"}`,
                  `${IN ? ">₹1,500,000" : ">$100,000"}`,
                ]}
                formType="fullServiceManagement"
              />
            </div>{" "}
          </div>
        </div>
      </div>
      <HorizontalTestimonials />
      <div className="">
        {/* <Works /> */}
        <div className="text-3xl text-center text-background font-bold">
          Full Service Management FAQs:
        </div>
        <FAQ faqs={additionalFaq} />
        <CTA1 link="/full-service-management" />

        <Awards />
      </div>
    </div>
  );
};

export default FullService;
