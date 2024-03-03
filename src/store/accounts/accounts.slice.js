import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../const/const";

export const fetchAccounts = createAsyncThunk(
  "accounts/fetchAccounts",
  async (accessToken, { getState, rejectWithValue }) => {
    try {
      // const token = getState().auth.accessToken;
      console.log("token: ", accessToken);
      const response = await fetch(`${URL_API}/accounts`, {
        method: "GET",
        headers: {
          Authorization: `Basic ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Не удалось получить данные по счетам");
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

const initialState = {
  accounts: [],
  loading: false,
  error: "",
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        console.log("action: ", action);
        state.accounts = action.payload.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        console.log("action: ", action);
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default accountsSlice.reducer;
