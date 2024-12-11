import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wish: [],
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, action) => {
      state.wish.push(action.payload);
    },
    removeFromWish: (state, action) => {
      state.wish = state.wish.filter((item) => item._id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWish, removeFromWish } = wishSlice.actions;

const wishReducer = wishSlice.reducer;

export default wishReducer;
