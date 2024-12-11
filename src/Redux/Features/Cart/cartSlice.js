import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const isAlreadyAdded = state.cart.some(
        (product) => product._id === action.payload.id
      );
      console.log(isAlreadyAdded);

      state.cart.push({ ...action.payload, quantity: 1 });

      // if (!isAlreadyAdded) {
      //   state.cart.push({ ...action.payload, quantity: 1 });
      // }
    },

    increaseQuantity: (state, action) => {
      console.log(action, "State:", state.cart);
      const index = state.cart.findIndex(
        (product) => product._id === action.payload
      );

      if (index !== -1) {
        state.cart[index].quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product._id === action.payload
      );

      if (index !== -1 && state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
      }
    },

    removeProduct: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product._id === action.payload
      );

      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },

    removeAllProduct: (state) => {
      state.cart.splice(0, state.cart.length);
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
