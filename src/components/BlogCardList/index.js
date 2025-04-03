"use client";
import { BlogCard, BlogCardListSkeleton, Searchbar } from "@/components";
import { fetchCategoriesAction, getAllBlogsAction, getLatestBlogAction } from "@/store/slices/BlogSlice";
import { dummyPosts } from "@/testingData/cardData";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import LatestBlog from "../LastestBlog";
import LatestBlogSkeleton from "../Skeleton/LatestBlogSkeleton";
import Fuse from "fuse.js"; 

const BlogCardList = ({ posts = dummyPosts }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [selectCategory,setselectCategory]=useState("")
  const { blogsData, isLoading, latestBlogData, isLoadinglatestBlog } = useSelector((state) => state.blog);
  const {categories}   = useSelector((state) => state.blog);
  console.log(categories,"ctegoryssss")
  useEffect(() => {
    if (!blogsData || blogsData.length === 0) {
      dispatch(getAllBlogsAction());
      dispatch(fetchCategoriesAction());
    }
    if (!latestBlogData || latestBlogData.length === 0) {
      dispatch(getLatestBlogAction());
    }
  }, [dispatch]); 

  const finalCat=categories?.slice(0,4) ||[]

const handleCategory=(cat)=>{
  setselectCategory(cat)
}
  
// const filterData = useMemo(() => {
//   if (!blogsData) return [];  

//   if (query === "") {
//     return blogsData;
//   }

//   const fuseOptions = {
//     keys: ["title", "content"],
//     threshold: 0.4,
//     includeScore: true,
//   };

//   const fuse = new Fuse(blogsData, fuseOptions);
//   const result = fuse.search(query);

//   return result.map((item) => item.item);
// }, [blogsData, query]);  


const filterData = useMemo(() => {
  if (!blogsData) return [];  

  // If no search query and no category is selected, return all blogs
  if (query === "" && selectCategory === "") {
    return blogsData;
  }

  // First, filter by category if there's a selected category
  let filteredData = blogsData;
  if (selectCategory) {
    console.log(selectCategory,"thisis my selected category")
    filteredData = blogsData.filter((blog) => {
      console.log(blog,"fillter datataatatata")
      return blog.category
      === selectCategory
    });
  }

  // Now, filter the remaining data by the search query using Fuse.js
  if (query !== "") {
    const fuseOptions = {
      keys: ["title", "content"],
      threshold: 0.4,
      includeScore: true,
    };

    const fuse = new Fuse(filteredData, fuseOptions);
    const result = fuse.search(query);
    filteredData = result.map((item) => item.item);
  }

  return filteredData;
}, [blogsData, query, selectCategory]);  


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
        className={"sticky flex border items-center top-0 z-20 px-4 sm:px-6 lg:px-8 py-4 shadow-md transition-all duration-300"}
        style={{ minHeight: "80px" }} 
      >
        {finalCat&&finalCat?.map((catg)=>{
          return(
            <>
            <button onClick={(()=>handleCategory(catg.catName))} className="border rounded-full bg-blue-500 text-white hover:bg-gray-500  border-blue-500 px-3 h-[35px]" key={catg._id}>
            {catg.catName}
            </button>
            </>
          )
        })}
        <div className=" w-full">
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
