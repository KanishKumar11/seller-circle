"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/pages/Faq";
import React from "react";
import { motion } from "framer-motion";
const generalFaq = [
  {
    question: "What services does Seller Circle offer?",
    answer:
      "We offer a comprehensive range of services designed to enhance your Amazon presence, including:",
    bul: [
      {
        b: "Amazon Brand Store Design:",
        desc: "Creating engaging, easy-to-navigate brand stores that boost sales and dwell time.",
      },
      {
        b: "Amazon Brand Story Creation:",
        desc: "Designing brand stories on product pages to connect with buyers and drive traffic.",
      },
      {
        b: "Amazon Product Page Design:",
        desc: "Crafting optimized product listings with compelling images, titles, and keywords.",
      },
      {
        b: "A+ / Enhanced Brand Content (EBC):",
        desc: "Enhancing product descriptions with high-quality images, brand stories, and custom modules.",
      },
      {
        b: "Product Display Page & Amazon Ads Video Creation:",
        desc: "Producing informative and high-impact videos for product display pages and Amazon ads.",
      },
      {
        b: "Amazon Growth Management",
        desc: "Full-service management that encompasses operations and advertising. We strategize holistically to scale your brand with listing optimization, daily operations, and advertising. Our unique 30+ touch point audit covers brand presence, competition, pricing, advertising structure, and creatives. The data used for the audit is kept confidential and secure.",
      },
      {
        b: "Amazon DSP Management",
        desc: "Utilizing a self-serve seat, we build audience-based campaigns tailored to your product needs. Contact us for pricing, with custom audience creations and creative services billed separately from the service fees.",
      },
      {
        b: "Strategy Consulting",
        desc: "A 1-3 month package offering handholding and strategy creation. We work with your team to develop a compelling strategy for your sales operations.",
      },
    ],
  },
  {
    question: "How can I get started with Seller Circle’s services?",
    answer:
      "To get started, contact us through our website or reach out to our team directly. We’ll schedule a consultation to discuss your needs, goals, and how our services can help achieve your objectives.",
  },
  {
    question: "What makes Seller Circle’s services unique?",
    answer:
      "Our services are designed to deliver exceptional results through a combination of industry expertise, data-driven strategies, and creative solutions. We focus on creating content that not only looks great but also converts, leveraging our extensive experience with over 1 million product listings and multiple award-winning Amazon Ads strategies.",
  },
  {
    question:
      "How do you ensure the confidentiality of the data used in your audits?",
    answer:
      "We take data security seriously. All data collected during our audits is kept confidential and secure within our audit systems. Only authorized personnel have access to this data.",
  },
  {
    question: "What is the onboarding process for new brands?",
    answer: "The onboarding process includes:",
    ul: [
      "Conducting a comprehensive 30+ touch point audit",
      "Assessing brand presence, competition, pricing, advertising structure, and creatives",
      "Agreeing on fees and strategy before proceeding",
    ],
  },
];
const brandStoreFaq = [
  {
    question: "What is included in Amazon Brand Store Design?",
    answer: "Our Amazon Brand Store Design service includes:",
    ul: [
      "Creating a visually appealing and mobile-friendly store.",
      "Using engaging visuals and easy-to-navigate layouts.",
      "Incorporating SEO and meta tags for better visibility.",
      "Designing high-quality creatives that enhance brand storytelling.",
    ],
  },
  {
    question: "How does a well-designed Brand Store benefit my business?",
    answer:
      "A well-designed Brand Store improves customer experience, increases dwell time, and boosts sales by providing an engaging and easily navigable space for buyers to learn about and purchase your products.",
  },
];
const brandStoryFaq = [
  {
    question: "What is included in Amazon Brand Story Creation?",
    answer: "Our service includes:",
    ul: [
      "Crafting compelling brand stories for product display pages.",
      "Designing visually appealing backgrounds that align with your brand’s theme.",
      "Showcasing other products or categories within your brand.",
      "Creating content that drives traffic and enhances brand connection.",
    ],
  },
  {
    question: "How does a Brand Story impact my product page?",
    answer:
      "A strong Brand Story helps build a connection with buyers, enhances brand credibility, and drives traffic to your brand page, leading to increased engagement and potential sales.",
  },
];
const productPageFaq = [
  {
    question: "What does your Amazon Product Page Design service include?",
    answer: "Our service includes:",
    ul: [
      "Crafting category-researched infographics and product images.",
      "Designing titles, bullet points, and keywords that are optimized for conversion.",
      "Ensuring all elements of the listing are aligned with best practices for better performance.",
    ],
  },
  {
    question: "How does a well-designed product page improve sales?",
    answer:
      "A well-designed product page attracts more attention, clearly communicates product benefits, and encourages purchases through optimized images, descriptions, and keywords.",
  },
];
const EbcFaq = [
  {
    question: "What is Enhanced Brand Content (EBC)?",
    answer:
      "EBC allows you to create richer, more detailed product descriptions with high-quality images, brand stories, and custom modules to enhance your product’s presentation on Amazon.",
  },
  {
    question: "What are the benefits of using EBC?",
    answer:
      "EBC improves conversion rates, builds brand trust, reduces return rates, enhances SEO performance, and provides a competitive advantage by offering a more engaging and informative product page.",
  },
];
const productDisplayFaq = [
  {
    question: "What does your video creation service include?",
    answer: "Our service includes:",
    ul: [
      "Creating informative Product Display Page Videos that highlight key product features and brand messaging.",
      "Producing Amazon Ads Videos designed to capture attention and drive sales with impactful content and strategic messaging.",
    ],
  },
  {
    question: "How do your videos contribute to better performance on Amazon?",
    answer:
      "Our videos are designed to engage viewers, highlight product USPs, and drive conversions by presenting clear, relevant information in an engaging format. This helps increase click-through rates and overall sales.",
    ul: [
      "Listing optimization",
      "Daily operations management",
      "Advertising management",
      "A 30+ touch point audit, assessing brand presence, competition, pricing, advertising structure, and creatives",
      "Confidential and secure data handling",
    ],
  },
];
const growthManagementFaq = [
  {
    question: "What does your Amazon Growth Management service include?",
    answer:
      "Our Amazon Growth Management service includes a holistic approach to scaling your brand, covering:",
  },
];
const additionalFaq = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline varies depending on the scope and complexity of the project. Generally, we provide a detailed timeline during the initial consultation and work to deliver high-quality results in a timely manner.",
  },
  {
    question: "Can you help with ongoing support and optimization?",
    answer:
      "Yes, we offer ongoing support and optimization services to ensure that your content continues to perform well and meets your evolving needs.\nFor any other questions or to learn more about how Seller Circle can help your business, please contact us. We’re here to assist you in achieving your Amazon sales goals!",
  },
];
const dspFaq = [
  {
    question: "How does the Amazon DSP Management service work?",
    answer: "Our Amazon DSP Management service involves:",
    ul: [
      "Utilizing a self-serve seat",
      "Building audiences based on product needs",
      "Contact us for pricing",
      "Custom audience creations",
      "Creative services for DSP advertising, billed separately from service fees",
    ],
  },
];
const strategyFaq = [
  {
    question: "What is included in the Strategy Consulting service?",
    answer: "Our Strategy Consulting service offers:",
    ul: [
      "A 1-3 month package",
      "Handholding and strategy creation",
      "Working with your team to develop a sales strategy",
      "Enabling you to operate independently after the consulting period",
    ],
  },
];
const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg-white  bg-grid-black/[0.05] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl mx-auto my-20 gap-y-10 flex flex-col z-[39] lg:px-5 relative">
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
            id="generalFaq"
          >
            General Questions
          </motion.h3>
          <div className="w-full">
            {" "}
            <FAQ faqs={generalFaq} />
          </div>{" "}
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
            id="growthManagementFaq"
          >
            Amazon Growth Management{" "}
          </motion.h3>
          <div className="w-full">
            {" "}
            <FAQ faqs={growthManagementFaq} />
          </div>{" "}
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
            id="dspFaq"
          >
            Amazon DSP Management
          </motion.h3>
          <div className="w-full">
            {" "}
            <FAQ faqs={dspFaq} />
          </div>{" "}
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
            id="strategyFaq"
          >
            Strategy Consulting{" "}
          </motion.h3>
          <div className="w-full">
            {" "}
            <FAQ faqs={strategyFaq} />
          </div>{" "}
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
            id="brandStoreFaq"
          >
            Amazon Brand Store Design
          </motion.h3>
          <div className="w-full">
            {" "}
            <FAQ faqs={brandStoreFaq} />
          </div>{" "}
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
            id="brandStoryFaq"
          >
            Amazon Brand Story Creation
          </motion.h3>
          <div className="w-full">
            {" "}
            <FAQ faqs={brandStoryFaq} />
          </div>{" "}
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
            id="productPageFaq"
          >
            Amazon Product Page Design
          </motion.h3>
          <div className="w-full">
            {" "}
            <FAQ faqs={productPageFaq} />
          </div>{" "}
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
            id="EbcFaq"
          >
            A+ / Enhanced Brand Content (EBC){" "}
          </motion.h3>
          <div className="w-full">
            {" "}
            <FAQ faqs={EbcFaq} />
          </div>{" "}
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
            id="productDisplayFaq"
          >
            Product Display Page & Amazon Ads Video Creation
          </motion.h3>
          <div className="w-full">
            {" "}
            <FAQ faqs={productDisplayFaq} />
          </div>{" "}
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
            id="additionalFaq"
          >
            Additional Questions{" "}
          </motion.h3>
          <div className="w-full">
            {" "}
            <FAQ faqs={additionalFaq} />
          </div>{" "}
        </div>{" "}
      </div>
      <Footer />
    </>
  );
};

export default page;
