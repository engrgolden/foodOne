import { configureStore } from "@reduxjs/toolkit";
import foodItemsReducer from "./foodItemsSlice";
import cartItemsReducer from "./cartItemsSlice";

const store = configureStore({
  reducer: {
    foodItems: foodItemsReducer,
    cartItems: cartItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
