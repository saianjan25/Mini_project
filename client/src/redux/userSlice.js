import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import { toast } from "react-hot-toast";

//user login reducer
export const userLogin = createAsyncThunk(
  "/api/auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
const token = localStorage.getItem("token")
const userSlice = createSlice({
  name: "user",
  initialState: {
    token: token,
    isLoading: false,
    posts: [],
    post: {},
    user: {},
  },
  reducers: {
    logoutUser: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success("Login success");
      state.token = payload.token;
      state.user = payload.user;
      localStorage.setItem("token",payload.token)
      console.log(payload)
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.isLoading = false;
      toast.error("Login failed");
    });
  },
});

export default userSlice.reducer;
export const {logoutUser} = userSlice.actions;
