// Example
"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const id = searchParams.get("id"); // ✅ Get 'id' from query params
  const [blogId, setBlogId] = useState(null);

  useEffect(() => {
    if (id) {
      setBlogId(id);
    }
  }, [id]);

  const searchParams = useSearchParams();
  return (
    <div>
      <h1>Blog ID: {blogId ? blogId : "No Blog Selected"}</h1>
    </div>
  );
};

export default BlogPage;
