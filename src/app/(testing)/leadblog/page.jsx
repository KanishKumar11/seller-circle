"use client";

import LeadGenerationBlog from "./leadGenerationBlog"

export default function Page() {
  const handleSubmit = (data) => {
  };

  return (
    <LeadGenerationBlog
      formPosition="right" // or "left"
      title='Amazon "Kitchen &amp; Bath" Category Benchmark Report'
      description='Are you looking to expand your presence in the lucrative "Kitchen and Bath" segment on Amazon? Do you seek data-driven strategies to stand out amidst fierce competition and capitalize on emerging trends? Our benchmark report offers invaluable insights to steer your product research, optimize listings, and elevate your brand presence on the world&apos;s largest e-commerce platform.'
      features={[
        {
          title: "Market Dynamics",
          description:
            "Gain a deep understanding of the evolving landscape within the &quot;Kitchen and Bath&quot; category, including growth trends, competitive analysis, and consumer preferences.",
        },
        {
          title: "Emerging Niches",
          description:
            "Uncover hidden opportunities in trending niches such as &quot;Stone Bath Mats,&quot; &quot;Instant Dry Sink Organizers,&quot; and more, with lower competition and high growth potential.",
        },
        {
          title: "Consumer Trends",
          description:
            "Stay ahead of the curve by exploring the latest consumer preferences, from sustainability and customization to convenience and wellness.",
        },
        {
          title: "Strategic Recommendations",
          description:
            "Receive actionable recommendations to optimize your product listings, encourage customer reviews, leverage advertising opportunities, and stay attuned to market trends.",
        },
      ]}
      formTitle="Download your FREE Report:"
      onSubmit={handleSubmit}
    />
  );
}
