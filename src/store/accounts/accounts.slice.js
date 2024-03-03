import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../const/const";

export const fetchAccounts = createAsyncThunk(
  "accounts/fetchAccounts",
  async (accessToken, { rejectWithValue }) => {
    try {
      // const token = getState().auth.accessToken;
      const response = await fetch(`${URL_API}/accounts`, {
        method: "GET",
        headers: {
          Authorization: `Basic ${accessToken}`,
        },
      });
      console.log("response: ", response);

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
  async (accessToken, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL_API}/create-account`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${accessToken}`,
        },
      });

      console.log("response: ", response);

      if (!response.ok) {
        throw new Error("Не удалось создать новый счет");
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
        state.accounts = action.payload.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(fetchCreateAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCreateAccount.fulfilled, (state, action) => {
        state.accounts = [...state.accounts, action.payload.payload];
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchCreateAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default accountsSlice.reducer;
