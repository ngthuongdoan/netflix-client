import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

const reducer = combineReducers({});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV !== "production"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
