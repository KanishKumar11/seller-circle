import axiosInstance from "@/utils/axiosInstance";
import { getLocalStorage } from "@/utils/Localstoragefunc";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBlogsAction = createAsyncThunk(
  "blogs/all",
  async (_, thunkApi) => {
    console.log("enter");
    try {
      const res = await axios.get("/api/blog");
      if (res.status) {
        console.log(res, "res");
        return res.data.data;
      }
    } catch (error) {
      console.log(error, "erroe while getting the data");
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getBlogByIdAction = createAsyncThunk(
  "blog/getBlogById",
  async (payload, thunkApi) => {
    try {
      const res = await axios.get(`/api/blog/${payload}`);
      if (res.status) {
        return res.data;
      }
    } catch (error) {
      console.log(error, "erroe while getting the data");
      return thunkApi.rejectWithValue(error);
    }
  }
);

// get latest blog
export const getLatestBlogAction = createAsyncThunk(
  "blog/getLatest",
  async (_, thunkApi) => {
    try {
      const res = await axios.get("/api/latestBlog");
      if (res.status) {
        return res.data.data;
      }
    } catch (error) {
      console.log(error, "erroe while getting the data");
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getMyBlogsAction = createAsyncThunk(
  "blog/getMyBlogs",
  async (_, thunkApi) => {
    try {
      const authData = await getLocalStorage("authData");
      // console.log("token", authData.token);

      const res = await axios.get("/api/blog") 
      //   {
      //   // headers: {
      //   //   Authorization: `Bearer ${authData.token}`,
      //   // },
      // });

      
      if (res.status === 200) {
        // console.log(res, "res")
        // console.log(res.data?.data, "res.data?.data")
        return res.data?.data;
      }
    } catch (error) {
      console.log(error, "error getting one's blogs");
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchCategoriesAction = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkApi) => {
    try {
      const res = await axios.get("/api/cat");
      if (res.status) {
        return res.data?.data;
      }
    } catch (error) {
      console.log(error, "error while getting the data");
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createCategoryAction = createAsyncThunk(
  "categories/createCategory",
  async (categoryName, thunkApi) => {
    try {
      const authData = await getLocalStorage("authData");
      if (!authData?.token) {
        console.error("No auth token found");
        return thunkApi.rejectWithValue("Authentication required");
      }

      console.log("Attempting to create category:", categoryName);

      const formData = new FormData();
      formData.append("catName", categoryName);
      const res = await axios.post("/api/cat", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authData.token}`,
        },
      });

      console.log("API Response:", res);
      return res.data;
    } catch (error) {
      console.error("API Error:", {
        config: error.config,
        response: error.response,
        message: error.message,
      });
      return thunkApi.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const deleteCategoryAction = createAsyncThunk(
  "categories/deleteCategory",
  async (id, { rejectWithValue }) => {
    try {
      // Make the API call to delete the category
      const response = await axios.delete(`/api/cat/${id}`);

      console.log(response, " response response response response")

     
      // Return the categoryId to update the state in case of success
      return id;
    } catch (error) {
      // In case of error, return a rejected value with the error message
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);



export const addblog = createAsyncThunk(
  "blogs/addblog",
  async (formData, thunkApi) => {
    const authData = await getLocalStorage("authData");
    console.log(authData.token, ...formData);
    try {
      const res = await axios.post(`/api/blog`, formData, {
        headers: {
          Authorization: `Bearer ${authData.token}`, // Replace yourToken with the actual token
        },
      }); // Use the axiosInstance with Bearer token in headers
      if (res.status === 200) {
        console.log(res, "res");
        return res.data;
      }
      return null;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// udate /edit blog
export const editblog = createAsyncThunk(
  "blog/editblog",
  async ({ editId, formData }, thunkApi) => {
    try {
      console.log(editId, formData, "######data for update in slice");
      const res = await axios.put(`/api/blog/${editId}`, formData);
      console.log(res);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.log(error, "error in catch of edit slice 63");
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// delete blog

export const deleteblogs = createAsyncThunk(
  "blog/deleteblogs",
  async (id, thunkApi) => {
    try {
      const res = await axios.delete(`/api/blog?id=${id}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      throw thunkApi.rejectWithValue(error?.message);
    }
  }
);

//delete single blog

export const deleteBlogById = createAsyncThunk(
  "blog/deleteblogById",
  async (payload, thunkApi) => {
    try {
      const res = await axios.delete(`/api/blog/${payload}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      throw thunkApi.rejectWithValue(error?.message);
    }
  }
);

export const UpdateBlogAction = createAsyncThunk(
  "blog/editBlog",
  async ({ editId, formData }, { rejectWithValue }) => {
    try {
      const authData = await getLocalStorage("authData");
      console.log(editId, ...formData);
      console.log(editId, "new edit new edit new edit new edit ");

      const response = await axios.put(`/api/blog/${editId}`, formData, {
        headers: {
          Authorization: `Bearer ${authData.token}`, // Replace yourToken with the actual token
        },
      });
      console.log(response, "response data in update blog");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || "Update failed");
    }
  }
);

const initialState = {
  blogsData: [],
  categories: [],
  singleBlog: [],
  latestBlogData: [],
  myBlogData: [],
  isLoadinglatestBlog: false,
  isErrorlastesBlog: null,
  isLoadingSingleBlog: false,
  isErrorSingleBlog: null,
  lastestBlogs: [],
  isLatestLoading: false,
  isLatestError: null,
  isLoading: false,
  isError: null,
  isLoadingBlog: false,
  status: "idle", // idle, loading, succeeded, failed
  error: null,
};
const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBlogsAction.fulfilled, (state, action) => {
        (state.blogsData = action.payload), (state.isLoading = false);
      })
      .addCase(getAllBlogsAction.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(addblog.pending, (state, action) => {
        state.isLatestLoading = true;
      })
      .addCase(addblog.fulfilled, (state, action) => {
        state.blogsData = action.payload;
        state.lastestBlogs = action.payload;
        state.isLatestLoading = false;
      })
      .addCase(addblog.rejected, (state, action) => {
        state.isLatestError = action.payload;
        state.isLatestLoading = false;
      })
      .addCase(getBlogByIdAction.pending, (state) => {
        state.isLoadingSingleBlog = true;
      })
      .addCase(getBlogByIdAction.fulfilled, (state, action) => {
        state.singleBlog = action.payload;
        state.isLoadingSingleBlog = false;
      })
      .addCase(getBlogByIdAction.rejected, (state, action) => {
        state.isLoadingSingleBlog = false;
        state.isErrorSingleBlog = action.payload;
      })
      .addCase(getLatestBlogAction.pending, (state, action) => {
        state.isLoadinglatestBlog = true;
      })
      .addCase(getLatestBlogAction.fulfilled, (state, action) => {
        state.latestBlogData = action.payload;
        state.isLoadinglatestBlog = false;
      })
      .addCase(getLatestBlogAction.rejected, (state, action) => {
        state.isErrorlastesBlog = action.payload;
        state.isLoadinglatestBlog = false;
      })
      .addCase(getMyBlogsAction.pending, (state, action) => {
        state.isLoadingBlog = true;
      })
      .addCase(getMyBlogsAction.fulfilled, (state, action) => {
        state.myBlogData = action.payload;
        state.isLoadingBlog = false;
      })
      .addCase(getMyBlogsAction.rejected, (state, action) => {
        state.isErrorMyBlog = action.payload;
        state.isLoadingBlog = false;
      });
    builder
      .addCase(fetchCategoriesAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Create category
    builder
      .addCase(createCategoryAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCategoryAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories.push(action.payload);
      })
      .addCase(createCategoryAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Delete category
    builder
      .addCase(deleteCategoryAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCategoryAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = state.categories.filter(
          (category) => category.id !== action.payload
        );
      })
      .addCase(deleteCategoryAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const blogReducer = blogSlice.reducer;
