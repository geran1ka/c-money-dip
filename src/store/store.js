import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import accountsReducer from "./accounts/accounts.slice";
import accountReducer from "./account/account.slice";
import { apiTokenErrorMiddleware } from "./middelware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accounts: accountsReducer,
    account: accountReducer,
  },
});
