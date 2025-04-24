import { getLocalStorage } from "@/utils/Localstoragefunc";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllEditorAction = createAsyncThunk(
  "editor/getAllEditor",
  async (_, thunkApi) => {
    const authData = await getLocalStorage("authData");
    try {
      const res = await axios.get("/api/userReg", {
        headers: {
          Authorization: `Bearer ${authData.token}`, 
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

export const getEditorRegisterAction = createAsyncThunk(
  "editor/getEditorRegister",
  async (payload, thunkApi) => {
    const authData = await getLocalStorage("authData");
    try {
      const res = await axios.post("/api/userReg", payload, {
        headers: {
          Authorization: `Bearer ${authData.token}`, // Replace yourToken with the actual token
        },
      });
      if (res.status) {
        return res.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
// --------------------------Update-----------------------------
export const UpdateEditorAction = createAsyncThunk(
  "editor/updateAdmin",
  async ({ editId, formData }, { rejectWithValue }) => {
    try {
      const authData = await getLocalStorage("authData");
   

      const response = await axios.put(`/api/updateAuth/${editId}`, formData, {
        headers: {
          Authorization: `Bearer ${authData.token}`, // Replace yourToken with the actual token
        },
      });
  
      return response.data;
    } catch (error) {
   
      return rejectWithValue(error.response?.data || "Update failed");
    }
  }
);

// ---------------------------------------DELETE________________________

export const getDeleteEditorAction = createAsyncThunk(
  "editor/getDeleteEditorAction",
  async (payload, thunkApi) => {
    try {
      const res = await axios.delete(`/api/updateAuth/${payload}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
const initialState = {
  editorData: [],
  isLoadingEditor: false,
  isErrorEditor: null,
};

const editor = createSlice({
  name: "editor",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllEditorAction.pending, (state) => {
        state.isLoadingEditor = true;
      })
      .addCase(getAllEditorAction.fulfilled, (state, action) => {
        state.editorData = action.payload;
        state.isLoadingEditor = false;
      })
      .addCase(getAllEditorAction.rejected, (state, action) => {
        state.isErrorEditor = action.payload;
        state.isLoadingEditor = false;
      });
  },
});

export const editorReducer = editor.reducer;
