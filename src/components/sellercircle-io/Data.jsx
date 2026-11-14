import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Data = () => {
  return (
    <div className="relative w-full mt-32 bg-[#f6f6fe]">
      <Image
        src="/sellercircle-io/images/bg1.svg"
        alt=""
        width={1600}
        height={1600}
        className="absolute object-cover -z-10 inset-0 lg:-top-40 -top-16  "
      />

      <div className="max-w-7xl mx-auto flex gap-7 lg:flex-row lg:px-20 py-28 px-8 flex-col  text-tp items-center justify-center">
        <div className="lg:w-1/2">
          {" "}
          <h2 className="font-extrabold text-center lg:text-5xl text-3xl my-7 text-tp ">
            Data and Privacy Policy
          </h2>
          <p>
            At Seller Circle - AJ Digi Media Pvt Ltd, protecting customer data
            and ensuring data privacy are of paramount importance. We employ
            various privacy-enhancing technologies and implement comprehensive
            data handling policies to safeguard customer data throughout the
            entire lifecycle of our systems and services. Our data handling
            policies include:
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-full hidden lg:flex items-center justify-center  lg:h-[500px] lg:w-[500px] w-[280px] h-[280px] border-2   border-[#e2e8f6] relative">
            <div className="rounded-full flex items-center border-2   border-[#e2e8f6] justify-center lg:h-[300px] h-[170px] w-[170px] lg:w-[300px]">
              <div className="bg-[#447eeb] lg:h-[150px] lg:w-[150px] h-[80px] w-[80px] rounded-full flex items-center justify-center shadow-lg shadow-blue-700 ">
                <Image
                  src="/sellercircle-io/images/8.png"
                  alt=""
                  width={50}
                  height={50}
                  className="lg:w-[50px] lg:h-[50px] h-[35px] w-[35px]"
                />
              </div>
            </div>
            {/* <div className="lg:inl hidden"> */}
            <PItem
              name="Data Collection"
              x="0%"
              y="-250px"
              icon="/sellercircle-io/images/9.png"
            />
            <PItem
              name="Data Processing"
              x="-12vw"
              y="-180px"
              icon="/sellercircle-io/images/10.png"
            />
            <PItem
              name="Data Sharing"
              x="-250px"
              y="0px"
              icon="/sellercircle-io/images/11.png"
            />
            <PItem name="Data Usage" x="250px" y="0px" icon="/sellercircle-io/images/12.png" />
            <PItem
              name="Data Disposal"
              x="-12vw"
              y="180px"
              icon="/sellercircle-io/images/13.png"
            />{" "}
            <PItem
              name="User Rights"
              x="+12vw"
              y="+180px"
              icon="/sellercircle-io/images/14.png"
            />
            <PItem
              name="Data Storage"
              x="+12vw"
              y="-180px"
              icon="/sellercircle-io/images/9.png"
            />
            <PItem
              name="Continuous Improvement"
              x="0%"
              y="250px"
              icon="/sellercircle-io/images/15.png"
            />
            {/* </div> */}
          </div>
          <div className="rounded-full lg:hidden flex items-center justify-center  lg:h-[500px] lg:w-[500px] w-[280px] h-[280px] border-2   border-[#e2e8f6] relative">
            <div className="rounded-full flex items-center border-2   border-[#e2e8f6] justify-center lg:h-[300px] h-[170px] w-[170px] lg:w-[300px]">
              <div className="bg-[#447eeb] lg:h-[150px] lg:w-[150px] h-[80px] w-[80px] rounded-full flex items-center justify-center shadow-lg shadow-blue-700 ">
                <Image
                  src="/sellercircle-io/images/8.png"
                  alt=""
                  width={50}
                  height={50}
                  className="lg:w-[50px] lg:h-[50px] h-[35px] w-[35px]"
                />
              </div>
            </div>
            <div className="block lg:hidden">
              <PItem
                name="Data Collection"
                x="-60px"
                y="-160px"
                icon="/sellercircle-io/images/9.png"
              />
              <PItem
                name="Data Processing"
                x="-150px"
                y="-180px"
                icon="/sellercircle-io/images/10.png"
              />
              <PItem
                name="Data Sharing"
                x="-230px"
                y="8vh"
                icon="/sellercircle-io/images/11.png"
              />
              <PItem
                name="Data Usage"
                x="-260px"
                y="-4vh"
                icon="/sellercircle-io/images/12.png"
              />
              <PItem
                name="Data Disposal"
                x="0"
                y="-50px"
                icon="/sellercircle-io/images/13.png"
              />{" "}
              <PItem
                name="User Rights"
                x="-50px"
                y="80px"
                icon="/sellercircle-io/images/14.png"
              />
              <PItem
                name="Data Storage"
                x="-240px"
                y="-150px"
                icon="/sellercircle-io/images/9.png"
              />
              <PItem
                name="Continuous Improvement"
                x="-150px"
                y="100px"
                icon="/sellercircle-io/images/15.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const PItem = ({ name, icon, x, y }) => {
  return (
    <motion.div
      className="flex justify-center items-center rounded-full font-semibold bg-dark text-light py-3 px-6 flex-col shawdow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-full p-3 flex items-center justify-center">
        <Image src={icon} width={35} height={35} alt="" />
      </div>
      <div className="">{name}</div>
    </motion.div>
  );
};
export default Data;
