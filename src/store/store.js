import { configureStore } from "@reduxjs/toolkit";
import Auth from "../frachers/Auth/AuthSlice";
import Theme from "../frachers/Theme/ThemeSlice";
import Blog from "../frachers/Blog/BlogSlice";

const store = configureStore({
  reducer: { Auth, Theme, Blog },
});

export default store;
