import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import accountsReducer from "./accounts/accounts.slice";
import accountReducer from "./account/account.slice";
import allCurrencyReducer from "./allCurrency/allCurrency.slice";
import myCurrencyReducer from "./myCurrency/myCurrency.slice";
import { apiTokenErrorMiddleware } from "./middelware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accounts: accountsReducer,
    account: accountReducer,
    allCurrency: allCurrencyReducer,
    myCurrency: myCurrencyReducer,
  },
});
