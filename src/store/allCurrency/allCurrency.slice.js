import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../const/const";

export const fetchAllCurreency = createAsyncThunk(
  "allCurreency/etchAllCurreency",
  async (_, { getState, rejectWithValue }) => {
    try {
      const accessToken = getState().auth.accessToken;

      const response = await fetch(`${URL_API}/all-currencies`, {
        method: "GET",
        headers: {
          Authorization: `Basic ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Не удалось получить список кодов используемых валют");
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
  allCurrency: [],
  loading: false,
  error: "",
};

const currencySlice = createSlice({
  name: "allCurrency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCurreency.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchAllCurreency.fulfilled, (state, action) => {
        state.allCurrency = action.payload.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchAllCurreency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default currencySlice.reducer;
