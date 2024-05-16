import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  states: false,
  Bolgs: [],
};

const BlogSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {
    setBlog: (state, action) => {
      state.states = true;
      state.Bolgs = action.payload;
    },
  },
});

export default BlogSlice.reducer;

export const { setBlog } = BlogSlice.actions;
