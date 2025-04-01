"use client";
import React from "react";
import RelatedBlogCard from "../BlogCategoryCard";
const RelatedBlogs = ({ category, blogs, currentBlogId }) => {
  const filteredBlogs = blogs.filter(
    (blog) => blog.category === category && blog._id !== currentBlogId // Assuming '_id' is the field name
  );

  if (filteredBlogs.length === 0) {
    return null; // Don’t render if no related blogs
  }

  const finalFilterBlog=filteredBlogs?.slice(0,3)
  return (
    <div className="space-y-5">
      <div className="space-y-5 ">
        {finalFilterBlog.map((blog) => (
          <RelatedBlogCard key={blog._id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
