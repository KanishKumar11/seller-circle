import Image from "next/image";
import React, { useState } from "react";
const data = [
  {
    title: "Inventory Management",
    desc: "Keep your stock levels in check with our advanced inventory management tools. Track inventory in real-time, set automatic restocking alerts, and avoid stockouts to ensure your products are always available for your customers. Efficient inventory management can significantly reduce operational costs and improve customer satisfaction.",
  },
  {
    title: "Payments Management",
    desc: "your financial operations with our payments management solutions. Get detailed insights into your revenue streams, manage payouts, and keep track of all your transactions in one place. Our application ensures transparency and accuracy, helping you manage your finances effortlessly.",
  },
  {
    title: "Catalog Management",
    desc: "Ensure your product listings are always up-to-date and optimized for maximum visibility. Our catalog management tools help you manage product details, images, and descriptions efficiently. This feature aids in enhancing your product discoverability and ensuring consistency across your listings.",
  },
  {
    title: "Orders and Shipping Management",
    desc: "Streamline your order processing and shipping operations. Monitor order statuses, track shipments, and manage returns with ease, providing a seamless experience for your customers. Efficient order and shipping management can lead to higher customer satisfaction and repeat business.",
  },
  {
    title: "Analytics and Reports",
    desc: "Make data-driven decisions with our powerful analytics and reporting tools. Access detailed reports on sales performance, customer behavior, and market trends to stay ahead of the competition. Consolidated performance reports across organic and advertising data provide a holistic view of your business health.",
  },
  {
    title: "Advertising Analytics",
    desc: "Maximize the effectiveness of your advertising campaigns with our advertising analytics solutions. Analyze ad performance, optimize your ad spend, and boost your return on investment with actionable insights. Our application includes automated audits that highlight hygiene issues with your Amazon Advertising Campaigns and offers smart, goal-based recommendations.",
  },
  {
    title: "Marketing Stream",
    desc: "Stay ahead of the curve with our marketing stream analytics. Track the performance of your marketing campaigns across various channels and gain insights into customer engagement and conversion rates. Real-time reporting and actions with Amazon Marketing Stream ensure you can act on trends and opportunities faster.",
  },
  {
    title: "Brand Analytics",
    desc: "Analyze your Amazon brand performance with our comprehensive brand analytics tools. Compare your brand's performance against competitors, gain insights into market trends, and identify growth opportunities. Leverage detailed reports on share of voice, customer behavior, and competitive positioning to stay ahead in the marketplace.",
  },
];
const Features = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="max-w-7xl mx-auto flex gap-7 flex-col my-20 text-tp">
      <h2 className="font-extrabold text-center lg:text-5xl text-3xl my-7 text-tp lg:mr-20">
        Our Application Features
      </h2>
      <div className="flex  lg:flex-row flex-col">
        <div className="lg:w-[70%] flex  flex-row gap-5 ">
          <div className="flex flex-col gap-1.5 font-bold lg:text-xl text-base">
            {data.map((item, idx) => (
              <div
                className={`cursor-pointer min-w-[120px] lg:w-[350px] px-5 lg:pr-10 pr-4 py-3 hover:bg-[#f1f3ff] rounded-xl hover:text-indigo-700 ${
                  active === idx ? "bg-[#f1f3ff]" : "bg-white"
                }`}
                key={idx}
                onClick={() => {
                  setActive(idx);
                }}
              >
                <h3>
                  {idx + 1}.{item.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="">
            <p>{data[active].desc}</p>
          </div>
        </div>
        <div className="lg:w-[30%] border-red-500 relative z-10  ">
          <Image
            src="/sellercircle-io/images/2.png"
            width={1000}
            height={1000}
            alt=""
            className=" w-full h-full lg:absolute z-10 left-16 -top-20 lg:w-[130%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
