"use client";
import React from "react";
import dynamic from "next/dynamic";
import LazyLoadComponent from "@/components/LazyLoadComoponent";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import HomeMobile from "@/components/HomeMobile";
import Head from "next/head";

// Dynamic imports for desktop devices
const HorizontalTestimonials = dynamic(
  () => import("@/components/HorizontalTestimonials"),
  { ssr: false }
);
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Approach = dynamic(() => import("@/components/sections/Approach"), {
  ssr: false,
});
const Client = dynamic(() => import("@/components/sections/Client"), {
  ssr: false,
});
const Creative = dynamic(() => import("@/components/sections/Creative"), {
  ssr: false,
});

const Growth = dynamic(() => import("@/components/sections/Growth"), {
  ssr: false,
});
const Retail = dynamic(() => import("@/components/sections/Retail"), {
  ssr: false,
});
const Strategies = dynamic(() => import("@/components/sections/Strategies"), {
  ssr: false,
});
const WeAre = dynamic(() => import("@/components/sections/WeAre"), {
  ssr: false,
});
const Why = dynamic(() => import("@/components/sections/Why"), { ssr: false });
const Blogs = dynamic(() => import("@/components/sections/Blogs"), { ssr: false });
const Works = dynamic(() => import("@/components/sections/Works"), {
  ssr: false,
});

const Home = () => {
  const isMobile = useIsMobile();

  // Conditionally render based on device type
  if (isMobile) {
    return <HomeMobile />;
  }

  return (
    <>
      <div className="relative z-10">
        <div className="relative">
          <Image
            height={2000}
            src="/images/bg1.webp"
            alt="background"
            className="absolute inset-0 mix-blend-multiply opacity-10"
            width={2000}
          />
          <Navbar />
          <Hero />
        </div>
        <div className="relative my-10">
          <Image
            height={2000}
            src="/images/weare.webp"
            alt="background"
            className="absolute inset-0 mix-blend-multiply opacity-10 -mt-20"
            width={2000}
          />
          <WeAre />
        </div>
        <div className="relative my-10">
          <Image
            height={3000}
            src="/images/bg2.webp"
            alt="background"
            className="absolute inset-0 mix-blend-multiply -z-10 -mt-20"
            width={2000}
          />
          <Growth />
        </div>
        <LazyLoadComponent component={Approach} />

        <LazyLoadComponent component={Strategies} />
        <div className="relative my-10">
          <Image
            height={2000}
            src="/images/bg2.webp"
            alt="background"
            className="absolute inset-0 mix-blend-multiply -z-10 -mt-20"
            width={2000}
          />
          <LazyLoadComponent component={Why} />
        </div>
        <LazyLoadComponent component={Retail} />
        <LazyLoadComponent component={Works} />
        <LazyLoadComponent component={Client} />
        {/* <LazyLoadComponent component={Customers} /> */}
        <HorizontalTestimonials />

        <LazyLoadComponent component={Creative} />
        <LazyLoadComponent component={Blogs} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
