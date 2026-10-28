"use client";
import Pricing from "@/components/forms/Pricing";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { BiPieChart, BiWindow } from "react-icons/bi";
import { FaColumns, FaFileAlt, FaPallet, FaShieldAlt } from "react-icons/fa";
import {
  FaComment,
  FaCube,
  FaFilm,
  FaGem,
  FaGlobe,
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
    hl1: "Premium Quality Design",
    l1: (
      <>
        <b>Benefit:</b> High-quality, custom design that enhances your product’s
        presentation and engages your audience.
      </>
    ),
    i1: <FaShieldAlt />,
  },
  {
    hl1: "Enhanced SEO Optimization",
    l1: (
      <>
        <b>Benefit:</b> 100 alt texts per photo and around 400 words of SEO text
        to significantly improve your product’s search ranking and visibility on
        Amazon.
      </>
    ),
    i1: <FaGlobe />,
  },
  {
    hl1: "Increased Conversion and Engagement",
    l1: (
      <>
        <b>Benefit:</b> Premium content that not only looks great but also
        drives higher engagement and conversion rates.
      </>
    ),
    i1: <FaTrophy />,
  },
  {
    hl1: "Video Module Inclusion",
    l1: (
      <>
        <b>Benefit:</b> Engage customers with video content, providing a dynamic
        way to showcase product features.
      </>
    ),
    i1: <FaFilm />,
  },
  {
    hl1: "Advanced Customer Interaction",
    l1: (
      <>
        <b>Benefit:</b> Interactive modules like Hotspots and Carousels provide
        a richer, more engaging shopping experience.
      </>
    ),
    i1: <FaComment />,
  },
];
const Items2 = [
  {
    hl1: "Premium A+ Content Package",
    l1: (
      <>
        <ul className="flex flex-col gap-4 my-3">
          {" "}
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            Premium Quality Design{" "}
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            1464 Pixel Width Layout{" "}
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            100 Alt Text per Photo for SEO Optimization{" "}
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            Around 400 Words of Crawlable SEO Text
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
              2 Premium Full Image{" "}
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              2 Premium Hotspots 1{" "}
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              1 Premium Navigation Carousel 1 or Premium Regimen Carousel
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              1 Premium Q & A
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              1 Premium Comparison Table 1
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              1 Video Module Insertion with Video Thumbnail{" "}
            </li>
          </ul>
          <li>
            <b>Iterations:</b> 3 Iterations for Design Refinement
          </li>
        </ul>
      </>
    ),
    i1: <FaGem />,
  },
];
const additionalFaq = [
  {
    question:
      "What makes the Premium A+ Content package different from the Standard package?",
    answer:
      "The Premium package offers a higher quality design, advanced modules, and additional SEO benefits including around 400 words of crawlable SEO text, a video module, and 3 iterations for design refinement.",
  },
  {
    question: "What modules are included in the Premium A+ Content package?",
    answer: "The creation process typically takes 7-14 business days.",
  },
  {
    question: "Can I choose the modules I want for my A+ Content?",
    answer:
      "The Premium package includes modules such as Premium Full Image, Premium Hotspots, Premium Navigation Carousel, Premium Q & A, Premium Comparison Table, and a Video Module with Thumbnail.",
  },
  {
    question: "How does the video module work in Premium A+ Content?",
    answer:
      "The video module allows you to showcase your product with a custom video, enhancing customer engagement.",
  },

  {
    question: "How long does it take to create Premium A+ Content?",
    answer: "The creation process typically takes 7-10 business days.",
  },
  {
    question: "What does '3 Iterations' mean?",
    answer:
      "You will have the opportunity to review and request changes to the design three times before the final version is delivered.",
  },
];

const Premium = ({ IN }) => {
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

        <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 ">
          <div className="text-background border-2 border-background rounded-md border-dashed p-5 py-2 text-2xl uppercase font-extrabold text-center">
            PREMIUM A+ CONTENT
          </div>
          <div className="bg-background text-white text-xl font-bold p-5 rounded-xl">
            Contact for pricing</div>
          <div className="absolute -top-20" id="quote"></div>{" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex flex-col gap-14 items-center w-full justify-center ">
            {" "}
            <div className="w-full">
              {" "}
              <Pricing services={["Premium A+ Content"]} formType="premiumA" />
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="">
        <Works />
        <div className="text-3xl text-center text-background font-bold">
          Premium A+ Content FAQs:
        </div>
        <FAQ faqs={additionalFaq} />
        <CTA1 link="/a+content" />

        <Awards />
      </div>
    </div>
  );
};

export default Premium;
