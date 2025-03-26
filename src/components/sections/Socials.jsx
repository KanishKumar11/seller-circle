"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookBoxLine, RiInstagramFill } from "react-icons/ri";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
const Socials = () => {
  return (
    <div className="flex gap-7 flex-row mx-auto flex-wrap items-center justify-center max-lg:my-4 z-30 ">
      <div className="flex items-center flex-wrap  flex-row justify-center gap-7">
        <div
        // initial={{ y: "100px", opacity: 0 }}
        // whileInView={{ y: 0, opacity: 100 }}
        // viewport={{ once: true }}
        // transition={{ delay: 0.2 }}
        >
          <Link
            href="https://www.linkedin.com/company/seller-circle/"
            target="_blank"
          >
            {" "}
            <div className="flex items-center gap-3 text-base font-semibold cursor-pointer">
              <Image
                alt=""
                src="/images/socials/linkedin.svg"
                width="50"
                height="50"
                className="h-5 w-5"
              />
              LinkedIn
            </div>
          </Link>
        </div>
        <div
        // initial={{ y: "100px", opacity: 0 }}
        // whileInView={{ y: 0, opacity: 100 }}
        // viewport={{ once: true }}
        // transition={{ delay: 0.4 }}
        >
          <Link
            href="https://www.instagram.com/sellercircle.in?igsh=bXBqNGNuMzd3Z3Br"
            target="_blank"
          >
            {" "}
            <div className="flex items-center gap-3 text-base font-semibold cursor-pointer">
              <Image
                alt=""
                src="/images/socials/instagram.svg"
                width="50"
                height="50"
                className="h-5 w-5"
              />{" "}
              Instagram
            </div>
          </Link>
        </div>
        <Link href="https://www.facebook.com/sellercircle.in" target="_blank">
          <div
          // initial={{ y: "100px", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 100 }}
          // viewport={{ once: true }}
          // transition={{ delay: 0.6 }}
          >
            {" "}
            <div className="flex items-center gap-3 text-base font-semibold cursor-pointer">
              <FaFacebook className="text-[#0762C8] text-xl" />
              Facebook
            </div>
          </div>
        </Link>
        <div
        // initial={{ y: "100px", opacity: 0 }}
        // whileInView={{ y: 0, opacity: 100 }}
        // viewport={{ once: true }}
        // transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-3 text-base font-semibold cursor-pointer">
            <FaPinterest className="text-[#E60023] text-xl" />
            Pinterest
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <Image
          src="/images/1.png"
          alt=""
          width={500}
          height={500}
          className="h-[150px] w-auto"
        />
      </motion.div>
    </div>
  );
};

export default Socials;
