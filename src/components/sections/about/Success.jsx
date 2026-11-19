import React from "react";
import BlogCard from "@/components/cards/BlogCard";
import { c1, sStories } from "@/lib/data";
import { motion } from "framer-motion";
const Success = () => {
  return (
    <div className="mx-auto max-w-7xl  px-4 flex-col flex  gap-5 my-20">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14"
      >
        Check Our <span className="text-[#039BE4]">Success Stories</span>
      </motion.h2>
      {/* <div className="flex flex-row flex-wrap gap-3">
        {sStories.map((story, index) => (
          <div className="lg:max-w-[48%] w-full" key={index}>
            {" "}
            <BlogCard data={story} />
          </div>
        ))}
      </div> */}
      <BlogCard data={c1} />
    </div>
  );
};

export default Success;
