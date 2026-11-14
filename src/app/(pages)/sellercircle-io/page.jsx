"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Data from "@/components/sellercircle-io/Data";
import Features from "@/components/sellercircle-io/Features";
import Hero from "@/components/sellercircle-io/Hero";
import Opportunities from "@/components/sellercircle-io/Opportunities";
import Why from "@/components/sellercircle-io/Why";

export default function SellerCircleIo() {
  return (
    <>
      <Navbar />
      <div className="lg:px-20 px-8 ">
        <Hero />
        <Features />
        <Why />
        <Opportunities />
      </div>
      <Data />
      <Footer />
    </>
  );
}
