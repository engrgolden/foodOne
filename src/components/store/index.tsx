import { configureStore } from "@reduxjs/toolkit";
import foodItemsReducer from "./foodItemsSlice";
import cartItemsReducer from "./cartItemsSlice";
import FilteredPageReducer from "./filteredPageSlice";

const store = configureStore({
  reducer: {
    foodItems: foodItemsReducer,
    cartItems: cartItemsReducer,
    filteredPage: FilteredPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
