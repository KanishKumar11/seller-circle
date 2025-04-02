"use client";
import Image from "next/image";
export default function BlogPost() {
  // Sample data - in a real app this would come from props or API
  const post = {
    title: "Exclude Audience in Amazon DSP Campaigns to Increase ROI",
    date: "28 May 2024",
    author: {
      name: "Archit Arora",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "With the advent of Amazon Marketing Cloud (AMC), optimizing ad campaigns has become more versatile than ever. One notable feature is the implementation of Exclusion Audiences in DSP campaigns. While you could previously exclude audiences using Amazon DSP, AMC allows for even more granular control over who sees your ads.",
    // image:
    //   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S85UFoY5uiTSobA34snCsoYiPtoHYL.png",
  };

  const recentPosts = [
    {
      title: "Multichannel eCommerce: Growing Your Brand Across Channels",
      url: "#",
    },
    {
      title: "How to Write Amazon Plan of Action - With Examples",
      url: "#",
    },
    {
      title: "What is Amazon Dropshipping and How to Start It?",
      url: "#",
    },
    {
      title: "How to Start Earning with Amazon Influencer Program",
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[300px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 py-16">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-3">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-white">
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm opacity-80">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Article Content */}
          <article className="lg:col-span-2">
            <div className="mb-8 overflow-hidden rounded-xl">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={800}
                height={400}
                className="w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <span className="text-sm font-medium text-blue-600">Article</span>
              <h2 className="text-3xl font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500">adbrew</p>
              <p className="leading-relaxed text-gray-700">{post.content}</p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Recent Posts */}
            <div>
              <h3 className="mb-4 text-xl font-bold">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <a
                    key={index}
                    href={post.url}
                    className="block text-blue-600 hover:underline"
                  >
                    {post.title}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="rounded-xl bg-blue-600 p-6 text-white">
              <h3 className="mb-4 text-xl font-bold">
                Amazon DSP Ads Optimization Software
              </h3>
              <p className="mb-4">
                Hello 👋 Would you like to learn more about how AMC can help
                your brand?
              </p>
              <a
                href="#"
                className="inline-block rounded-lg bg-white px-4 py-2 text-blue-600 hover:bg-gray-100"
              >
                Book a Demo →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
