import { createSlice } from "@reduxjs/toolkit";

const initialItemModalState = {
  show: false,
  id: null,
};

const ItemModalSlice = createSlice({
  name: "itemModal",
  initialState: initialItemModalState,
  reducers: {
    loader(state, action) {
      state.show = true;
      state.id = action.payload.id;
    },
    unloader(state) {
      state.show = false;
      state.id = null;
    },
  },
});

export const ItemModalActions = ItemModalSlice.actions;
export default ItemModalSlice.reducer;
