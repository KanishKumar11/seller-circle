import axiosInstance from "@/utils/axiosInstance";
import { getLocalStorage } from "@/utils/Localstoragefunc";
import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getAllAdminAction = createAsyncThunk(
  "adminM/getAllAdmin",
  async (_, thunkApi) => {
    const authData = await getLocalStorage("authData");
    try {
      const res = await axios.get("/api/adminReg", {
        headers: {
          Authorization: `Bearer ${authData.token}`, // Replace yourToken with the actual token
        },
      });
      if (res.status) {
        // console.log(res, "resposne of all data");
        return res.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const UpdateAdminAction = createAsyncThunk(
  "admin/updateAdmin",
  async ({ editAdminId, formData }, { rejectWithValue }) => {
    try {
      const authData = await getLocalStorage("authData");

      const response = await axios.put(
        `/api/updateAuth/${editAdminId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authData.token}`, // Replace yourToken with the actual token
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Update failed");
    }
  }
);

// ---------------------------------------DELETE________________________

export const getDeleteAdminAction = createAsyncThunk(
  "adminM/getDeleteAdminAction",
  async (payload, thunkApi) => {
    try {
      const res = await axios.delete(`/api/updateAuth/${payload}`);
      if (res.status) {
        // console.log(res, "resposne of all data");
        return res.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  TotalAdminData: [],
  isLoadingAdmin: false,
  isErrorAdmin: null,
};
const manageAdminSlice = createSlice({
  name: "adminM",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllAdminAction.pending, (state) => {
        state.isLoadingAdmin = true;
      })
      .addCase(getAllAdminAction.fulfilled, (state, action) => {
        state.TotalAdminData = action.payload;
        state.isLoadingAdmin = false;
      })
      .addCase(getAllAdminAction.rejected, (state, action) => {
        state.isErrorAdmin = action.payload;
        state.isLoadingAdmin = false;
      });
  },
});

export const manageAdminReducer = manageAdminSlice.reducer;
