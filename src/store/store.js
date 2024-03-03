import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import accountsReduser from "./accounts/accounts.slice";
import { apiTokenErrorMiddleware } from "./middelware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accounts: accountsReduser,
  },
});
