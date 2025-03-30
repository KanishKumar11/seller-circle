/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
// // /* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  CircularProgress,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
  
const LatestBlog = ({ blog }) => {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  let latestB = blog[0];
  console.log(latestB, "latest log");

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    const safeText = String(text);
    const textOnly = safeText.replace(/<img[^>]*>/g, ""); // Remove <img> tags
    return textOnly.length > maxLength
      ? `${textOnly.slice(0, maxLength)}...`
      : textOnly;
  };

  const date = new Date(latestB?.createdAt);
  const formattedDate = date.toLocaleDateString();
  const router = useRouter();

  const updateDate = new Date(latestB?.authID?.updatedAt);
  const updatedDateOfBlog = updateDate.toLocaleDateString();

  console.log(latestB, formattedDate);

  // Simulate API delay before navigating
  const handleReadMoreClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/blog?id=${latestB?._id}`);
    }, 2000); // Simulate 2-second API delay
  };
  const imageUrl = latestB?.imageBase64 || "https://via.placeholder.com/395x419";

  return (
    <div className="p-4 md:px-[20px] flex flex-col items-center max-w-[1440px] mx-auto">

       <div className="max-w-7xl mx-auto mb-16 z-[39]">
              <motion.h3
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
                className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
              >
                LATEST BLOGS
              </motion.h3>
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
                className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
              >
                Stay updated with our latest{" "}
                <span className="text-[#039BE4]">insights and articles.  </span>
              </motion.h2>
            </div>


 
      <div className="flex flex-col md:flex-row bg-white overflow-hidden w-full">
        <div className="md:w-2/5  rounded-[20px] border border-gray-400 shadow-2xl md:h-[370px]">


               
            <img
              src={imageUrl}
              alt={latestB?.title || "Blog cover"}
              className="transition-transform duration-400 ease-in-out object-cover w-full h-full"
            />
          
            





        </div>
        <div className="md:w-3/5 p-4">
          <Box className="text-[14px] text-blue-500 w-[100px] h-[35px] mb-3 rounded-lg flex justify-center items-center bg-[#E4F0FF]">
            {latestB?.category}
          </Box>
          <div className="m-4">
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <img
                alt={""}
                src={
                  `data:${latestB?.authID?.filename};base64,${latestB?.authID?.imageBase64}` ||
                  ""
                }
                // src={authdata?.imageBase64}

                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
              />
              <div>
                <Typography variant="h5" className="font-[600]" component="div">
                  {latestB?.authID ? latestB?.authID.name : latestB?.name}
                </Typography>
                <Typography
                  variant="h7"
                  className="font-[600]"
                  color="text.secondary"
                >
                  {formattedDate}
                </Typography>
              </div>
            </Stack>
            <h3 className="text-3xl md:text-4xl my-4 font-semibold">
              {latestB?.title}
            </h3>
            <div
              className="blog-content-latest"
              style={{
                fontSize: "1rem", // Default text size
                color: "inherit",
              }}
              dangerouslySetInnerHTML={{
                __html: truncateText(
                  latestB?.content ||
                    blog ||
                    "Click on the Read Post to open this post  [...]",
                  100
                ),
              }}
            />

            <div className="py-3 relative">
              <button
                onClick={handleReadMoreClick}
                disabled={isLoading}
                className="text-blue-500 font-[700] text-lg md:text-xl hover:underline flex items-center gap-2"
              >
                Read post
                {!isLoading ? <ArrowOutwardIcon /> : null}
              </button>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <CircularProgress size={24} color="primary" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;

// "use client";
// import React, { useState } from "react";
// import {
//   Box,
//   Stack,
//   Avatar,
//   Typography,
//   CircularProgress,
// } from "@mui/material";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// const LatestBlog = ({ blog }) => {
//   const [isLoading, setIsLoading] = useState(false); // Loading state for the card
//   const latestB = blog[0]; // Get the latest blog post
//   const router = useRouter();

//   const truncateText = (text, maxLength) => {
//     if (!text) return "";
//     const safeText = String(text);
//     const textOnly = safeText.replace(/<img[^>]*>/g, ""); // Remove <img> tags
//     return textOnly.length > maxLength
//       ? `${textOnly.slice(0, maxLength)}...`
//       : textOnly;
//   };

//   // Format the creation date of the blog
//   const date = new Date(latestB?.createdAt || Date.now());
//   const formattedDate = date.toLocaleDateString();

//   // Simulate an API delay before navigating
//   const handleReadMoreClick = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       router.push(`/blog?id=${latestB?._id}`);
//     }, 2000); // Simulate 2-second API delay
//   };

//   return (
//     <div className="p-4  flex flex-col items-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
//       {/* Header Section */}
//       <div className="py-12 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-2">Latest Blog</h2>
//         <p className="text-lg md:text-xl text-gray-300">
//           Stay updated with our latest insights and articles.
//         </p>
//       </div>

//       {/* Blog Card */}
//       <div className="relative flex flex-col md:flex-row bg-black/80 rounded-xl overflow-hidden w-full max-w-6xl shadow-lg">
//         {/* Gradient Overlay for the Card */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 rounded-xl pointer-events-none" />

//         {/* Image Section */}
//         <div className="relative md:w-2/5 h-[300px] md:h-[400px]">
//           <Image
//             src={
//               latestB?.contentType && latestB?.imageBase64
//                 ? `data:${latestB?.contentType};base64,${latestB?.imageBase64}`
//                 : ""
//             }
//             alt={latestB?.title || "Blog Image"}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-t-xl md:rounded-l-xl md:rounded-t-none"
//           />
//           {/* Gradient Overlay for the Image */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl md:rounded-l-xl md:rounded-t-none pointer-events-none" />
//           {/* Loading Overlay */}
//           {isLoading && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
//               <CircularProgress size={40} color="primary" />
//             </div>
//           )}
//         </div>

//         {/* Content Section */}
//         <div className="relative md:w-3/5 p-6 flex flex-col justify-between">
//           {/* Category and Date */}
//           <div className="flex justify-between items-center mb-4">
//             <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold uppercase">
//               {latestB?.category || "Uncategorized"}
//             </span>
//             <span className="text-gray-400 text-sm">{formattedDate}</span>
//           </div>

//           {/* Title */}
//           <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
//             {latestB?.title || "Latest Blog Post Title"}
//           </h3>

//           {/* Description */}
//           <div
//             className="text-gray-300 text-base mb-6 leading-relaxed"
//             dangerouslySetInnerHTML={{
//               __html: truncateText(
//                 latestB?.content || "No content available",
//                 200
//               ),
//             }}
//           />

//           {/* Author Info */}
//           <Stack direction="row" spacing={2} alignItems="center" mb={4}>
//             <Avatar
//               src={
//                 latestB?.authID?.filename && latestB?.authID?.imageBase64
//                   ? `data:${latestB?.authID?.filename};base64,${latestB?.authID?.imageBase64}`
//                   : ""
//               }
//               alt={latestB?.authID?.name || "Author"}
//               sx={{ width: 48, height: 48 }}
//             />
//             <div>
//               <Typography
//                 variant="subtitle1"
//                 className="font-semibold text-white"
//               >
//                 {latestB?.authID?.name || "Unknown Author"}
//               </Typography>
//               <Typography variant="caption" className="text-gray-400">
//                 {formattedDate}
//               </Typography>
//             </div>
//           </Stack>

//           {/* Read More Button */}
//           <div>
//             <button
//               onClick={handleReadMoreClick}
//               disabled={isLoading}
//               className="flex items-center gap-2 text-blue-400 font-semibold text-lg hover:text-blue-300 transition-colors"
//             >
//               Read More
//               <ArrowOutwardIcon />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestBlog;
