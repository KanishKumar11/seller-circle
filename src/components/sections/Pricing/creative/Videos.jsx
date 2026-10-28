"use client";
import Pricing from "@/components/forms/Pricing";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { BiPieChart, BiWindow } from "react-icons/bi";
import {
  FaColumns,
  FaDotCircle,
  FaDraftingCompass,
  FaEdit,
  FaFileAlt,
  FaLayerGroup,
  FaLocationArrow,
  FaMousePointer,
  FaPallet,
  FaRetweet,
  FaShieldAlt,
  FaTags,
  FaVectorSquare,
} from "react-icons/fa";
import {
  FaBullhorn,
  FaCertificate,
  FaChartPie,
  FaCloud,
  FaComment,
  FaCube,
  FaDatabase,
  FaDollarSign,
  FaFilm,
  FaGem,
  FaGlobe,
  FaHandshake,
  FaKey,
  FaList,
  FaMoneyBill1Wave,
  FaPen,
  FaTrophy,
} from "react-icons/fa6";
import { HiMegaphone } from "react-icons/hi2";
import {
  IoAlbumsOutline,
  IoBookOutline,
  IoColorWandOutline,
  IoCreateOutline,
  IoCubeOutline,
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
    hl1: "High-Quality Brand or Ad Videos",
    l1: (
      <>
        <b>Benefit:</b> Professionally crafted videos that showcase your brand
        or products, helping you engage your audience and drive conversions.
      </>
    ),
    i1: <FaBullhorn />,
  },
  {
    hl1: "Custom Storyboarding",
    l1: (
      <>
        <b>Benefit:</b> Tailored video storyboards that align with your brand
        message, ensuring a coherent and impactful narrative.
      </>
    ),
    i1: <FaLayerGroup />,
  },
  {
    hl1: "Professional Editing",
    l1: (
      <>
        <b>Benefit:</b> Expert video editing to create polished and visually
        appealing content, complete with transitions, effects, and music to
        enhance viewer engagement.
      </>
    ),
    i1: <FaEdit />,
  },
  {
    hl1: "SEO-Optimized Video Descriptions",
    l1: (
      <>
        <b>Benefit:</b> Each video is accompanied by SEO-optimized descriptions,
        improving your content’s visibility on search engines and video
        platforms.
      </>
    ),
    i1: <FaPen />,
  },
  {
    hl1: "Multi-Platform Compatibility",
    l1: (
      <>
        <b>Benefit:</b> Videos are optimized for various platforms (Amazon,
        social media, etc.), ensuring consistent quality and performance across
        all channels.
      </>
    ),
    i1: <FaCloud />,
  },
  {
    hl1: "Interactive Elements (for Ad Videos)",
    l1: (
      <>
        <b>Benefit:</b> Inclusion of interactive elements in ad videos, such as
        clickable links or product highlights, to drive engagement and
        conversions.
      </>
    ),
    i1: <FaMousePointer />,
  },
  {
    hl1: "Content Iterations",
    l1: (
      <>
        <b>Benefit:</b> Includes up to 2 rounds of revisions to refine the video
        content, ensuring it meets your brand’s standards and objectives.
      </>
    ),
    i1: <FaMousePointer />,
  },
];
const Items2 = [
  {
    hl1: "Brand or Ad Video Package",
    l1: (
      <>
        <ul className="flex flex-col gap-4 my-3">
          {" "}
          {/* <li className="flex gap-3 items-center">
            <div>
              {" "}
              <FaDollarSign className="block aspect-square w-5 h-5" />
            </div>
            <b>Price:</b>
            <span className="font-bold text-2xl">Contact for pricing</span>
          </li> */}
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
              High-Quality Brand or Ad Video
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              Custom Storyboarding{" "}
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              Professional Editing
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              SEO-Optimized Video Descriptions
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              Multi-Platform Compatibility{" "}
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              Interactive Elements (for Ad Videos)
            </li>
          </ul>
          <li>
            <b>Iterations:</b> Up to 2 rounds of revisions
          </li>
        </ul>
      </>
    ),
    // i1: <FaGem />,
  },
];
const Items3 = [
  {
    hl1: "7-Image Package",
    l1: (
      <>
        <ul className="flex flex-col gap-4 my-3">
          {" "}
          <li className="flex gap-3 items-center">
            <div>
              {" "}
              <FaDollarSign className="block aspect-square w-5 h-5" />
            </div>
            <b>Price:</b>
            <span className="font-bold text-2xl">Contact for pricing</span>
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
              7 High-Quality Product Images
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              Custom Design Layout
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              SEO-Optimized Alt Text for each image
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              Product Highlighting
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              Enhanced Visual Appeal
            </li>
          </ul>
          <li>
            <b>Iterations:</b> Up to 2 rounds of revisions
          </li>
        </ul>
      </>
    ),
    // i1: <FaGem />,
  },
];
const additionalFaq = [
  {
    question: "What does the Video Design package include?",
    answer:
      "The package includes a high-quality brand or ad video, custom storyboarding, professional editing, SEO-optimized video descriptions, multi-platform compatibility, and up to 2 rounds of revisions.",
  },
  {
    question: "How long does the video production process take?",
    answer:
      "The production process typically takes 10-14 business days, depending on the complexity and feedback during the revision rounds.",
  },
  {
    question: "Can I choose between a brand video and an ad video?",
    answer:
      "Yes, you can select either a brand video or an ad video based on your needs. Both have the same set of inclusions.",
  },
  {
    question: "Are the videos optimized for multiple platforms?",
    answer:
      "Absolutely! We ensure that your videos are optimized for various platforms, including Amazon, social media, and other digital channels.",
  },

  {
    question: "What is the difference between a brand video and an ad video?",
    answer:
      "A brand video focuses on telling your brand's story and values, while an ad video is designed to promote specific products or services, often including interactive elements to boost conversions.",
  },
  {
    question: "How many revisions are included in the package?",
    answer:
      "The package includes up to 2 rounds of revisions to ensure the final video meets your expectations and brand standards.",
  },
];

const Videos = ({ IN }) => {
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
          <div className="absolute -top-20" id="quote"></div>{" "}
          <div className="text-background border-2 border-background rounded-md border-dashed p-5 py-2 text-2xl uppercase  font-extrabold text-center">
            brand VideoS
          </div>{" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex flex-col gap-14 items-center w-full justify-center ">
            {" "}
            <div className="w-full flex flex-col gap-5">
              <div className="bg-background p-5 rounded-xl text-white text-xl font-bold ">
                Contact for pricing</div>{" "}
              <Pricing
                businessName
                ASIN={false}
                formType="brandVideo"
                services={["Brand Video", "Ad Video"]}
              />
            </div>{" "}
            {/* <div className="flex flex-col gap-5">
              <h2 className="text-xl">
                Get a Custom quote if ASIN is greater than 10
              </h2>
              <Link href="#quote">
                {" "}
                <Button variant="cta">Get a custom Quote</Button>
              </Link>{" "}
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="text-background text-xl font-bold ml-10">
        Contact for pricing</div> */}
      <div className="">
        <Works />
        <div className="text-3xl text-center text-background font-bold">
          Video Design FAQs:
        </div>
        <FAQ faqs={additionalFaq} />
        <CTA1 link="/brand-videos-and-ad-videos" />

        <Awards />
      </div>
    </div>
  );
};

export default Videos;
