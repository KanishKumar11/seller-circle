"use client";
import Pricing from "@/components/forms/Pricing";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { BiPieChart, BiWindow } from "react-icons/bi";
import { FaColumns, FaFileAlt, FaPallet } from "react-icons/fa";
import {
  FaCube,
  FaGem,
  FaHandshake,
  FaKey,
  FaList,
  FaTrophy,
} from "react-icons/fa6";
import { HiMegaphone } from "react-icons/hi2";
import {
  IoBookOutline,
  IoPeopleOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
import Works from "../../Works";
import FAQ from "@/components/pages/Faq";
import Awards from "../../Awards";
import Link from "next/link";
import CTA1 from "./CTA1";
const Items = [
  {
    hl1: "High-Quality Design",
    l1: (
      <>
        <b>Benefit:</b> Professional design aligned with your brand’s aesthetic,
        creating a strong visual impact.
      </>
    ),
    i1: <FaGem />,
  },
  {
    hl1: "SEO Optimization",
    l1: (
      <>
        <b>Benefit:</b> 100 alt texts per photo and SEO text to improve
        visibility and Amazon search ranking.
      </>
    ),
    i1: <FaKey />,
  },
  {
    hl1: "Increased Conversion Rates",
    l1: (
      <>
        <b>Benefit:</b> Visually rich content that engages buyers and boosts
        conversion rates.
      </>
    ),
    i1: <FaTrophy />,
  },
  {
    hl1: "Customer Trust and Engagement",
    l1: (
      <>
        <b>Benefit:</b> Build trust with structured content that reduces bounce
        rates and effectively communicates your brand’s value.
      </>
    ),
    i1: <FaHandshake />,
  },
  {
    hl1: "Differentiation from Competitors",
    l1: (
      <>
        <b>Benefit:</b> Stand out with detailed product information and rich
        media that set your brand apart.
      </>
    ),
    i1: <HiMegaphone />,
  },
];
const Items2 = [
  {
    hl1: "Basic A+ Content Package",
    l1: (
      <>
        <ul className="flex flex-col gap-4 my-3">
          {" "}
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            High-Quality Design
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            970 Pixel Width Layout
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            100 Alt Text for SEO Optimization
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            SEO Text Integration
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            Up to 7 Modules:
          </li>
          <ul className="ml-10">
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              1 Standard Image & Dark Text Overlay{" "}
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              3 Standard Image Header With Text
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              1 Standard Single Image & Sidebar{" "}
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              1 Standard Four Image & Text{" "}
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              1 Standard Comparison Chart{" "}
            </li>
          </ul>
          <li>
            <b>Iterations:</b> 2 Iterations for Design Refinement
          </li>
        </ul>
      </>
    ),
    i1: <FaGem />,
  },
];
const additionalFaq = [
  {
    question: "What is included in the Standard A+ Content package?",
    answer:
      "The Standard package includes a high-quality design, 970 pixel width layout, 100 alt texts for SEO optimization, and up to 7 modules with 2 iterations for design refinement.",
  },
  {
    question: "How long does it take to create Standard A+ Content?",
    answer: "The creation process typically takes 7-14 business days.",
  },
  {
    question: "Can I choose the modules I want for my A+ Content?",
    answer:
      "Yes, you can select from the available modules, such as Standard Image & Dark Text Overlay, Standard Image Header With Text, and others.",
  },
  {
    question: "Is there any additional cost for using certain modules?",
    answer: "No, the package pricing includes all standard modules listed.",
  },
  {
    question: "What does '2 Iterations' mean?",
    answer:
      "You will have the opportunity to review and request changes to the design twice before the final version is delivered.",
  },
];

const Basic = ({ IN }) => {
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
          <h2
            className="lg:text-3xl  font-extrabold text-xl flex gap-2 items-center cursor-pointer text-background"
            onClick={() => setModuleActive(!moduleActive)}
          >
            <FaCube /> Module Selections
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
            ))}
          <div className="flex flex-col gap-5">
            <h2 className="text-xl">
              Get a Custom quote if ASIN is greater than 10
            </h2>
            <Link href="#quote">
              {" "}
              <Button variant="cta">Get a custom Quote</Button>
            </Link>{" "}
          </div>
        </div>

        <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 items-center">
          <div className="absolute -top-20" id="quote"></div>{" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex flex-col gap-14 items-center w-full justify-center ">
            {" "}
            <div className="w-full flex flex-col gap-5">
              <div className="text-background border-2 border-background rounded-md border-dashed p-5 py-2 text-2xl uppercase font-extrabold text-center">
                BASIC A+ CONTENT
              </div>
              <div className="bg-background p-5 rounded-xl text-white text-xl font-bold ">
                Contact for pricing</div>{" "}
              <Pricing services={["Basic A+ Content"]} formType="basicA+" />
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="">
        <Works />
        <div className="text-3xl text-center text-background font-bold">
          Standard A+ Content FAQs:
        </div>
        <FAQ faqs={additionalFaq} />
        <CTA1 link="/a+content" />
        <Awards />
      </div>
    </div>
  );
};

export default Basic;
