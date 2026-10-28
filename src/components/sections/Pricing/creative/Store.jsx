"use client";
import Pricing from "@/components/forms/Pricing";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { BiPieChart, BiWindow } from "react-icons/bi";
import {
  FaBoxes,
  FaColumns,
  FaFileAlt,
  FaMicrochip,
  FaPallet,
  FaSitemap,
  FaSlidersH,
} from "react-icons/fa";
import {
  FaCertificate,
  FaCube,
  FaGem,
  FaHandshake,
  FaKey,
  FaList,
  FaTrophy,
} from "react-icons/fa6";
import { HiMegaphone } from "react-icons/hi2";
import {
  IoBasketOutline,
  IoBookOutline,
  IoNewspaperOutline,
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
    title: "Engaging Visuals",
    hl1: "Banners and Images",
    hl2: "Product Tiles",
    l1: "We use high-quality, engaging visuals that capture attention and convey your brand's message.",
    l2: "Display your products with auto-populated information, including price and Prime status, to make shopping easier for customers.",
    i1: <FaSlidersH />,
    i2: <FaBoxes />,
  },
  {
    title: "Informative and Readable Content",
    hl1: "Text Tiles",
    hl2: "Video Integration",
    l1: "Provide clear and informative descriptions about your brand and products. Our designs ensure text is easy to read and well-integrated with visuals.",
    l2: "Add videos to showcase your products and tell your brand's story in a dynamic way.",
    i1: <IoNewspaperOutline />,
    i2: <FaMicrochip />,
  },
  {
    title: "Structured Layout",
    hl1: "Subpages",
    hl2: "Product Collections",
    l1: "Organize your store into subpages that highlight different product categories, deals, or brand stories. This helps customers easily navigate and find relevant information.",
    l2: "Feature products in a grid format with options for Add to Cart and Quick Shop, enhancing the shopping experience.",
    i1: <FaSitemap />,
    i2: <IoBasketOutline />,
  },
];

const Items2 = [
  {
    // hl1: "Basic A+ Content Package",
    l1: (
      <>
        <ul className="flex flex-col gap-4 my-3">
          {" "}
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            Custom Storefront Design{" "}
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            SEO-Optimized Content{" "}
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            Multi-Page Layout Development{" "}
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            Brand Story Integration{" "}
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            Mobile and Desktop Optimization{" "}
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            Custom Graphics and Visuals{" "}
          </li>
          <li className="flex gap-3">
            <div>
              {" "}
              <CheckCircleIcon className="block aspect-square w-5 h-5" />
            </div>
            Interactive Elements{" "}
          </li>
          <li>
            <b>Iterations:</b> Up to 3 rounds of design refinement
          </li>
        </ul>
      </>
    ),
    // i1: <FaGem />,
  },
];
const additionalFaq = [
  {
    question: "What does the Brand Store Design package include?",
    answer:
      "The package includes custom storefront design, SEO-optimized content, multi-page layout, brand story integration, mobile and desktop optimization, custom graphics, interactive elements, and up to 3 rounds of design iterations.",
  },
  {
    question: "How long does it take to design a Brand Store?",
    answer:
      "The process typically takes 14-20 business days, depending on the complexity and feedback during the iteration rounds.",
  },
  {
    question: "Can I provide input on the store design?",
    answer:
      "Yes, we encourage your input to ensure the final store design aligns with your brand vision. We offer up to 3 rounds of iterations to fine-tune the design.",
  },
  {
    question: "Is the store optimized for mobile devices?",
    answer:
      "Absolutely! We ensure your store is fully optimized for both mobile and desktop devices, providing a seamless shopping experience on all platforms.",
  },
  {
    question: "What is the cost of the Brand Store Design package?",
    answer:
      "Contact us for pricing ( 5 Pages ). If more Sub pages, a custom quotation will be shared, including all the mentioned benefits and inclusions.",
  },
];

const Store = ({ IN }) => {
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
          <div className="text-background border-2 border-background rounded-md border-dashed p-5 py-2 text-2xl uppercase font-extrabold text-center">
            BRAND STORE
          </div>
          <div className="text-white bg-background p-5 rounded-xl text-xl font-bold ">
            Contact for pricing</div>
          <div className="absolute -top-20" id="quote"></div>{" "}
          <div className="sticky top-24  bg-background/30 rounded-md flex flex-col gap-14 items-center w-full justify-center ">
            {" "}
            <div className="w-full">
              {" "}
              <Pricing businessName nPage brandName formType="brandStore" />
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="">
        <Works />
        <div className="text-3xl text-center text-background font-bold">
          Brand Store Design FAQs:{" "}
        </div>
        <FAQ faqs={additionalFaq} />
        <CTA1 link="/brand-store-design" />
        <Awards />
      </div>
    </div>
  );
};

export default Store;
