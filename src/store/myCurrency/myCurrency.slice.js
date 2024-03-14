import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../const/const";

export const fetchMyCurrency = createAsyncThunk(
  "myCurrency/fetchMyCurrency",
  async (_, { getState, rejectWithValue }) => {
    try {
      const accessToken = getState().auth.accessToken;

      const response = await fetch(`${URL_API}/currencies`, {
        method: "GET",
        headers: {
          Authorization: `Basic ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          "Не удалось получить список валютных счетов пользователя",
        );
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
  myCurrency: {},
  loading: false,
  error: "",
};

const myCurrencySlice = createSlice({
  name: "myCurrency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyCurrency.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchMyCurrency.fulfilled, (state, action) => {
        state.myCurrency = action.payload.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchMyCurrency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default myCurrencySlice.reducer;
