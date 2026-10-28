"use client";
import Pricing from "@/components/forms/Pricing";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { BiPieChart, BiWindow } from "react-icons/bi";
import {
  FaColumns,
  FaDraftingCompass,
  FaFileAlt,
  FaLayerGroup,
  FaLocationArrow,
  FaPallet,
  FaRetweet,
  FaShieldAlt,
  FaVectorSquare,
} from "react-icons/fa";
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
  IoAlbumsOutline,
  IoBookOutline,
  IoFlashOutline,
  IoMicOutline,
  IoPeopleOutline,
  IoStatsChartOutline,
  IoSwapHorizontalOutline,
} from "react-icons/io5";
import Works from "../../Works";
import FAQ from "@/components/pages/Faq";
import Awards from "../../Awards";
import Link from "next/link";
import { MdCompareArrows } from "react-icons/md";
import CTA1 from "./CTA1";
const Items = [
  {
    title: "Amazon Brand Story Design",
    hl1: "Engaging Narratives",
    hl2: "Visual Appeal",
    l1: "Craft compelling stories that highlight your brand’s journey, values, and unique selling points.",
    l2: "Use high-quality visuals and creative layouts to capture attention and engage potential customers.",
    i1: <IoMicOutline />,
    i2: <IoFlashOutline />,
  },
  {
    title: "Showcase Other Products/Category",
    hl1: "Comprehensive Display",
    hl2: "Cross-Promotion",
    l1: "Design brand stories that seamlessly integrate with your product display pages, showcasing other products and categories.",
    l2: "Encourage cross-selling and upselling by featuring related products in a visually appealing manner.",
    i1: <FaLayerGroup />,
    i2: <MdCompareArrows />,
  },
  {
    title: "Drive Traffic to Brand Pages",
    hl1: "Strategic Design",
    hl2: "Enhanced Navigation",
    l1: "Create brand stories that drive traffic to your Amazon Brand Store and other product pages.",
    l2: "Use intuitive design elements to guide customers through your product range and brand offerings.",
    i1: <FaDraftingCompass />,
    i2: <FaLocationArrow />,
  },
  {
    title: "Beautiful Backgrounds and Themes",
    hl1: "Cohesive Aesthetics",
    hl2: "Custom Visuals",
    l1: "Design brand stories with backgrounds that match your brand’s theme, creating a consistent and attractive look.",
    l2: "Develop custom visuals that enhance your brand’s narrative and appeal to your target audience.",
    i1: <IoAlbumsOutline />,
    i2: <FaVectorSquare />,
  },
  {
    title: "Mobile Optimization",
    hl1: "Cohesive Aesthetics",
    hl2: "Enhanced Engagement",
    l1: "Ensure that all brand stories are optimized for mobile devices, providing a seamless experience for on-the-go shoppers.",
    l2: "Use mobile-friendly designs to keep customers engaged and informed, no matter how they access your product pages.",
    i1: <IoSwapHorizontalOutline />,
    i2: <FaRetweet />,
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
    question: "What does the Brand Story Creation package include?",
    answer:
      "The package includes a full brand narrative, strategic storytelling, integration of visuals and text, SEO-optimized content, custom visuals, professional copywriting, and up to 3 rounds of content iterations.",
  },
  {
    question: "How long does the Brand Story creation process take?",
    answer:
      "The process typically takes 10-14 business days, depending on the complexity and feedback during the iteration rounds.",
  },
  {
    question: "Can I provide input during the creation process?",
    answer:
      "Yes, we encourage your collaboration to ensure the final brand story perfectly aligns with your vision. We offer up to 3 rounds of iterations to fine-tune the content.",
  },
  {
    question: "What is the cost of the Brand Story Creation package?",
    answer:
      "Contact us for pricing. The package includes all the mentioned benefits and inclusions.",
  },

  {
    question: "Is the content SEO-optimized?",
    answer:
      "Yes, the brand story content is optimized for search engines, helping to enhance your brand's online visibility.",
  },
];

const Story = ({ IN }) => {
  const [whatActive, setWhatActive] = useState(true);
  const [moduleActive, setModuleActive] = useState(false);
  return (
    <div>
      {" "}
      <div className="flex lg:flex-row flex-col relative my-4">
        <div className="lg:w-1/2 w-full p-5 flex flex-col gap-12 lg:px-10">
          {Items.map((item, idx) => (
            <div className="flex flex-col text-[#272727] gap-10 " key={idx}>
              <div className="lg:text-3xl  font-extrabold text-xl">
                {item.title}
              </div>
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
                <div className="flex gap-7">
                  {" "}
                  <div className="w-8 h-8 text-5xl text-background">
                    {item.i2}
                  </div>{" "}
                  <div>
                    <h3 className="lg:text-2xl  font-bold text-lg">
                      {item.hl2}
                    </h3>
                    <p>{item.l2}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>

        <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 ">
          <div className="text-background border-2 border-background rounded-md border-dashed p-5 py-2 text-2xl uppercase font-extrabold text-center">
            BRAND STORY
          </div>
          <div className="bg-background text-xl font-bold text-white p-5 rounded-xl">
            Contact for pricing</div>
          <div className="absolute -top-20" id="quote"></div>{" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex flex-col gap-14 items-center w-full justify-center ">
            {" "}
            <div className="w-full">
              {" "}
              <Pricing services={[" Brand Story"]} formType="brandStory" />
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="">
        <Works />
        <div className="text-3xl text-center text-background font-bold">
          Brand Story FAQs:
        </div>
        <FAQ faqs={additionalFaq} />
        <CTA1 link="/brand-story-creation" />

        <Awards />
      </div>
    </div>
  );
};

export default Story;
