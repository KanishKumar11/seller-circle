// import React from "react";
// import BlogCard from "../cards/BlogCard";
// import BlogCard2 from "../cards/BlogCard2";
// import { blogs } from "@/lib/data";
// import BlogCard3 from "../cards/BlogCard3";
// import { motion } from "framer-motion";
// const Blogs = () => {
//   console.log(blogs, " blogs blogs blogs blogs ")
//   return (
//     <div className="mx-auto max-w-7xl lg:px-20 px-8 flex-col flex  gap-5 my-20">
//       <motion.h2
//         initial={{ y: 100, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 100 }}
//         viewport={{ once: true }}
//         className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14"
//       >
//         Check Our <span className="text-[#039BE4]">Blogs</span>
//       </motion.h2>
//       <div className="flex flex-row flex-wrap gap-3">
//         {blogs.map((blog, index) => (
//           <div className="lg:max-w-[48%] w-full" key={index}>
//             {" "}
//             <BlogCard data={blog} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blogs;

// import { BlogCard } from "@/components";

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllBlogsAction } from "@/store/slices/BlogSlice";  // Assuming getAllBlogsAction is your action to fetch blogs
// import { motion } from "framer-motion";

// const Blogs = () => {
//   const dispatch = useDispatch();

//   // Accessing blogsData from Redux store
//   const { blogsData, isLoading } = useSelector((state) => state.blog);

//   // Fetch blogs data on component mount
//   useEffect(() => {
//     if (!blogsData || blogsData.length === 0) {
//       dispatch(getAllBlogsAction());  // Fetch blogs if not already available
//     }
//   }, [dispatch, blogsData]);

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p>Loading blogs...</p> {/* You can replace this with a loading skeleton */}
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto max-w-7xl lg:px-20 px-8 flex-col flex gap-5 my-20">
//       <motion.h2
//         initial={{ y: 100, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 100 }}
//         viewport={{ once: true }}
//         className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14"
//       >
//         Check Our <span className="text-[#039BE4]">Blogs</span>
//       </motion.h2>

//       <div className="flex flex-row flex-wrap gap-3">
//         {/* Map through blogsData from Redux store */}
//         {blogsData.slice(0, 3).map((blog, index) => (
//           <div className="lg:max-w-[48%] w-full" key={index}>
//             <BlogCard data={blog} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blogs;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogsAction } from "@/store/slices/BlogSlice"; 
import { motion } from "framer-motion";
import { BlogCard, BlogCardListSkeleton,  } from "@/components";  
import Link from "next/link";
import { Button } from "../ui/button";



const Blogs = () => {
  const dispatch = useDispatch();

  const { blogsData, isLoading } = useSelector((state) => state.blog);

  useEffect(() => {
    if (!blogsData || blogsData.length === 0) {
      dispatch(getAllBlogsAction());  
    }
  }, [dispatch, blogsData]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BlogCardListSkeleton />
        </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl lg:px-20 px-8 flex-col flex gap-5 my-20">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className="nunito font-extrabold text-4xl lg:text-6xl text-center my-14"
      >
        Check Our <span className="text-[#039BE4]">Blogs</span>
      </motion.h2>

      <div className="flex flex-row flex-wrap gap-3">
        {/* Map through blogsData from Redux store */}
        {blogsData.slice(0, 3).map((blog, index) => (
          <div className="lg:max-w-[32%] w-full" key={index}>
            <BlogCard
              imgUrl={blog?.imageBase64}
              title={blog.title}
              description={blog.content}
              category={blog.category}
              blog={blog.blog}
              blogData={blog}
              loading="lazy"
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
        
      </div>
        <div className="flex items-center justify-center mt-16">
      <Link href="/allblogs">
          <Button variant="cta">VIEW ALL BLOGS</Button>
        </Link>
        </div>
   
    </div>
  );
};

export default Blogs;
