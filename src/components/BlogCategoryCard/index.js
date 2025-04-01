"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Heart, MapPin, Star } from "lucide-react";
import { styled } from "@mui/system";

const RelatedBlogCard = ({ post }) => {
  const router = useRouter();
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  const processContent = (htmlContent) => {
    if (!htmlContent) return "";
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const images = doc.getElementsByTagName("img");

    for (const img of images) {
      img.style.height = "auto"; // Changed to auto for better responsiveness
      img.style.maxHeight = "400px"; // Added max-height instead
      img.style.width = "100%";
      img.style.objectFit = "cover";
      img.style.borderRadius = "1.5rem";
      img.style.marginBottom = "2rem";
      img.style.border = "1px solid #f3f4f6";
      img.style.boxShadow = "0 20px 25px -5px rgb(0 0 0 / 0.1)";
    }

    return doc.body.innerHTML;
  };
  const processedContent = processContent(post?.content);
  
  const discript= truncateText(processedContent,20)
  // Add safety check
  if (!post) {
    return (
      <div className="flex items-start p-4 border border-gray-200 rounded-lg shadow-sm bg-white w-full mb-4">
        <p>No post data available</p>
      </div>
    );
  }

  const handleReadPost = () => {
    if (post && post._id) {
      router.push(`/blog?id=${post._id}`);
    } else {
      router.push("/blog");
    }
  };

 

  return (
    <div onClick={handleReadPost} className="flex cursor-pointer border shadow-lg !border-blue-400 items-center p-3 border border-gray-100 rounded-xl shadow-sm bg-white hover:shadow-md transition-all duration-300 w-full mb-4 group">
      {/* Profile Image */}
      <div className="flex-shrink-0 mr-3">
        {post && post.contentType && post.imageBase64 ? (
          <img
            src={post?.imageBase64}
            alt={post.title || "Blog post"}
            width={64}
            height={64}
            className="w-16 h-16 rounded-lg object-cover border border-gray-100 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border border-gray-100">
            <span className="text-gray-400 text-2xl font-medium">?</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 min-w-0">
             {/* Tags */}
             <div className="flex items-center gap-1.5 mt-1 flex-wrap">
              {post.tags && post.tags.length > 0 ? (
                post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full uppercase font-medium"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-xs text-white bg-gradient-to-r from-indigo-500 to-blue-500 px-2 py-0.5 rounded-full uppercase font-medium">
                  {post.category || "General"}
                </span>
              )}
            </div>
            <h2 className="font-semibold text-sm sm:text-base text-gray-900 truncate group-hover:text-indigo-600 transition-colors duration-300">
              {post?.title || "Untitled Post"}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: discript}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogCard;
