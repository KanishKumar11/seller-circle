import Image from "next/image";
import React, { useState } from "react";
const data = [
  {
    title: "Comprehensive Solutions",
    desc: "From inventory to advertising, we cover all aspects of your Amazon business",
    icon: "/sellercircle-io/images/3.png",
    img: "/sellercircle-io/images/7.png",
  },
  {
    title: "Real-Time Insights",
    desc: "Get up-to-date information and make timely decisions to optimize your operations",
    icon: "/sellercircle-io/images/4.png",
    img: "/sellercircle-io/images/7.png",
  },
  {
    title: "User Friendly Interface",
    desc: "Our intuitive platform makes it easy to manage and analyze your Amazon business.",
    icon: "/sellercircle-io/images/5.png",
    img: "/sellercircle-io/images/7.png",
  },
  {
    title: "Expert Support",
    desc: "Our team of experts is always here to help you get the most out of our analytics tools.",
    icon: "/sellercircle-io/images/6.png",
    img: "/sellercircle-io/images/7.png",
  },
];
const Why = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="max-w-7xl mx-auto flex gap-7 flex-col my-20 text-tp">
      <h2 className="font-extrabold text-center lg:text-5xl text-3xl my-7 text-tp ">
        Why Choose SellerCircle.io?
      </h2>
      <div className="w-full flex lg:flex-row flex-col gap-10 items-center justify-center">
        <div className="flex flex-col gap-1.5 font-bold text-xl lg:w-[500px]">
          {data.map((item, idx) => (
            <div
              className={`cursor-pointer min-w-[150px] lg:w-[500px] px-5 pr-10 py-3 bg-white  hover:text-[#457ee7] border-l-4 gap-5 border-[#457ee7] flex flex-row items-center ${
                active === idx && "shadow-2xl"
              }`}
              key={idx}
              onClick={() => {
                setActive(idx);
              }}
            >
              <div className="min-w-[60px]">
                <Image src={item.icon} alt="" width="60" height={60} />
              </div>
              <div className="">
                {" "}
                <h3>{item.title}</h3>
                {active == idx && (
                  <p className="font-medium text-lg my-3">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <Image src={data[active].img} alt="" width="600" height={600} />
        </div>
      </div>
    </div>
  );
};

export default Why;
