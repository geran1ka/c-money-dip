import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../const/const";

export const fetchAccessToken = createAsyncThunk(
  "auth/fetchAccessToken",
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL_API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok) {
        throw new Error("Не удалось получить токен доступа!");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null,
    loading: false,
    error: null,
  },
  reducers: {
    removeToken: (state) => {
      state.accessToken = null;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        if (action.payload.payload?.token) {
          state.accessToken = action.payload.payload?.token;
          localStorage.setItem("accessToken", action.payload.payload.token);
        }
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { removeToken } = authSlice.actions;
export default authSlice.reducer;
