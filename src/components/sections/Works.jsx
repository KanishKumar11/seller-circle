"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import A from "../pages/works/A";
import Story from "../pages/works/Story";
import Store from "../pages/works/Store";
import Premium from "../pages/works/Premium";
import Video from "../pages/works/Video";

const Works = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const defaultVal = searchParams.get("s");
  return (
    <div className="mx-auto max-w-7xl  flex flex-col my-20 ">
      {" "}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14"
      >
        Check Our <span className="text-[#039BE4]">Work</span>
      </motion.h2>
      {pathname == "/works" ? (
        <Tabs defaultValue={defaultVal || "a"} className="">
          <TabsList>
            <TabsTrigger value="a">
              {" "}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="w-[130px] hover:text-white py-1"
              >
                A+
              </motion.div>
            </TabsTrigger>
            <TabsTrigger value="story">
              {" "}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="w-[130px] hover:text-white py-1"
              >
                BRAND STORY
              </motion.div>
            </TabsTrigger>
            <TabsTrigger value="video">
              {" "}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="w-[130px] hover:text-white py-1"
              >
                BRAND VIDEO
              </motion.div>
            </TabsTrigger>
            <TabsTrigger value="store">
              {" "}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="w-[130px] hover:text-white py-1"
              >
                BRAND STORE
              </motion.div>
            </TabsTrigger>
            <TabsTrigger value="premium">
              {" "}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="w-[130px] hover:text-white py-1"
              >
                Premium A+
              </motion.div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="a">
            <A />
          </TabsContent>
          <TabsContent value="story">
            <Story />
          </TabsContent>
          <TabsContent value="store">
            <Store />
          </TabsContent>
          <TabsContent value="video">
            <Video />
          </TabsContent>
          <TabsContent value="premium">
            <Premium />
          </TabsContent>
        </Tabs>
      ) : (
        <div className="flex flex-wrap items-center gap-7 justify-center">
          <Link href="/works?s=a">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button variant="cta" className="w-[150px] text-center">
                A+
              </Button>
            </motion.div>
          </Link>
          <Link href="/works?s=story">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="cta" className="w-[150px] text-center">
                BRAND STORY
              </Button>
            </motion.div>
          </Link>
          <Link href="/works?s=video">
            {" "}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button variant="cta" className="w-[150px] text-center">
                BRAND VIDEO
              </Button>
            </motion.div>
          </Link>{" "}
          <Link href="/works?s=store">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button variant="cta" className="w-[150px] text-center">
                BRAND STORE
              </Button>
            </motion.div>
          </Link>{" "}
        </div>
      )}
    </div>
  );
};

export default Works;
