import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wish: [],
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    setWish: (state, action) => {
      console.log("Redux", action.payload);
      state.wish = action.payload;
    },
    addWish: (state, action) => {
      console.log("Redux", action.payload);
      state.wish.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWish, addWish } = wishSlice.actions;

const wishReducer = wishSlice.reducer;

export default wishReducer;
