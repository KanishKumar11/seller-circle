"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content?.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_, index) => index / (cardLength + 2)
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="  flex justify-center relative lg:space-x-10 rounded-md lg:p-10 p-2 "
      ref={ref}
    >
      <div
        className={cn(
          "hidden lg:block h-auto max-h-[78vh] w-[45%] rounded-md bg-white sticky top-20 overflow-hidden ",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>{" "}
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="lg:my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl lg:block hidden font-bold text-[#272727]"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg lg:block hidden text-[#272727] max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
              <motion.h2 className="text-2xl lg:hidden block font-bold text-[#272727]">
                {item.title}
              </motion.h2>
              <motion.p className="text-kg lg:hidden block text-[#272727] max-w-sm mt-10">
                {item.description}
              </motion.p>
              <div
                className={cn(
                  "block lg:hidden h-auto w-full  rounded-md bg-white  overflow-hidden ",
                  contentClassName
                )}
              >
                {content[activeCard].content ?? null}
              </div>{" "}
            </div>
          ))}
          <div className="lg:h-40" />
        </div>
      </div>
    </motion.div>
  );
};
