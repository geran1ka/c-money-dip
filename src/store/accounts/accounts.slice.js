import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../const/const";
import { sortArray } from "../../helper/sortArray";

export const fetchAccounts = createAsyncThunk(
  "accounts/fetchAccounts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const accessToken = getState().auth.accessToken;
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

export const fetchCreateAccount = createAsyncThunk(
  "createAccount/fetchCreateAccount",
  async (_, { getState, rejectWithValue }) => {
    try {
      const accessToken = getState().auth.accessToken;

      const response = await fetch(`${URL_API}/create-account`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Не удалось создать новый счет");
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
  accounts: JSON.parse(localStorage.getItem("accounts")) || [],
  loading: false,
  error: "",
  sort: "",
  errorCreateAccount: "",
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    sortAccounts: (state, action) => {
      state.sort = action.payload;
      state.accounts = sortArray(state.accounts, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        console.log("action: ", action);
        if (action.payload.payload) {
          state.accounts = action.payload.payload;
          localStorage.setItem(
            "accounts",
            JSON.stringify(action.payload.payload),
          );
        }

        state.loading = false;
        state.error = "";
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(fetchCreateAccount.pending, (state) => {
        // state.loading = true;
        state.errorCreateAccount = "";
      })
      .addCase(fetchCreateAccount.fulfilled, (state, action) => {
        console.log("action: ", action);
        state.accounts = [...state.accounts, action.payload.payload];
        state.loading = false;
        state.errorCreateAccount = "";
      })
      .addCase(fetchCreateAccount.rejected, (state, action) => {
        console.log("action: ", action);
        state.loading = false;
        state.errorCreateAccount = action.payload.message;
      });
  },
});

export default accountsSlice.reducer;
export const { sortAccounts } = accountsSlice.actions;
