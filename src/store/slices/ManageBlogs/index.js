import { createSlice } from "@reduxjs/toolkit";
import api from "../Instance/bookInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

// fetchBooks from the api/read
export const fetchbooks = createAsyncThunk(
  "book/fetchbooks",
  async (_, thunkApi) => {
    try {
      const res = await api.get("/books");
      res.data.reverse();
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      throw thunkApi.rejectWithValue(error?.message);
    }
  }
);

//create book
export const addbook = createAsyncThunk(
  "book/addbook",
  async (data, thunkApi) => {
    try {
      const res = await api.post("/books", data);
      if (res.status === 201) {
        return res.data;
      }
      return null;
    } catch (error) {
      throw thunkApi.rejectWithValue(error?.message);
    }
  }
);

// delete books from teh api
export const deletebooks = createAsyncThunk(
  "book/deletebooks",
  async (id, thunkApi) => {
    try {
      const res = await api.delete(`/books/${id}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      throw thunkApi.rejectWithValue(error?.message);
    }
  }
);

// udate /edit book
export const editbook = createAsyncThunk(
  "book/editbook",
  async ({ id, data }, thunkApi) => {
    try {
  
      const res = await api.put(`/books/${id}`, data);
  
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      throw thunkApi.rejectWithValue(error?.message);
    }
  }
);

// slice of the book
const bookSlice = createSlice({
  name: "books",
  initialState: {
    bookData: [],
    isLoading: true,
    error: "",
  },

  extraReducers(builder) {
    builder
      .addCase(fetchbooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchbooks.fulfilled, (state, action) => {
        (state.bookData = action.payload), (state.isLoading = false);
      })
      .addCase(fetchbooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deletebooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletebooks.fulfilled, (state, action) => {
        state.bookData = state.bookData.filter(
          (book) => book.id !== action.payload.id
        );
        state.isLoading = false;
      })
      .addCase(deletebooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addbook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addbook.fulfilled, (state, action) => {
        state.bookData.unshift(action.payload);
        state.isLoading = false;
      })
      .addCase(addbook.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      })
      .addCase(editbook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editbook.fulfilled, (state, action) => {
        const index = state.bookData?.findIndex(
          (book) => book.id === action.payload.id
        );
        if (index !== -1) {
          state.bookData[index] = action.payload;
        }
        state.isLoading = false;
      })
      .addCase(editbook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const bookReducer = bookSlice.reducer;

// @REFERENC
