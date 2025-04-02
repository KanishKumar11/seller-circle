// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// const PageAdminDashboard = () => {
//   const {
//     blogsData,
//     isLoading: isBlogsLoading,
//     latestBlogData,
//     isLoadinglatestBlog,
//   } = useSelector((state) => state.blog);
//   const { TotalAdminData, isLoading: isAdminsLoading } = useSelector(
//     (state) => state.adminData
//   );
//   const { editorData, isLoading: isEditorsLoading } = useSelector(
//     (state) => state.editorData
//   );

//   const [isLatestBlogsLoading, setIsLatestBlogsLoading] = useState(true);

//   // Check if all data is loaded (none of the relevant API calls are still loading)
//   const isAllDataLoaded =
//     !isBlogsLoading &&
//     !isAdminsLoading &&
//     !isEditorsLoading &&
//     !isLoadinglatestBlog;

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLatestBlogsLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   // Animation variants
//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const blogPostVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
//     },
//   };

//   const countVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
//   };

//   // Skeleton Components
//   const CardSkeleton = () => (
//     <div className="animate-pulse bg-white rounded-2xl p-6 shadow-lg">
//       <div className="flex items-center justify-between">
//         <div className="space-y-3">
//           <div className="h-4 w-20 bg-gray-200 rounded"></div>
//           <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         </div>
//         <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
//       </div>
//     </div>
//   );

//   const BlogPostSkeleton = () => (
//     <div className="animate-pulse bg-white rounded-xl p-6 shadow-sm">
//       <div className="space-y-4">
//         <div className="flex justify-between">
//           <div className="space-y-2">
//             <div className="h-5 w-48 bg-gray-200 rounded"></div>
//             <div className="h-4 w-24 bg-gray-200 rounded"></div>
//           </div>
//           <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
//         </div>
//         <div className="h-4 w-full bg-gray-200 rounded"></div>
//         <div className="flex justify-between">
//           <div className="h-4 w-20 bg-gray-200 rounded"></div>
//           <div className="h-4 w-24 bg-gray-200 rounded"></div>
//         </div>
//       </div>
//     </div>
//   );

//   const latestBlogs = [
//     {
//       title: "Getting Started with Web Development",
//       excerpt: "Learn the fundamentals...",
//       author: "John Doe",
//       date: "2023-09-20",
//       status: "Published",
//     },
//     {
//       title: "Advanced React Patterns",
//       excerpt: "Explore advanced React...",
//       author: "Jane Smith",
//       date: "2023-09-19",
//       status: "Draft",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="p-6 lg:p-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-10"
//         >
//           <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
//             Content Dashboard
//           </h1>
//           <p className="text-gray-600 mt-2 text-lg">
//             Manage your publications and team with ease
//           </p>
//         </motion.div>

//         {/* Stats Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
//           {/* Blog Card */}
//           {isBlogsLoading ? (
//             <CardSkeleton />
//           ) : (
//             <motion.div
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//               className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-blue-600 mb-2">
//                     Total Blogs
//                   </p>
//                   <motion.div
//                     variants={countVariants}
//                     initial="hidden"
//                     animate={isAllDataLoaded ? "visible" : "hidden"}
//                   >
//                     {isAllDataLoaded && (
//                       <CountUp
//                         start={0}
//                         end={blogsData.length}
//                         duration={2.5}
//                         delay={0.5}
//                         className="text-4xl font-extrabold text-gray-900"
//                       />
//                     )}
//                   </motion.div>
//                 </div>
//                 <div className="bg-blue-50 p-3 rounded-full">
//                   <svg
//                     className="w-8 h-8 text-blue-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* Admin Card */}
//           {isAdminsLoading ? (
//             <CardSkeleton />
//           ) : (
//             <motion.div
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//               className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-purple-600 mb-2">
//                     System Admins
//                   </p>
//                   <motion.div
//                     variants={countVariants}
//                     initial="hidden"
//                     animate={isAllDataLoaded ? "visible" : "hidden"}
//                   >
//                     {isAllDataLoaded && (
//                       <CountUp
//                         start={0}
//                         end={TotalAdminData.length}
//                         duration={2.5}
//                         delay={0.5}
//                         className="text-4xl font-extrabold text-gray-900"
//                       />
//                     )}
//                   </motion.div>
//                 </div>
//                 <div className="bg-purple-50 p-3 rounded-full">
//                   <svg
//                     className="w-8 h-8 text-purple-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* Editor Card */}
//           {isEditorsLoading ? (
//             <CardSkeleton />
//           ) : (
//             <motion.div
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//               className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-green-600 mb-2">
//                     Content Editors
//                   </p>
//                   <motion.div
//                     variants={countVariants}
//                     initial="hidden"
//                     animate={isAllDataLoaded ? "visible" : "hidden"}
//                   >
//                     {isAllDataLoaded && (
//                       <CountUp
//                         start={0}
//                         end={editorData.length}
//                         duration={2.5}
//                         delay={0.5}
//                         className="text-4xl font-extrabold text-gray-900"
//                       />
//                     )}
//                   </motion.div>
//                 </div>
//                 <div className="bg-green-50 p-3 rounded-full">
//                   <svg
//                     className="w-8 h-8 text-green-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* Latest Blog Card */}
//           {isLoadinglatestBlog ? (
//             <CardSkeleton />
//           ) : (
//             <motion.div
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//               className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-orange-600 mb-2">
//                     Blog Categories
//                   </p>
//                   <motion.div
//                     variants={countVariants}
//                     initial="hidden"
//                     animate={isAllDataLoaded ? "visible" : "hidden"}
//                   >
//                     {isAllDataLoaded && (
//                       <CountUp
//                         start={0}
//                         end={latestBlogData.length}
//                         duration={2.5}
//                         delay={0.5}
//                         className="text-4xl font-extrabold text-gray-900"
//                       />
//                     )}
//                   </motion.div>
//                 </div>
//                 <div className="bg-orange-50 p-3 rounded-full">
//                   <svg
//                     className="w-8 h-8 text-orange-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </div>

//         {/* Latest Blogs Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="bg-white p-6 rounded-2xl shadow-lg"
//         >
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-semibold text-gray-900">
//               Latest Blog Posts
//             </h2>
//             <Link
//               href="/allblogs"
//               className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors"
//             >
//               View All
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </Link>
//           </div>

//           <motion.div
//             variants={blogPostVariants}
//             initial="hidden"
//             animate={isLatestBlogsLoading ? "hidden" : "visible"}
//             className="grid gap-6 md:grid-cols-2"
//           >
//             {isLatestBlogsLoading
//               ? Array(2)
//                   .fill(0)
//                   .map((_, index) => <BlogPostSkeleton key={index} />)
//               : latestBlogs.map((blog, index) => (
//                   <motion.div
//                     key={index}
//                     variants={blogPostVariants}
//                     className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md"
//                   >
//                     <div className="flex items-center justify-between mb-4">
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
//                           {blog.title}
//                         </h3>
//                         <p className="text-sm text-gray-600 mt-1">
//                           By {blog.author}
//                         </p>
//                       </div>
//                       <span
//                         className={`text-xs font-medium px-3 py-1 rounded-full ${
//                           blog.status === "Published"
//                             ? "bg-green-100 text-green-800"
//                             : "bg-yellow-100 text-yellow-800"
//                         }`}
//                       >
//                         {blog.status}
//                       </span>
//                     </div>
//                     <p className="text-sm text-gray-600 mb-4 line-clamp-2">
//                       {blog.excerpt}
//                     </p>
//                     <div className="flex items-center justify-between text-sm text-gray-500">
//                       <span>{new Date(blog.date).toLocaleDateString()}</span>
//                       <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors">
//                         Read More
//                         <svg
//                           className="w-4 h-4"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M9 5l7 7-7 7"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </motion.div>
//                 ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default PageAdminDashboard;

"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { getAllBlogsAction } from "@/store/slices/BlogSlice";
import AdminBlogCardListSkeleton from "../Skeleton/AdminAllBlogSkeleton";
import BlogCard from "../BlogCard";

const PageAdminDashboard = () => {
  // const {
  //   blogsData,
  //   isLoading: isBlogsLoading,
  //   latestBlogData,
  //   isLoadinglatestBlog,
  // } = useSelector((state) => state.blog);
  const { TotalAdminData, isLoading: isAdminsLoading } = useSelector(
    (state) => state.adminData
  );
  const { editorData, isLoading: isEditorsLoading } = useSelector(
    (state) => state.editorData
  );

  const [isLatestBlogsLoading, setIsLatestBlogsLoading] = useState(true);

  // const isAllDataLoaded =
  //   !isBlogsLoading &&
  //   !isAdminsLoading &&
  //   !isEditorsLoading &&
  //   !isLoadinglatestBlog;

  useEffect(() => {
    const timer = setTimeout(() => setIsLatestBlogsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const blogPostVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  // Skeleton Components
  const BlogPostSkeleton = () => (
    <div className="animate-pulse bg-white rounded-xl p-6 shadow-sm">
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="space-y-2">
            <div className="h-5 w-48 bg-gray-200 rounded"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </div>
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
        </div>
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="flex justify-between">
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );

  // const latestBlogs = [
  //   {
  //     title: "Getting Started with Web Development",
  //     excerpt: "Learn the fundamentals...",
  //     author: "John Doe",
  //     date: "2023-09-20",
  //     status: "Published",
  //   },
  //   {
  //     title: "Advanced React Patterns",
  //     excerpt: "Explore advanced React...",
  //     author: "Jane Smith",
  //     date: "2023-09-19",
  //     status: "Draft",
  //   },
  // ];

  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { blogsData, isLoading, latestBlogData, isLoadinglatestBlog } =
    useSelector((state) => state.blog);

  // Fetch data only once on mount if not already present
  useEffect(() => {
    if (!blogsData || blogsData.length === 0) {
      dispatch(getAllBlogsAction());
    }
  }, [dispatch, blogsData, latestBlogData]); // Dependencies ensure we only fetch if data is missing

  // Memoize the filtered and sorted data
  const filterData = useMemo(() => {
    if (!blogsData) return [];

    // Sort blogs by createdAt (or updatedAt) in descending order (latest first)
    const sortedData = [...blogsData].sort(
      (a, b) =>
        new Date(b.createdAt || b.updatedAt) -
        new Date(a.createdAt || a.updatedAt)
    );

    // Filter based on search query
    const refineData = sortedData.filter((data) => {
      const title = (data.title || "")
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();
      const searchQuery = query.trim().replace(/\s+/g, " ").toLowerCase();
      return title.includes(searchQuery);
    });

    return refineData;
  }, [blogsData, query]); // Only recompute when blogsData or query changes

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <AdminBlogCardListSkeleton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6 lg:p-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Manage your publications and team with ease
          </h1>
         
        </motion.div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link href="/admin/add-blog">
              <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg text-lg font-semibold">
                Add Blog
              </button>
            </Link>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link href="/admin/add-admin">
              <button className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl hover:bg-purple-700 transition-colors duration-300 shadow-lg text-lg font-semibold">
                Add Admin
              </button>
            </Link>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link href="/admin/add-editor">
              <button className="w-full bg-green-600 text-white py-4 px-6 rounded-xl hover:bg-green-700 transition-colors duration-300 shadow-lg text-lg font-semibold">
                Add Editor
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Latest Blogs Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Latest Blog Posts
            </h2>
            <Link
              href="/allblogs"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors"
            >
              View All
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          {/* </motion.div> */}

          {/* <motion.div
            variants={blogPostVariants}
            initial="hidden"
            animate={isLatestBlogsLoading ? "hidden" : "visible"}
            className="grid gap-6 md:grid-cols-2"
          >
            {isLatestBlogsLoading
              ? Array(2)
                  .fill(0)
                  .map((_, index) => <BlogPostSkeleton key={index} />)
              : latestBlogs.map((blog, index) => (
                  <motion.div
                    key={index}
                    variants={blogPostVariants}
                    className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          By {blog.author}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          blog.status === "Published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {blog.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors">
                        Read More
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
          </motion.div>
        </motion.div> */}
         <div className="py-8 bg-gradient-to-b from-gray-50 to-gray-100">
              {/* Blog Cards Grid */}
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  {filterData.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:grid-cols-3 2xl:grid-cols-4 ">
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
                        Try adjusting your search query to find what you are looking
                        for.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            </motion.div>

      </div>
    </div>
    
  );
};

export default PageAdminDashboard;
