import React from "react";
import { motion } from "framer-motion";
import { Antonio } from "next/font/google";
const antonio = Antonio({
  subsets: ["latin"],
});
const Working = () => {
  return (
    <div className="my-10 max-w-7xl ">
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="font-extrabold lg:text-4xl text-xl text-black text-center max-w-4xl uppercase mx-auto"
      >
        working together, growing together,{" "}
        <span className="text-[#039BE4]">
          and riding the momentum to success.
        </span>
      </motion.h3>
      <div
        className={`flex flex-row  justify-center lg:justify-between flex-wrap gap-8 mt-14`}
      >
        <div className="flex flex-col items-center text-center max-lg:w-1/2 justify-between ">
          <div
            className={`${antonio.className} group font-bold lg:text-7xl text-5xl text-white  stroke`}
          >
            <span className="   stroke-black stroke-2 outline-black ">
              $100M+
            </span>{" "}
          </div>
          <div className={`font-bold text-background lg:text-2xl text-xl `}>
            {" "}
            In Managed Advertising{" "}
          </div>
        </div>
        <div className="flex flex-col items-center h-auto flex-1 text-center justify-between gap-7 max-lg:w-1/2 ">
          <div className={`${antonio.className}`}>
            <span className="font-bold lg:text-7xl text-5xl text-white stroke stroke-black stroke-2 outline-black block">
              500K+
            </span>
          </div>
          <div className={`font-bold text-background lg:text-2xl text-xl `}>
          Catalog Design          </div>
        </div>
        <div className="flex flex-col items-center text-center justify-between gap-7 max-lg:w-[45%]">
          <div className={`${antonio.className}`}>
            <span className="font-bold lg:text-7xl text-5xl text-white stroke stroke-black stroke-2 outline-black block">
              6000+
            </span>
          </div>
          <div className={`font-bold lg:text-2xl text-xl text-background`}>
            Seller Served
          </div>
        </div>
        <div className="flex flex-col items-center text-center justify-between gap-7 max-lg:w-[40%] lg:min-w-[15%]">
          <div className={`${antonio.className}`}>
            <span className="font-bold lg:text-7xl text-5xl text-white stroke stroke-black stroke-2 outline-black block">
              20+
            </span>
          </div>
          <div className={`font-bold lg:text-2xl text-xl text-background `}>
            Awards
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
