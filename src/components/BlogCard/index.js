// "use client";
// import React, { useState } from "react";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Avatar,
//   Stack,
//   Box,
//   CircularProgress,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import renderBlogContent from "@/utils/htmlToContentConvertor";

// // Styled Card with a consistent, modern design
// const StyledCard = styled(Card)({
//   maxWidth: 400, // Fixed width for consistency
//   height: 420, // Fixed height for all cards
//   borderRadius: "16px", // Softer corners
//   overflow: "hidden",
//   display: "flex",
//   flexDirection: "column",
//   background: "linear-gradient(145deg, #ffffff, #f8fafc)", // Subtle gradient
//   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
//   position: "relative",
//   cursor: "pointer", // Indicate clickability
//   transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//   "&:hover": {
//     transform: "translateY(-8px)", // Lift effect
//     boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)", // Enhanced shadow
//   },
//   "&:hover .image-overlay": {
//     opacity: 0.8, // Show overlay
//   },
//   "&:hover .hover-effect": {
//     transform: "scale(1.05)", // Subtle image zoom
//   },
// });

// // Image wrapper to enforce consistent size
// const ImageWrapper = styled(Box)({
//   position: "relative",
//   width: "100%",
//   height: 200, // Fixed image height
//   overflow: "hidden",
// });

// // Overlay for image on hover, covering the full image
// const ImageOverlay = styled(Box)({
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%", // Full height of the image wrapper
//   background:
//     "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))", // Gradient overlay
//   opacity: 0,
//   transition: "opacity 0.3s ease-in-out",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// });

// const BlogCard = ({ imgUrl, category, title, content, blog, blogData }) => {
//   const [isLoading, setIsLoading] = useState(false); // Loading state
//   const truncateText = (text, maxLength) => {
//     if (!text) return "";
//     return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
//   };

//   const router = useRouter();
//   const data = blogData || {};
//   const authdata = data.authID || {};
//   const date = new Date(authdata.createdAt || Date.now());
//   const formattedDate = date.toLocaleDateString();
//   const contentDiscription = blogData?.content || null || "";

//   // Handle card click with loading state
//   const handleCardClick = () => {
//     setIsLoading(true);
//     router.push(`/blog?id=${data._id}`);
//     // Simulate loading (remove in production if navigation is instant)
//     setTimeout(() => setIsLoading(false), 1000);
//   };

//   console.log(blogData);
//   // Framer Motion variants
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//     hover: { scale: 1.02, transition: { duration: 0.3 } },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeInOut" } },
//   };

//   const contentVariants = {
//     hidden: { opacity: 0, y: 15 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { delay: 0.2, duration: 0.4, ease: "easeOut" },
//     },
//   };

//   const categoryVariants = {
//     hidden: { opacity: 0, x: -15 },
//     visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.4 } },
//   };

//   const buttonVariants = {
//     hover: {
//       x: 5,
//       color: "#1976d2",
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//   };
//   const contentDescription = data.content || blog || "";
//   const imageUrl = data?.imageBase64 || "https://via.placeholder.com/395x419";

//   return (
//     <motion.div
//       variants={cardVariants}
//       initial="hidden"
//       animate="visible"
//       whileHover="hover"
//       onClick={!isLoading ? handleCardClick : undefined}
//     >
//       <StyledCard>
//         {isLoading && (
//           <Box
//             sx={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "rgba(255, 255, 255, 0.9)",
//               zIndex: 10,
//             }}
//           >
//             <CircularProgress size={40} color="primary" />
//           </Box>
//         )}

//         {/* Image Section with Overlay */}
//         <ImageWrapper>
//           <motion.div
//             variants={imageVariants}
//             className="relative w-full h-full"
//           >
//             <img
//     src={imageUrl}
//     alt={data?.title || "Blog cover"}
//     className="transition-transform duration-400 ease-in-out object-cover w-full h-full"
//   />
//             <ImageOverlay className="image-overlay">
//               <Typography
//                 variant="body1"
//                 color="white"
//                 sx={{ fontWeight: 600, fontSize: "0.9rem" }}
//               >
//                 {category || "Explore"}
//               </Typography>
//             </ImageOverlay>
//           </motion.div>
//         </ImageWrapper>

//         {/* Card Content */}
//         <CardContent
//           sx={{
//             p: 2,
//             flex: 1,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between", // Distribute space evenly
//             position: "relative",
//           }}
//         >
//           {/* Category Tag */}
//           <motion.div variants={categoryVariants}>
//             <Box className="absolute -top-2 px-2 py-0.5 text-[11px] font-semibold rounded-full left-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
//               {category || "Uncategorized"}
//             </Box>
//           </motion.div>

//           {/* Title */}
//           <motion.div variants={contentVariants}>
//             <Typography
//               variant="h6"
//               component="div"
//               color="text.primary"
//               gutterBottom
//               sx={{
//                 fontWeight: 600,
//                 fontSize: "1.1rem",
//                 lineHeight: 1.3,
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 display: "-webkit-box",
//                 WebkitLineClamp: 2,
//                 WebkitBoxOrient: "vertical",
//                 mt: 1,
//               }}
//             >
//               {title ||
//                 "Multichannel eCommerce: Growing Your Brand Across Channels"}
//             </Typography>
//           </motion.div>

//           {/* Author Info */}
//           <motion.div variants={contentVariants}>
//             <Stack direction="row" spacing={1.5} alignItems="center" mb={1}>
//               <Avatar
//                     src={authdata?.imageBase64}

//                 alt={blogData?.authID?.name || "Profile Image"}
//                 sx={{ width: 32, height: 32, border: "1px solid #e3e7ea" }}
//               />
//               <div>
//                 <Typography
//                   variant="subtitle2"
//                   sx={{ fontWeight: 500, color: "#2d3748", fontSize: "0.9rem" }}
//                 >
//                   {blogData?.authID?.name || "Unknown Author"}
//                 </Typography>
//                 <Typography
//                   variant="caption"
//                   color="text.secondary"
//                   sx={{ fontSize: "0.75rem" }}
//                 >
//                   {formattedDate}
//                 </Typography>
//               </div>
//             </Stack>
//           </motion.div>

//           {/* Description */}
//           <motion.div variants={contentVariants} sx={{ flex: "1 0 auto" }}>
//             <Typography
//               variant="body2"
//               color="text.secondary"
//               sx={{
//                 lineHeight: 1.5,
//                 fontSize: "0.85rem",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 display: "-webkit-box",
//                 WebkitLineClamp: 2,
//                 WebkitBoxOrient: "vertical",
//                 maxHeight: "3rem", // Fixed height for description (2 lines)
//               }}
//               dangerouslySetInnerHTML={{
//                 __html: truncateText(
//                   contentDiscription ||
//                     blog ||
//                     "Click on the Read Post to open this post [...]",
//                   80
//                 ),
//               }}
//             />
//           </motion.div>

//           {/* Read More Button (fixed at bottom) */}
//           <motion.div
//             className="flex justify-end"
//             variants={buttonVariants}
//             whileHover="hover"
//             sx={{ mt: "auto", pb: 1 }} // Push to bottom with padding
//             onClick={(e) => {
//               e.stopPropagation();
//               handleCardClick();
//             }}
//           >
//             <button
//               className="flex items-center gap-1 text-blue-600 font-medium text-sm transition-colors"
//               disabled={isLoading}
//             >
//               Read Post
//               <ArrowOutwardIcon fontSize="small" />
//             </button>
//           </motion.div>
//         </CardContent>
//       </StyledCard>
//     </motion.div>
//   );
// };

// export default BlogCard;

//blog card with NUNITO

"use client";
import React, { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Box,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import renderBlogContent from "@/utils/htmlToContentConvertor";
import { Nunito_Sans } from "next/font/google"; // Import Nunito Sans font

// Apply Nunito Sans font
const nunito = Nunito_Sans({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

// Styled Card with a consistent, modern design

const StyledCard = styled(Card)({
  maxWidth: 400, // Fixed width for consistency
  height: 420, // Fixed height for all cards
  borderRadius: "16px", // Softer corners
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  background: "linear-gradient(145deg, #ffffff, #f8fafc)", // Subtle gradient
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
  position: "relative",
  cursor: "pointer", // Indicate clickability
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  fontFamily: nunito.style.fontFamily,

  "&:hover": {
    transform: "translateY(-8px)", // Lift effect
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)", // Enhanced shadow
  },
  "&:hover .image-overlay": {
    opacity: 0.8, // Show overlay
  },
  "&:hover .hover-effect": {
    transform: "scale(1.05)", // Subtle image zoom
  },
});

// Image wrapper to enforce consistent size
const ImageWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  height: 200, // Fixed image height
  overflow: "hidden",
});

// Overlay for image on hover, covering the full image
const ImageOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%", // Full height of the image wrapper
  background:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))", // Gradient overlay
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BlogCard = ({ imgUrl, category, title, content, blog, blogData }) => {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const router = useRouter();
  const data = blogData || {};
  const authdata = data.authID || {};
  const date = new Date(authdata.createdAt || Date.now());
  const formattedDate = date.toLocaleDateString();
  const contentDiscription = blogData?.content || null || "";

  // Handle card click with loading state
  const handleCardClick = () => {
    setIsLoading(true);
    router.push(`/blog?id=${data._id}`);
    // Simulate loading (remove in production if navigation is instant)
    setTimeout(() => setIsLoading(false), 1000);
  };

  console.log(blogData);
  // Framer Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.4, ease: "easeOut" },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.4 } },
  };

  const buttonVariants = {
    hover: {
      x: 5,
      color: "#1976d2",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  const contentDescription = data.content || blog || "";
  const imageUrl = data?.imageBase64 || "https://via.placeholder.com/395x419";

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={!isLoading ? handleCardClick : undefined}
      className={nunito.className} 
    >
      <StyledCard>
        {isLoading && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.9)",
              zIndex: 10,
            }}
          >
            <CircularProgress size={40} color="primary" />
          </Box>
        )}

        {/* Image Section with Overlay */}
        <ImageWrapper>
          <motion.div
            variants={imageVariants}
            className="relative w-full h-full"
          >
            <img
              src={imageUrl}
              alt={data?.title || "Blog cover"}
              className="transition-transform duration-400 ease-in-out object-cover w-full h-full"
            />
            <ImageOverlay className="image-overlay">
              <Typography
                variant="body1"
                color="white"
                sx={{ fontWeight: 600, fontSize: "0.9rem" }}
              >
                {category || "Explore"}
              </Typography>
            </ImageOverlay>
          </motion.div>
        </ImageWrapper>

        {/* Card Content */}
        <CardContent
          sx={{
            p: 2,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Distribute space evenly
            position: "relative",
          }}
        >
          {/* Category Tag */}
          <motion.div variants={categoryVariants}>
            <Box className="absolute -top-2 px-2 py-0.5 text-[11px] font-semibold rounded-full left-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
              {category || "Uncategorized"}
            </Box>
          </motion.div>

          {/* Title */}
          <motion.div variants={contentVariants}>
            <Typography
              variant="h6"
              component="div"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: "1.1rem",
                lineHeight: 1.3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                mt: 1,
              }}
            >
              {title ||
                "Multichannel eCommerce: Growing Your Brand Across Channels"}
            </Typography>
          </motion.div>

          {/* Author Info */}
          <motion.div variants={contentVariants}>
            <Stack direction="row" spacing={1.5} alignItems="center" mb={1}>
              <Avatar
                src={authdata?.imageBase64}
                alt={blogData?.authID?.name || "Profile Image"}
                sx={{ width: 32, height: 32, border: "1px solid #e3e7ea" }}
              />
              <div>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 500, color: "#2d3748", fontSize: "0.9rem" }}
                >
                  {blogData?.authID?.name || "Unknown Author"}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: "0.75rem" }}
                >
                  {formattedDate}
                </Typography>
              </div>
            </Stack>
          </motion.div>

          {/* Description */}
          <motion.div variants={contentVariants} sx={{ flex: "1 0 auto" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                lineHeight: 1.5,
                fontSize: "0.85rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                maxHeight: "3rem", // Fixed height for description (2 lines)
              }}
              dangerouslySetInnerHTML={{
                __html: truncateText(
                  contentDiscription ||
                    blog ||
                    "Click on the Read Post to open this post [...]",
                  80
                ),
              }}
            />
          </motion.div>

          {/* Read More Button (fixed at bottom) */}
          <motion.div
            className="flex justify-end"
            variants={buttonVariants}
            whileHover="hover"
            sx={{ mt: "auto", pb: 1 }} // Push to bottom with padding
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
          >
            <button
              className="flex items-center gap-1 text-blue-600 font-medium text-sm transition-colors"
              disabled={isLoading}
            >
              Read Post
              <ArrowOutwardIcon fontSize="small" />
            </button>
          </motion.div>
        </CardContent>
      </StyledCard>
    </motion.div>
  );
};

export default BlogCard;




//different blog card 
// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
// import { Card, Typography, Avatar, Box, CircularProgress } from "@mui/material";
// import { styled } from "@mui/system";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// // Styled Card with BarberCard-inspired design
// const StyledCard = styled(Card)({
//   maxWidth: 395, // Matches BarberCard's max-width
//   width: "100%",
//   aspectRatio: "395 / 419", // Matches BarberCard's aspect ratio
//   borderRadius: "16px", // Rounded corners like BarberCard
//   overflow: "hidden",
//   position: "relative",
//   cursor: "pointer",
//   transition: "all 0.2s ease-in-out",
//   "&:hover": {
//     boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)", // Hover shadow like BarberCard
//   },
// });

// const BlogCard = ({ imgUrl, category, title, content, blog, blogData }) => {
//   const [isLoading, setIsLoading] = useState(false); // Loading state for this specific card
//   const [showOverlay, setShowOverlay] = useState(false); // For hover effect
//   const cardRef = useRef(null);
//   const router = useRouter();

//   const truncateText = (text, maxLength) => {
//     if (!text) return "";
//     return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
//   };

//   const data = blogData || {};
//   const authdata = data.authID || {};
//   const date = new Date(data?.createdAt || Date.now());
//   const formattedDate = date.toLocaleDateString();
//   const contentDescription = data.content || blog || "";
//   console.log(blogData, authdata, formattedDate, "+++++++++++++++");

//   // Simulate an API call delay and then navigate
//   const handleCardClick = () => {
//     setIsLoading(true); // Show loader on this card
//     // Simulate API delay (replace with actual API call if needed)
//     setTimeout(() => {
//       setIsLoading(false); // Hide loader after delay
//       router.push(`/blog?id=${data._id}`); // Navigate after loading completes
//     }, 2000); // 2-second delay to simulate API call (adjust as needed)
//   };

//   // Scroll into view if needed (optional feature from BarberCard)
//   useEffect(() => {
//     if (cardRef.current) {
//       cardRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "nearest",
//       });
//     }
//   }, []);
//   const imageUrl = data?.imageBase64 || "https://via.placeholder.com/395x419";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ scale: 1.02 }}
//       onClick={!isLoading ? handleCardClick : undefined} // Only trigger click if not loading
//     >
//       <StyledCard
//         ref={cardRef}
//         onMouseEnter={() => setShowOverlay(true)}
//         onMouseLeave={() => setShowOverlay(false)}
//       >
//         {/* Image Section */}
//         <Box className="w-full h-full relative">
//   <img
//     src={imageUrl}
//     alt={data?.title || "Blog cover"}
//     className="transition-transform duration-400 ease-in-out object-cover w-full h-full"
//   />

//   {/* Gradient Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
// </Box>


//         {/* Content */}
//         <div className="absolute inset-0 p-4 flex flex-col justify-between">
//           {/* Top Section */}
//           <div className="flex justify-between items-start">
//             <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm">
//               {category || "Uncategorized"}
//             </span>
//             <div className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
//               <Typography className="text-sm">{formattedDate}</Typography>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="flex justify-between items-end">
//             <div className="text-white">
//               <Typography variant="h6" className="text-xl font-semibold">
//                 {title || "Blog Title"}
//               </Typography>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: truncateText(
//                     contentDescription ||
//                       blog ||
//                       "Click on the Read Post to open this post [...]",
//                     80
//                   ),
//                 }}
//               />
//             </div>
//           </div>

//           {/* Hover Overlay */}
//           <div
//             className={`absolute inset-x-0 bottom-0 rounded-t-[15px] bg-black/80 p-4 flex flex-col justify-end transition-transform duration-400 ease-in-out ${
//               showOverlay ? "translate-y-0" : "translate-y-full"
//             }`}
//           >
//             <div className="space-y-3 mb-4">
//               <div className="flex items-center gap-2 text-white">
//                 <Avatar
               
//                   src={authdata?.imageBase64}

//                   alt={authdata.name || "Author"}
//                   sx={{ width: 40, height: 40 }}
//                 />
//                 <div>
//                   <Typography className="font-semibold">
//                     {authdata.name || "Unknown Author"}
//                   </Typography>
//                   <Typography className="text-sm text-gray-300">
//                     {formattedDate}
//                   </Typography>
//                 </div>
//               </div>
//               <Typography className="text-white text-sm">
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: truncateText(
//                       contentDescription ||
//                         blog ||
//                         "Click on the Read Post to open this post [...]",
//                       80
//                     ),
//                   }}
//                 />
//               </Typography>
//             </div>
//             <div className="flex justify-between items-center">
//               <button
//                 className="w-[110px] mx-auto py-2 font-[700] text-[14px] px-4 text-blue-600 rounded-full bg-white transition-colors hover:bg-blue-100"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleCardClick();
//                 }}
//                 disabled={isLoading}
//               >
//                 Read Post
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Loading Overlay - Only shown when this card is loading */}
//         {isLoading && (
//           <Box
//             sx={{
//               position: "absolute",
//               inset: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "rgba(0, 0, 0, 0.5)",
//               zIndex: 10,
//             }}
//           >
//             <CircularProgress size={40} color="primary" />
//           </Box>
//         )}
//       </StyledCard>
//     </motion.div>
//   );
// };

// export default BlogCard;


