
// "use client";
// import { BlogPostSkeleton } from "@/components";
// import { getBlogByIdAction } from "@/store/slices/BlogSlice";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { RelatedBlogList } from "@/components";

// export default function BlogPost() {
//   const dispatch = useDispatch();
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");
//   const { singleBlog, isLoadingSingleBlog } = useSelector(
//     (state) => state.blog
//   );
//   const { blogsData } = useSelector((state) => state.blog);
//   const { data } = singleBlog;

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   useEffect(() => {
//     if (id) {
//       dispatch(getBlogByIdAction(id));
//     }
//   }, [dispatch, id]);

//   const handleInputChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   if (isLoadingSingleBlog) return <BlogPostSkeleton />;
//   const updateDate = new Date(data?.createdAt);
//   const DateOfcreate = updateDate.toLocaleDateString();

//   const isSimpleBlog = data?.blogType === "simple";
//   const showForm = data?.blogType === "lead";
//   const formPosition = data?.formPosition || "right"; // Use data.formPosition if available, default to "right"
//   // const formPosition = "left"; // Use data.formPosition if available, default to "right"

//   const processContent = (htmlContent) => {
//     if (!htmlContent) return "";
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlContent, "text/html");
//     const images = doc.getElementsByTagName("img");

//     for (const img of images) {
//       img.style.height = "auto"; // Changed to auto for better responsiveness
//       img.style.maxHeight = "400px"; // Added max-height instead
//       img.style.width = "100%";
//       img.style.objectFit = "cover";
//       img.style.borderRadius = "1.5rem";
//       img.style.marginBottom = "2rem";
//       img.style.border = "1px solid #f3f4f6";
//       img.style.boxShadow = "0 20px 25px -5px rgb(0 0 0 / 0.1)";
//     }

//     return doc.body.innerHTML;
//   };

//   const processedContent = processContent(data?.content);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const ContactForm = () => (
//     <motion.div
//       className="bg-white rounded-xl p-4 sm:p-6 shadow-md mb-8"
//       variants={itemVariants}
//     >
//       <h3 className="text-xl font-semibold text-gray-900 mb-4">Let Connect</h3>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 placeholder-gray-400"
//           placeholder="Your Name"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 placeholder-gray-400"
//           placeholder="Your Email"
//           required
//         />
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleInputChange}
//           className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 placeholder-gray-400"
//           placeholder="Your Message"
//           rows="4"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
//         >
//           Send Message
//         </button>
//       </form>
//     </motion.div>
//   );
//   const imageUrl = data?.imageBase64 || "https://via.placeholder.com/395x419";

//   return (
//     <motion.div
//       className="min-h-screen bg-gray-50"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       {data && !isLoadingSingleBlog && (
//         <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl">
//           <div className="flex flex-col lg:grid lg:gap-8 lg:grid-cols-3">
//             {/* Sidebar (Left) - Only shown when formPosition is "left" */}
//             {formPosition === "left" && (
//               <motion.div
//                 variants={itemVariants}
//                 className="order-2 lg:order-1 lg:col-span-1"
//               >
//                 <div className="lg:sticky lg:top-24 space-y-6">
//                   <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                       Related Posts
//                     </h3>
//                     <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-gray-50 pr-2">
//                       <RelatedBlogList
//                         blogs={blogsData || []}
//                         category={data?.category}
//                         currentBlogId={id}
//                       />
//                     </div>
//                   </div>
//                   {showForm && <ContactForm />}
//                 </div>
//               </motion.div>
//             )}

//             {/* Main Content - Always first on mobile, middle on desktop when form is left */}
//             <motion.div
//               variants={itemVariants}
//               className={`order-1 ${
//                 formPosition === "left" || formPosition === "right"
//                   ? "lg:col-span-2"
//                   : "lg:col-span-3"
//               }`}
//             >
//               <div className="mb-8">
//                 <img
//                   src={imageUrl}
//                   alt={data.title}
//                   width={1200}
//                   height={400}
//                   className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-xl shadow-md border border-gray-200"
//                 />
//               </div>

//               <div className="mb-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
//                     {data.category}
//                   </span>
//                   <span className="text-sm text-gray-500">{DateOfcreate}</span>
//                 </div>
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//                   {data.title}
//                 </h1>
//                 <div className="flex items-center gap-3 border-b border-gray-100 pb-6">
//                   <img
//                     // src={
//                     //   `data:${data?.contentType || "/placeholder.svg"};base64,${
//                     //     data?.authID?.imageBase64
//                     //   }` || "https://via.placeholder.com/40"
//                     // }
//                     src={data?.authID?.imageBase64}

//                     alt={data?.authID?.name}
//                     width={40}
//                     height={40}
//                     className="rounded-full border-2 border-purple-100"
//                   />
//                   <div className="text-gray-600">
//                     <p className="font-medium">{data?.authID?.name}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed mb-10">
//                 <div dangerouslySetInnerHTML={{ __html: processedContent }} />
//               </div>
//             </motion.div>

//             {/* Sidebar (Right) - Only shown when formPosition is "right" or not specified */}
//             {(formPosition === "right" || !formPosition) && (
//               <motion.div
//                 variants={itemVariants}
//                 className="order-2 lg:order-2 lg:col-span-1"
//               >
//                 <div className="lg:sticky lg:top-24 space-y-6">
//                   <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                       Related Posts
//                     </h3>
//                     <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-gray-50 pr-2">
//                       <RelatedBlogList
//                         blogs={blogsData || []}
//                         category={data?.category}
//                         currentBlogId={id}
//                       />
//                     </div>
//                   </div>
//                   {showForm && <ContactForm />}
//                 </div>
//               </motion.div>
//             )}

//             {/* Mobile-only sidebar - Only shown when screen is small */}
//             {formPosition !== "left" && formPosition !== "right" && (
//               <motion.div variants={itemVariants} className="order-2 lg:hidden">
//                 <div className="space-y-6">
//                   {showForm && <ContactForm />}
//                   <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                       Related Posts
//                     </h3>
//                     <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-gray-50 pr-2">
//                       <RelatedBlogList
//                         blogs={blogsData || []}
//                         category={data?.category}
//                         currentBlogId={id}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// }



"use client";
import { Nunito_Sans } from "next/font/google";
import { BlogPostSkeleton } from "@/components";
import { getBlogByIdAction } from "@/store/slices/BlogSlice";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { RelatedBlogList } from "@/components";

// Import Nunito Sans font
const nunito = Nunito_Sans({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

export default function BlogPost() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { singleBlog, isLoadingSingleBlog } = useSelector(
    (state) => state.blog
  );
  const { blogsData } = useSelector((state) => state.blog);
  const { data } = singleBlog;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getBlogByIdAction(id));
    }
  }, [dispatch, id]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  if (isLoadingSingleBlog) return <BlogPostSkeleton />;
  const updateDate = new Date(data?.createdAt);
  const DateOfcreate = updateDate.toLocaleDateString();

  const isSimpleBlog = data?.blogType === "simple";
  const showForm = data?.blogType === "lead";
  const formPosition = data?.formPosition || "right";

  const processContent = (htmlContent) => {
    if (!htmlContent) return "";
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const images = doc.getElementsByTagName("img");

    for (const img of images) {
      img.style.height = "auto";
      img.style.maxHeight = "400px";
      img.style.width = "100%";
      img.style.objectFit = "cover";
      img.style.borderRadius = "1.5rem";
      img.style.marginBottom = "2rem";
      img.style.border = "1px solid #f3f4f6";
      img.style.boxShadow = "0 20px 25px -5px rgb(0 0 0 / 0.1)";
    }

    return doc.body.innerHTML;
  };

  const processedContent = processContent(data?.content);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const ContactForm = () => (
    <motion.div
      className="bg-white rounded-xl p-4 sm:p-6 shadow-md mb-8"
      variants={itemVariants}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Let Connect</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 placeholder-gray-400"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 placeholder-gray-400"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 placeholder-gray-400"
          placeholder="Your Message"
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
  const imageUrl = data?.imageBase64 || "https://via.placeholder.com/395x419";

  return (
    <motion.div
      className={`${nunito.className} min-h-screen bg-gray-50`} // Applying the font here
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {data && !isLoadingSingleBlog && (
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl">
          <div className="flex flex-col lg:grid lg:gap-8 lg:grid-cols-3">
            {/* Sidebar (Left) - Only shown when formPosition is "left" */}
            {formPosition === "left" && (
              <motion.div
                variants={itemVariants}
                className="order-2 lg:order-1 lg:col-span-1"
              >
                <div className="lg:sticky lg:top-24 space-y-6">
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Related Posts
                    </h3>
                    <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-gray-50 pr-2">
                      <RelatedBlogList
                        blogs={blogsData || []}
                        category={data?.category}
                        currentBlogId={id}
                      />
                    </div>
                  </div>
                  {showForm && <ContactForm />}
                </div>
              </motion.div>
            )}

            {/* Main Content */}
            <motion.div
              variants={itemVariants}
              className={`order-1 ${
                formPosition === "left" || formPosition === "right"
                  ? "lg:col-span-2"
                  : "lg:col-span-3"
              }`}
            >
              <div className="mb-8">
                <img
                  src={imageUrl}
                  alt={data.title}
                  width={1200}
                  height={400}
                  className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-xl shadow-md border border-gray-200"
                />
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {data.category}
                  </span>
                  <span className="text-sm text-gray-500">{DateOfcreate}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {data.title}
                </h1>
                <div className="flex items-center gap-3 border-b border-gray-100 pb-6">
                  <img
                    src={data?.authID?.imageBase64}
                    alt={data?.authID?.name}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-purple-100"
                  />
                  <div className="text-gray-600">
                    <p className="font-medium">{data?.authID?.name}</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed mb-10">
                <div dangerouslySetInnerHTML={{ __html: processedContent }} />
              </div>
            </motion.div>

            {/* Sidebar (Right) */}
            {(formPosition === "right" || !formPosition) && (
              <motion.div
                variants={itemVariants}
                className="order-2 lg:order-2 lg:col-span-1"
              >
                <div className="lg:sticky lg:top-24 space-y-6">
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Related Posts
                    </h3>
                    <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-gray-50 pr-2">
                      <RelatedBlogList
                        blogs={blogsData || []}
                        category={data?.category}
                        currentBlogId={id}
                      />
                    </div>
                  </div>
                  {showForm && <ContactForm />}
                </div>
              </motion.div>
            )}

            {/* Mobile-only sidebar */}
            {formPosition !== "left" && formPosition !== "right" && (
              <motion.div variants={itemVariants} className="order-2 lg:hidden">
                <div className="space-y-6">
                  {showForm && <ContactForm />}
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Related Posts
                    </h3>
                    <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-gray-50 pr-2">
                      <RelatedBlogList
                        blogs={blogsData || []}
                        category={data?.category}
                        currentBlogId={id}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
