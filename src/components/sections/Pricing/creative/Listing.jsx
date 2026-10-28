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
  FaFileAlt,
  FaLayerGroup,
  FaLocationArrow,
  FaPallet,
  FaRetweet,
  FaShieldAlt,
  FaTags,
  FaVectorSquare,
} from "react-icons/fa";
import {
  FaChartPie,
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
    title: "Crafting Compelling Product Images",
    hl1: "Category-Researched Infographics",
    hl2: "High-Impact Image Creation",
    l1: "Develop visually appealing infographics that highlight key features and benefits, tailored to your product category.",
    l2: "Design images that resonate with search keywords and are optimized for better conversion rates.",
    i1: <FaChartPie />,
    i2: <IoCreateOutline />,
  },
  {
    title: "Optimized Titles, Bullet Points, and Keywords",
    hl1: "Keyword-Rich Titles",
    hl2: "Effective Bullet Points",
    hl3: "Research-Based Keywords",
    l1: "Create product titles that are not only engaging but also optimized with relevant keywords to improve search visibility.",
    l2: " Write concise and compelling bullet points that clearly communicate your product’s unique selling points.",
    l3: "Incorporate researched keywords into your listings to drive targeted traffic and enhance discoverability.",
    i1: <FaTags />,
    i2: <FaDotCircle />,
    i3: <FaDatabase />,
  },
  {
    title: "Conversion-Driven Design",
    hl1: "Enhanced Visuals",
    hl2: "Strategic Layouts",
    l1: "Utilize high-quality images and infographics that attract attention and drive purchase decisions.",
    l2: "Design product pages with a focus on clarity and ease of navigation, ensuring a seamless shopping experience.",
    i1: <IoColorWandOutline />,
    i2: <IoCubeOutline />,
  },
];
const Items2 = [
  {
    hl1: "5-Image package",
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
              5 High-Quality Product Images
            </li>
            <li className="flex gap-3">
              <div>
                {" "}
                <CheckCircleIcon className="block aspect-square w-5 h-5" />
              </div>
              Custom Design Layout{" "}
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
const Items3 = [
  {
    hl1: "7-Image Package",
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
    question: "What does the 5-Image Package include?",
    answer:
      "The 5-Image Package includes 5 high-quality product images, custom design layout, SEO-optimized alt text, product highlighting, and up to 2 rounds of revisions.",
  },
  {
    question:
      "What is the difference between the 5-Image and 7-Image Packages?",
    answer:
      "The primary difference is the number of images included. The 7-Image Package offers 2 additional images for a total of 7, with the same benefits as the 5-Image Package.",
  },
  {
    question: "How long does the catalog design process take?",
    answer:
      "The process typically takes 7-10 business days, depending on the package selected and the feedback provided during revisions.",
  },
  {
    question: "Can I provide input on the image design",
    answer:
      "Yes, we encourage your input to ensure the final images align with your brand and product presentation goals. We offer up to 2 rounds of revisions for both packages.",
  },

  {
    question: "Is the alt text SEO-optimized?",
    answer:
      "Yes, each image is accompanied by SEO-optimized alt text to enhance your product's search engine visibility.",
  },
];

const Listing = ({ IN }) => {
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
          ))}
        </div>

        <div className="lg:w-1/2 w-full p-5 relative  flex flex-col gap-5 ">
          <div className="text-background border-2 border-background rounded-md border-dashed p-5 py-2 text-2xl uppercase font-extrabold text-center">
            LISTING IMAGE DESIGN
          </div>
          <div className="flex gap-5">
            <div className="bg-background flex-1 p-5 px-4 rounded-xl text-white text-lg font-bold ">
              5-Image Package: Contact for pricing</div>{" "}
            <div className="bg-background flex-1 p-5 px-4 rounded-xl text-white text-lg font-bold ">
              7-Image Package: Contact for pricing</div>
          </div>
          <div className="absolute -top-20" id="quote"></div>{" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex flex-col gap-14 items-center w-full justify-center ">
            {" "}
            <div className="w-full">
              {" "}
              <Pricing
                businessName
                formType="listingImageDesign"
                ASIN={false}
                services={[" 5 Image Package", " 7 Image Package"]}
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
      {/* <h2 className="lg:text-3xl  font-extrabold text-xl flex gap-2 items-center cursor-pointer text-background my-10">
        <FaMoneyBill1Wave /> Pricing Details
      </h2> */}
      <div className="w-full lg:flex-row flex-col flex mb-10">
        <div className="w-1/2">
          {" "}
          {Items2.map((item, idx) => (
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
        <div className="w-1/2">
          {" "}
          {Items3.map((item, idx) => (
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
      </div>
      {/* <div className="text-background text-xl font-bold ml-10">
        Contact for pricing</div> */}
      <div className="">
        <Works />
        <div className="text-3xl text-center text-background font-bold">
          Catalog Design FAQs:{" "}
        </div>
        <FAQ faqs={additionalFaq} />
        <CTA1 link="/catalog-and-product-display-design" />

        <Awards />
      </div>
    </div>
  );
};

export default Listing;
