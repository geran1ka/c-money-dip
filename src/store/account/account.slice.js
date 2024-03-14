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
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchTransferAmount = createAsyncThunk(
  "transfer/fetchTransfetAmount",
  async (info, { getState, rejectWithValue }) => {
    try {
      const accessToken = getState().auth.accessToken;
      const from = getState().account.account.account;
      const { to, amount } = info;

      if (!accessToken || !from) return;

      const response = await fetch(`${URL_API}/transfer-funds`, {
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
        throw new Error(
          `Не удалось совершить перевод со счета: ${from} на счет ${to}`,
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
  account: {},
  loading: false,
  error: "",
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
        state.account = action.payload.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(fetchTransferAmount.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransferAmount.fulfilled, (state, action) => {
        state.account = action.payload.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTransferAmount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default accountSlice.reducer;
