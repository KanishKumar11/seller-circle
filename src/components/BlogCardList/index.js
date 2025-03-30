/* eslint-disable react-hooks/exhaustive-deps */
// "use client";
// import {
//   BlogCard,
//   BlogCardListSkeleton,
//   LastestBlog,
//   Searchbar,
// } from "@/components";
// import {
//   getAllBlogsAction,
//   getLatestBlogAction,
// } from "@/store/slices/BlogSlice";
// import { dummyPosts } from "@/testingData/cardData";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import LatestBlog from "../LastestBlog";
// import LatestBlogSkeleton from "../Skeleton/LatestBlogSkeleton";
// const BlogCardList = ({ posts = dummyPosts }) => {
//   const dispatch = useDispatch();
//   const [query, setQuery] = useState("");
//   const { blogsData, isLoading, latestBlogData, isLoadinglatestBlog } =
//     useSelector((state) => state.blog);
//   const [filterData, setFilterData] = useState([]);

//   useEffect(() => {
//     dispatch(getAllBlogsAction());
//     dispatch(getLatestBlogAction());
//   }, []);
//   // useEffect(() => {
//   //   if (blogsData) {
//   //     const refineData = blogsData.filter((data) => {
//   //       const title = (data.title || "")
//   //         .trim()
//   //         .replace(/\s+/g, " ")
//   //         .toLowerCase();
//   //       const searchQuery = query.trim().replace(/\s+/g, " ").toLowerCase();

//   //       return title.includes(searchQuery);
//   //     });

//   //     setFilterData(refineData);
//   //   }
//   // }, [blogsData, query]);
//   useEffect(() => {
//     if (blogsData) {
//       // Sort blogs by createdAt (or updatedAt) in descending order (latest first)
//       const sortedData = [...blogsData].sort(
//         (a, b) =>
//           new Date(b.createdAt || b.updatedAt) -
//           new Date(a.createdAt || a.updatedAt)
//       );

//       const refineData = sortedData.filter((data) => {
//         const title = (data.title || "")
//           .trim()
//           .replace(/\s+/g, " ")
//           .toLowerCase();
//         const searchQuery = query.trim().replace(/\s+/g, " ").toLowerCase();

//         return title.includes(searchQuery);
//       });

//       setFilterData(refineData);
//     }
//   }, [blogsData, query]);

//   if (isLoading) {
//     return (
//       <div>
//         <BlogCardListSkeleton />
//       </div>
//     );
//   }
//   return (
//     <div className="py-12">
//       {isLoadinglatestBlog ? (
//         <LatestBlogSkeleton />
//       ) : (
//         <LatestBlog blog={latestBlogData} />
//       )}
//       <div className="sticky z-10 top-0 right-0 left-0 bg-white ">
//         {" "}
//         {/* Added bg-white to ensure visibility */}
//         <Searchbar setQuery={setQuery} query={query} />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//         {filterData.length > 0 ? (
//           filterData.map((post) => {
//             return (
//               <div className="relative z-0" key={post._id}>
//                 {" "}
//                 {/* Set z-index to 0 for BlogCard */}
//                 <BlogCard
//                   imgUrl={post?.imageBase64}
//                   title={post.title}
//                   description={post.content}
//                   category={post.category}
//                   blog={post.blog}
//                   blogData={post}
//                   loading="lazy" // Add lazy loading for images
//                 />
//               </div>
//             );
//           })
//         ) : (
//           <h1>No Result Found</h1>
//         )}
//       </div>
//     </div>
//   );
// };
// export default BlogCardList;

// "use client";
// import { BlogCard, BlogCardListSkeleton, Searchbar } from "@/components";
// import {
//   getAllBlogsAction,
//   getLatestBlogAction,
// } from "@/store/slices/BlogSlice";
// import { dummyPosts } from "@/testingData/cardData";
// import { useEffect, useState, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import LatestBlog from "../LastestBlog";
// import LatestBlogSkeleton from "../Skeleton/LatestBlogSkeleton";
// import useScrollColor from "@/hooks/changeColorHook";
// const BlogCardList = ({ posts = dummyPosts }) => {
//   const dispatch = useDispatch();
//   const [query, setQuery] = useState("");
//   const { blogsData, isLoading, latestBlogData, isLoadinglatestBlog } =
//     useSelector((state) => state.blog);

//   // Fetch data only once on mount if not already present
//   useEffect(() => {
//     if (!blogsData || blogsData.length === 0) {
//       dispatch(getAllBlogsAction());
//     }
//     if (!latestBlogData || latestBlogData.length === 0) {
//       dispatch(getLatestBlogAction());
//     }
//   }, [dispatch]); // Dependencies ensure we only fetch if data is missing

//   // Memoize the filtered and sorted data
//   const filterData = useMemo(() => {
//     if (!blogsData) return [];

//     // Sort blogs by createdAt (or updatedAt) in descending order (latest first)
//     const sortedData = [...blogsData].sort(
//       (a, b) =>
//         new Date(b.createdAt || b.updatedAt) -
//         new Date(a.createdAt || a.updatedAt)
//     );
//     //change teh color on scroll

//     // Filter based on search query
//     const refineData = sortedData.filter((data) => {
//       const title = (data.title || "")
//         .trim()
//         .replace(/\s+/g, " ")
//         .toLowerCase();
//       const searchQuery = query.trim().replace(/\s+/g, " ").toLowerCase();
//       return title.includes(searchQuery);
//     });

//     return refineData;
//   }, [blogsData, query]); // Only recompute when blogsData or query changes
//   const isScrolled = useScrollColor(650); //@change the bacground color on scroll
//   if (isLoading) {
//     return (
//       <div className="min-h-screen">
//         <BlogCardListSkeleton />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-8 maxw-[1440px] mx-auto bg-gradient-to-b from-gray-50 to-gray-100">
//       {/* Latest Blog Section */}
//       <div className="px-4 sm:px-6 lg:px-8 mb-8">
//         {isLoadinglatestBlog ? (
//           <LatestBlogSkeleton />
//         ) : (
//           <LatestBlog blog={latestBlogData} />
//         )}
//       </div>

//       {/* Search Bar */}
//       <div
//         className={`sticky top-0 z-20 px-4 sm:px-6 lg:px-8 py-4 shadow-md transition-all duration-300 ${
//           isScrolled
//             ? "bg-blue-600/80 backdrop-blur-md border border-blue-500/30"
//             : "bg-white/50 backdrop-blur-lg border border-white/20"
//         }`}
//         style={{ minHeight: "80px" }} // 🔹 Ensures it doesn't shrink or expand
//       >
//         <div className="max-w-7xl mx-auto">
//           <Searchbar setQuery={setQuery} query={query} />
//         </div>
//       </div>

//       {/* Blog Cards Grid */}
//       <div className="px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {filterData.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-6 gap-6">
//               {filterData.map((post) => (
                
//                 <div key={post._id} className="relative">
//                   <BlogCard
//                     imgUrl={post?.imageBase64}
//                     title={post.title}
//                     description={post.content}
//                     category={post.category}
//                     blog={post.blog}
//                     blogData={post}
//                     loading="lazy"
//                     className="transform hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <h1 className="text-2xl md:text-3xl font-semibold text-gray-700">
//                 No Results Found
//               </h1>
//               <p className="mt-2 text-gray-500">
//                 Try adjusting your search query to find what you are looking
//                 for.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCardList;


// *********************************************************************
// with fuse.js 

"use client";
import { BlogCard, BlogCardListSkeleton, Searchbar } from "@/components";
import { getAllBlogsAction, getLatestBlogAction } from "@/store/slices/BlogSlice";
import { dummyPosts } from "@/testingData/cardData";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import LatestBlog from "../LastestBlog";
import LatestBlogSkeleton from "../Skeleton/LatestBlogSkeleton";
import useScrollColor from "@/hooks/changeColorHook";
import Fuse from "fuse.js"; 

const BlogCardList = ({ posts = dummyPosts }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { blogsData, isLoading, latestBlogData, isLoadinglatestBlog } = useSelector((state) => state.blog);

  useEffect(() => {
    if (!blogsData || blogsData.length === 0) {
      dispatch(getAllBlogsAction());
    }
    if (!latestBlogData || latestBlogData.length === 0) {
      dispatch(getLatestBlogAction());
    }
  }, [dispatch]); 


  
  const filterData = useMemo(() => {
    if (!blogsData) return [];  
  
    if (query === "") {
      return blogsData;
    }
  
    const fuseOptions = {
      keys: ["title", "content"],
      threshold: 0.4,
      includeScore: true,
    };
  
    const fuse = new Fuse(blogsData, fuseOptions);
    const result = fuse.search(query);
  
    return result.map((item) => item.item);
  }, [blogsData, query]);  
  
  
  const isScrolled = useScrollColor(650); 

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <BlogCardListSkeleton />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 maxw-[1440px] mx-auto bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Latest Blog Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        {isLoadinglatestBlog ? (
          <LatestBlogSkeleton />
        ) : (
          <LatestBlog blog={latestBlogData} />
        )}
      </div>

      {/* Search Bar */}
      <div
        className={`sticky top-0 z-20 px-4 sm:px-6 lg:px-8 py-4 shadow-md transition-all duration-300 ${
          isScrolled
            ? "bg-blue-600/80 backdrop-blur-md border border-blue-500/30"
            : "bg-white/50 backdrop-blur-lg border border-white/20"
        }`}
        style={{ minHeight: "80px" }} 
      >
        <div className="max-w-7xl mx-auto">
          <Searchbar setQuery={setQuery} query={query} />
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filterData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-6 gap-6">
              {filterData.map((post) => (
                <div key={post._id} className="relative">
                  <BlogCard
                    imgUrl={post?.imageBase64}
                    title={post.title}
                    description={post.content}
                    category={post.category}
                    blog={post.blog}
                    blogData={post}
                    loading="lazy"
                    className="transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-700">
                No Results Found
              </h1>
              <p className="mt-2 text-gray-500">
                Try adjusting your search query to find what you are looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCardList;
