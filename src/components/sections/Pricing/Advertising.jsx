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
  FaRedo,
  FaShieldAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import {
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
  FaMicrochip,
  FaMoneyBill1Wave,
  FaNetworkWired,
  FaRobot,
  FaTable,
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
import HorizontalTestimonials from "@/components/HorizontalTestimonials";
const Items = [
  {
    hl1: "Comprehensive Ad Strategy Development",
    l1: (
      <>
        Customized strategies focused on maximizing your brand&#9;s visibility
        and performance on Amazon
      </>
    ),
    i1: <FaNetworkWired />,
  },
  {
    hl1: "Tech-Driven Advertising",
    l1: (
      <>
        We utilize AI and machine learning-based technology for precise
        targeting, dayparting, and Share of Voice (SOV) analysis to optimize
        your ad campaigns.
      </>
    ),
    i1: <FaRobot />,
  },
  {
    hl1: "Full-Funnel Approach",
    l1: (
      <>
        Engage customers at every stage of the buying journey with targeted
        campaigns designed to drive conversions and build brand loyalty.
      </>
    ),
    i1: <FaFunnelDollar />,
  },
  {
    hl1: "Ongoing Campaign Optimization",
    l1: (
      <>
        Continuous monitoring and adjustments to campaigns, ensuring they
        perform at their best.
      </>
    ),
    i1: <FaRedo />,
  },
  {
    hl1: "Detailed Performance Reporting",
    l1: (
      <>
        Regular reports with key performance metrics, providing insights into
        campaign success and areas for improvement.
      </>
    ),
    i1: <FaFileAlt />,
  },
  {
    hl1: "Dedicated Account Manager",
    l1: (
      <>
        A single point of contact who oversees your campaigns and ensures
        alignment with your business goals.
      </>
    ),
    i1: <FaUserTie />,
  },
  {
    hl1: "Use of Automation and Manual Interface",
    l1: (
      <>
        Efficient ad management combining automated processes with hands-on
        expertise for superior results.
      </>
    ),
    i1: <FaMicrochip />,
  },
];

const additionalFaq = [
  {
    question: "What services are included in the Amazon Advertising package?",
    answer:
      "Our package includes a full range of services, from ad strategy development to ongoing campaign optimization, all designed to enhance your brand's performance on Amazon.",
  },
  {
    question: "How do you ensure that my ad campaigns perform well?",
    answer:
      "We use AI and machine learning for precise targeting and campaign optimization, combined with continuous monitoring to ensure your ads achieve the best possible results.",
  },
  {
    question: "What is a Full-Funnel Approach, and why is it important?",
    answer:
      "A full-funnel approach targets customers at every stage of the buying journey, ensuring your ads not only reach a wide audience but also convert high-intent shoppers.",
  },
  {
    question: "How does the pricing structure work?",
    answer:
      "Our pricing is based on a combination of a fixed fee and a percentage of ad spend, ensuring that as your campaigns grow, so does the value you receive.",
  },

  {
    question: "What role does the Dedicated Account Manager play?",
    answer:
      "Your Dedicated Account Manager ensures all aspects of your campaigns are aligned with your business goals, providing strategic advice and overseeing execution.",
  },
  {
    question: "How do you utilize technology in advertising management?",
    answer:
      "We leverage AI and machine learning technologies for ad optimization, including dayparting and SOV analysis, to ensure your ads reach the right audience at the right time.",
  },
  {
    question: "What is included in the regular performance reporting?",
    answer:
      "You will receive detailed reports that cover key performance indicators (KPIs) such as sales, advertising metrics, and overall account health. These reports help you stay informed and make data-driven decisions.",
  },
  {
    question: "Do you perform an audit of my account before onboarding?",
    answer:
      "Yes, before we begin managing your Amazon Advertising, we conduct a thorough audit of your existing account. This audit helps us identify strengths, weaknesses, and opportunities, allowing us to tailor our strategies to maximize your results from the start.",
  },
];

const Advertising = ({ IN }) => {
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
          <div className="sticky top-24  bg-background/30 rounded-md flex flex-col gap-14  w-full justify-center ">
            {" "}
            <div className="bg-background text-white text-xl font-bold p-5 rounded-xl">
              Contact for pricing</div>
            <div className="w-full" id="form">
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
                additionalInfo
                ASIN={false}
                formType="advertising"
              />
            </div>{" "}
          </div>
        </div>
      </div>
      <HorizontalTestimonials />
      <div className="">
        {/* <Works /> */}
        <div className="text-3xl text-center text-background font-bold">
          Amazon Advertising FAQs:
        </div>
        <FAQ faqs={additionalFaq} />
        <CTA1 link="/amazon-advertising" />

        <Awards />
      </div>
    </div>
  );
};

export default Advertising;
