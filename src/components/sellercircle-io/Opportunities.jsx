import React from "react";
import Image from "next/image";

const Opportunities = () => {
  return (
    <div className="max-w-7xl mx-auto flex gap-7 flex-col my-20 text-tp items-center">
      <h2 className="font-extrabold text-center lg:text-4xl text-3xl my-7 text-tp ">
        Opportunities and Actionable Insights to Help You Scale{" "}
      </h2>
      <p>
        Get access to instant and actionable insights that can take your brand
        to the next level. Stay ahead of the curve by identifying and acting on
        trends and opportunities faster. Unlock the true potential of Amazon
        advertising with SellerCircle.io&#39;s state-of-the-art analytics
        application. Perfect for brands, sellers, and aggregators, our powerful
        platform, expertly curated strategies, and data-driven insights will
        help you achieve unprecedented levels of success on Amazon.
      </p>
      <Image
        src="/sellercircle-io/images/18.png"
        alt=""
        width="1200"
        height="1200"
        className=" rounded-md max-h-[80vh]  w-auto "
      />
      <h2 className="font-extrabold text-center lg:text-5xl text-3xl my-7 text-tp ">
        Get Started Today
      </h2>
      <p>
        Ready to take your Amazon business to the next level? Contact us to
        learn more about how our analytics application can help you achieve your
        goals.
      </p>
      <div className="lg:max-w-[80%]"> {/* <Audit /> */}</div>
    </div>
  );
};

export default Opportunities;
