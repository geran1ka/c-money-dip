import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import { apiTokenErrorMiddleware } from "./middelware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTokenErrorMiddleware),
});
