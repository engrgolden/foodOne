import { createSlice } from "@reduxjs/toolkit";

const initialFilteredPageState = {
  header: "",
  items: [],
};

const filteredPageSlice = createSlice({
  name: "filteredPage",
  initialState: initialFilteredPageState,
  reducers: {
    change(state: any, action) {
      console.log("hi", action.payload);
      state.header = action.payload.header;
      state.items = JSON.parse(JSON.stringify(action.payload.items));
    },
  },
});

export const filteredPageActions = filteredPageSlice.actions;

export default filteredPageSlice.reducer;
