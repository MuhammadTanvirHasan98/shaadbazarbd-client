import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const isAlreadyAdded = state.some(
        (product) => product.id === action.payload.id
      );
      console.log(isAlreadyAdded);

      state.push({ ...action.payload, quantity: 1 });

      // if (!isAlreadyAdded) {
      //   state.push({ ...action.payload, quantity: 1 });
      // }
    },

    increaseQuantity: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state[index].quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1 && state[index].quantity > 1) {
        state[index].quantity -= 1;
      }
    },

    removeProduct: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    removeAllProduct: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const {
  addProduct,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  removeAllProduct,
} = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
