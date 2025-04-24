"use client";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import {
  createCategoryAction,
  deleteCategoryAction,
  fetchCategoriesAction,
} from "@/store/slices/BlogSlice";
import {
  useSearchParams,
  // useRouter
} from "next/navigation"; // Import useRouter for navigation

const CategoryForm = () => {
  const dispatch = useDispatch();
  // const router = useRouter(); // Initialize the router function for redirection
  const { categories, status, error } = useSelector((state) => state.blog);
  const { register, handleSubmit, reset, control, watch } = useForm({
    defaultValues: {
      categoryName: "",
      selectedCategoryId: "",
    },
  });

  const searchParams = useSearchParams();
  const selectedCategoryId = watch("selectedCategoryId");
  const editId = searchParams.get("selectedCategoryId");

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const result = await dispatch(fetchCategoriesAction()).unwrap();
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    };
    loadCategories();
  }, [dispatch]);

  const handleCreateCategory = async (data) => {
    try {
      const result = await dispatch(
        createCategoryAction(data.categoryName)
      ).unwrap();
      await dispatch(fetchCategoriesAction());
      reset();
    } catch (err) {
      console.error("Failed to create category:", err);
    }
  };

  const handleDeleteCategory = async () => {
    if (selectedCategoryId) {
      try {
        await dispatch(deleteCategoryAction(selectedCategoryId)).unwrap();
        await dispatch(fetchCategoriesAction());
        reset({ selectedCategoryId: "" });

        // Redirect to a new URL after deletion
        router.push(`/categories/${selectedCategoryId}/deleted`); // Navigate to the URL with category ID
      } catch (err) {
        console.error("Failed to delete category:", err);
      }
    } else {
    }
  };

 

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Category Management
        </Typography>

        {/* Create Category Form */}
        <Box
          component="form"
          onSubmit={handleSubmit(handleCreateCategory)}
          sx={{ mb: 3 }}
        >
          <TextField
            label="Category Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("categoryName", {
              required: "Category Name is required",
            })}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Submitting..." : "Create Category"}
          </Button>
        </Box>

        {/* Delete Category Section */}
        <Typography variant="h6" gutterBottom>
          Delete Category
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-select-label">Category</InputLabel>
          <Controller
            name="selectedCategoryId"
            control={control}
            render={({ field }) => (
              <Select
                labelId="category-select-label"
                value={field.value || ""}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                label="Category"
                inputProps={{ "data-testid": "category-select" }}
              >
                <MenuItem value="">
                  <em>Select a category</em>
                </MenuItem>
                {categories && categories.length > 0 ? (
                  categories.map((category) => (
                    <MenuItem key={category._id} value={category._id}>
                      {category.catName || "Unnamed Category"}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value="" disabled>
                    No categories available
                  </MenuItem>
                )}
              </Select>
            )}
          />
        </FormControl>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleDeleteCategory}
          sx={{ mt: 2 }}
          disabled={status === "loading" || !selectedCategoryId}
        >
          Delete Category
        </Button>
      </Paper>
    </Container>
  );
};

export default CategoryForm;
export { CategoryForm };
