import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../const/const";

export const fetchAccount = createAsyncThunk(
  "account/fetchAccount",
  async (accountId, { getState, rejectWithValue }) => {
    try {
      const accessToken = getState().auth.accessToken;
      const response = await fetch(`${URL_API}/account/${accountId}`, {
        method: "GET",
        headers: {
          Authorization: `Basic ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Не удалось получить данные по счету: ${accountId}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }
      console.log("data: ", data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  account: {},
  loading: false,
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        console.log("action: ", action);
        state.account = action.payload.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAccount.rejected, (state, action) => {
        console.log("action: ", action);
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default accountSlice.reducer;
