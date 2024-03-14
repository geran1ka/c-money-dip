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

export const fetchCurrencyBy = createAsyncThunk(
  "currencyBy/fetchCurrencyBy",
  async (info, { getState, rejectWithValue }) => {
    try {
      const accessToken = getState().auth.accessToken;
      const { from, to, amount } = info;
      console.log("info: ", info);

      if (!accessToken || !from) return;

      const response = await fetch(`${URL_API}/currency-buy`, {
        method: "POST",
        headers: {
          // eslint-disable-next-line quote-props
          Authorization: `Basic ${accessToken}`,
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          from,
          to,
          amount,
        }),
      });

      if (!response.ok) {
        throw new Error(`Не удалось совершить обмен: ${from} на ${to}`);
      }

      const data = await response.json();
      console.log("data: ", data);

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
      })
      .addCase(fetchCurrencyBy.pending, (state) => {
        // state.loading = true;
        state.error = "";
      })
      .addCase(fetchCurrencyBy.fulfilled, (state, action) => {
        state.myCurrency = action.payload.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchCurrencyBy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default myCurrencySlice.reducer;
