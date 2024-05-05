import { configureStore } from "@reduxjs/toolkit";
import Auth from "../frachers/Auth/AuthSlice";
import Theme from "../frachers/Theme/ThemeSlice";

const store = configureStore({
  reducer: { Auth, Theme },
});

export default store;
