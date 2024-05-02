import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../frachers/Auth/AuthSlice";

const store = configureStore({
  reducer: AuthReducer,
});

export default store;
