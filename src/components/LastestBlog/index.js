// /* eslint-disable @next/next/no-img-element */
// // /* eslint-disable @next/next/no-img-element */
// // // /* eslint-disable @next/next/no-img-element */
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
// import { motion } from "framer-motion";
  
// const LatestBlog = ({ blog }) => {
//   const [isLoading, setIsLoading] = useState(false); // Loading state
//   let latestB = blog[0];
//   console.log(latestB, "latest log");

//   const truncateText = (text, maxLength) => {
//     if (!text) return "";
//     const safeText = String(text);
//     const textOnly = safeText.replace(/<img[^>]*>/g, ""); // Remove <img> tags
//     return textOnly.length > maxLength
//       ? `${textOnly.slice(0, maxLength)}...`
//       : textOnly;
//   };

//   const date = new Date(latestB?.createdAt);
//   const formattedDate = date.toLocaleDateString();
//   const router = useRouter();

//   const updateDate = new Date(latestB?.authID?.updatedAt);
//   const updatedDateOfBlog = updateDate.toLocaleDateString();

//   console.log(latestB, formattedDate);

//   // Simulate API delay before navigating
//   const handleReadMoreClick = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       router.push(`/blog?id=${latestB?._id}`);
//     }, 2000); // Simulate 2-second API delay
//   };
//   const imageUrl = latestB?.imageBase64 || "https://via.placeholder.com/395x419";
// console.log(imageUrl,"yrgfyugyug")
//   return (
//     <div className="p-4 md:px-[20px] flex flex-col items-center max-w-[1440px] mx-auto">

//        <div className="max-w-7xl mx-auto mb-16 z-[39]">
//               <motion.h3
//                 initial={{ y: 100, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 100 }}
//                 viewport={{ once: true }}
//                 className="font-[900] text-2xl lg:text-4xl text-[#039BE4] text-center max-w-4xl uppercase mx-auto"
//               >
//                 LATEST BLOGS
//               </motion.h3>
//               <motion.h2
//                 initial={{ y: 100, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 100 }}
//                 viewport={{ once: true }}
//                 className="nunito font-extrabold text-2xl lg:text-5xl max-w-5xl mx-auto text-center my-7 uppercase text-wrap"
//               >
//                 Stay updated with our latest{" "}
//                 <span className="text-[#039BE4]">insights and articles.  </span>
//               </motion.h2>
//             </div>


 
//       <div className="flex flex-col md:flex-row bg-white overflow-hidden w-full">
//         <div className="md:w-2/5 flex justify-center  rounded-[20px] border border-grey-400 shadow-2xl  md:h-[370px]">


               
//             <img
//               src={imageUrl}
//               alt={latestB?.title || "Blog cover"}
//               className="transition-transform duration-400 ease-in-out object-cover center rounded-full w-full h-full"
//             />
          
            





//         </div>
//         <div className="md:w-3/5 p-4">
//           <Box className="text-[14px] text-blue-500 w-[100px] h-[35px] mb-3 rounded-lg flex justify-center items-center bg-[#E4F0FF]">
//             {latestB?.category}
//           </Box>
//           <div className="m-4 ">
//             <Stack direction="row" spacing={1} alignItems="center" mb={1}>
//               <img
//                 alt={""}
//                 src={latestB?.authID?.imageBase64}
//                 // src={authdata?.imageBase64}

//                 style={{
//                   width: 90,
//                   height: 90,
//                   borderRadius: "100%",
//                   objectFit: "cover",

//                 }}
//                 className="shadow-lg border"
//               />
//               <div>
//                 <Typography variant="h5" className="font-[600]" component="div">
//                   {latestB?.authID ? latestB?.authID.name : latestB?.name}
//                 </Typography>
//                 <Typography
//                   variant="h7"
//                   className="font-[600]"
//                   color="text.secondary"
//                 >
//                   {formattedDate}
//                 </Typography>
//               </div>
//             </Stack>
//             <h3 className="text-3xl md:text-4xl my-4 font-semibold">
//               {latestB?.title}
//             </h3>
//             <div
//               className="blog-content-latest"
//               style={{
//                 fontSize: "1rem", // Default text size
//                 color: "inherit",
//               }}
//               dangerouslySetInnerHTML={{
//                 __html: truncateText(
//                   latestB?.content ||
//                     blog ||
//                     "Click on the Read Post to open this post  [...]",
//                   100
//                 ),
//               }}
//             />

//             <div className="py-3 relative">
//               <button
//                 onClick={handleReadMoreClick}
//                 disabled={isLoading}
//                 className="text-blue-500 font-[700] text-lg md:text-xl hover:underline flex items-center gap-2"
//               >
//                 Read post
//                 {!isLoading ? <ArrowOutwardIcon /> : null}
//               </button>
//               {isLoading && (
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <CircularProgress size={24} color="primary" />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestBlog;


// with font 
"use client";
import { Nunito_Sans } from "next/font/google";
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

// Import the Nunito font
const nunito = Nunito_Sans({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

const LatestBlog = ({ blog }) => {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  let latestB = blog[0];

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

  const handleReadMoreClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/blog?id=${latestB?._id}`);
    }, 2000); // Simulate 2-second API delay
  };

  const imageUrl = latestB?.imageBase64 || "https://via.placeholder.com/395x419";

  return (
    <div className={`${nunito.className} p-4 md:px-[20px] flex flex-col items-center max-w-[1440px] mx-auto`}>
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
        <div className="md:w-2/5 flex justify-center rounded-[20px] border border-grey-400 shadow-2xl md:h-[370px]">
          <img
            src={imageUrl}
            alt={latestB?.title || "Blog cover"}
            className="transition-transform duration-400 ease-in-out object-cover center rounded-full w-full h-full"
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
                src={latestB?.authID?.imageBase64}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
                className="shadow-lg border"
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
