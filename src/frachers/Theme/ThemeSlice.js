import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const ThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    ThemeMode: (state, action) => {
    //   document.querySelector("html").classList.remove("light", "dark");
      //   document.querySelector("html").classList.add(action.payload);
      document.querySelector("html").classList.toggle("dark");
      state.mode = action.payload;
    },
  },
});

export default ThemeSlice.reducer;

export const { ThemeMode } = ThemeSlice.actions;
