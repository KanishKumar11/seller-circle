import { getLocalStorage } from "@/utils/Localstoragefunc";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AdminLoginAction = createAsyncThunk(
  "admin/adminLogin",
  async (payload, thunkApi) => {
    try {
      const res = await axios.post("/api/login", payload);
    
      if (res.status) {
        return res.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);
// Admin Register
export const AdminRegisterAction = createAsyncThunk(
  "admin/register",
  async (payload, thunkApi) => {
    const authData = await getLocalStorage("authData");
    try {
      const res = await axios.post("/api/adminReg", payload, {
        headers: {
          Authorization: `Bearer ${authData.token}`, // Replace yourToken with the actual token
        },
      });
      if (res.status) {
        return res.data;
      }
    } catch (error) {
   
      return thunkApi.rejectWithValue(error?.response?.data?.error);
    }
  }
);

const initialState = {
  adminData: [],
  newAdminData: [],
  isLoadingNewAdmin: false,
  isErrorNewAdmin: null,
  isLoadingAdmin: false,
  isErrorAdmin: null,
};

const adminLoginSlice = createSlice({
  name: "admin",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(AdminLoginAction.pending, (state) => {
        state.isLoadingAdmin = true;
      })
      .addCase(AdminLoginAction.fulfilled, (state, action) => {
        state.adminData = action.payload;
        state.isLoadingAdmin = false;
      })
      .addCase(AdminLoginAction.rejected, (state, action) => {
        state.isErrorAdmin = action.payload;
        state.isLoadingAdmin = false;
      })
      .addCase(AdminRegisterAction.pending, (state) => {
        state.isLoadingNewAdmin = true;
      })
      .addCase(AdminRegisterAction.fulfilled, (state, action) => {
        state.newAdminData = action.payload;
        state.isLoadingNewAdmin = false;
      })
      .addCase(AdminRegisterAction.rejected, (state, action) => {
        state.isErrorNewAdmin = action.payload;
        state.isLoadingNewAdmin = false;
      });
  },
});

export const adminLoginReducer = adminLoginSlice.reducer;
