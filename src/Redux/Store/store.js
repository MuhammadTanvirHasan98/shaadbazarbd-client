import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/Cart/cartSlice";
import wishReducer from "../Features/Wishlist/wishSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
  },
});
