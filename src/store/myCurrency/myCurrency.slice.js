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
  loadingMyCurrency: false,
  errorMyCurrency: "",
  loadingCurrencyBy: false,
  errorCurrencyBy: "",
};

const myCurrencySlice = createSlice({
  name: "myCurrency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyCurrency.pending, (state) => {
        state.loadingMyCurrency = true;
        state.errorMyCurrency = "";
      })
      .addCase(fetchMyCurrency.fulfilled, (state, action) => {
        state.myCurrency = action.payload.payload;
        state.loadingMyCurrency = false;
        state.errorMyCurrency = "";
      })
      .addCase(fetchMyCurrency.rejected, (state, action) => {
        state.loadingMyCurrency = false;
        state.errorMyCurrency = action.payload.message;
      })
      .addCase(fetchCurrencyBy.pending, (state) => {
        // state.loadingCurrencyBy = true;
        state.errorCurrencyBy = "";
      })
      .addCase(fetchCurrencyBy.fulfilled, (state, action) => {
        state.myCurrency = action.payload.payload;
        state.loadingCurrencyBy = false;
        state.errorCurrencyBy = "";
      })
      .addCase(fetchCurrencyBy.rejected, (state, action) => {
        state.loadingCurrencyBy = false;
        state.errorCurrencyBy = action.payload.message;
      });
  },
});

export default myCurrencySlice.reducer;
