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

export default store;
