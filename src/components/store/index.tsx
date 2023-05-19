import { configureStore } from "@reduxjs/toolkit";
import foodItemsReducer from "./foodItemsSlice";
import cartItemsReducer from "./cartItemsSlice";
import itemModalReducer from "./itemModalSlice";

const store = configureStore({
  reducer: {
    foodItems: foodItemsReducer,
    cartItems: cartItemsReducer,
    itemModal: itemModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
