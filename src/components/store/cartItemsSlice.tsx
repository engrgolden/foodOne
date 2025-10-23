import { createSlice } from "@reduxjs/toolkit";

const initialCartItemsState = {
  count: 0,
  total: [],
  items: [],
  string: "freshCart",
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: initialCartItemsState,
  reducers: {
    addItem(state: any) {
      state.string = "addeditem";
    },
    removeItem(state: any) {
      state.string = "removed";
    },
  },
});

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
