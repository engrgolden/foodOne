import { createSlice } from "@reduxjs/toolkit";

const initialFoodItemsState = {
  isLoaded: false,
  categories: [],
  items: [],
};

const foodItemsSlice = createSlice({
  name: "foodItems",
  initialState: initialFoodItemsState,
  reducers: {
    load(state, action) {
      state.categories = action.payload.categories;
      state.items = action.payload.items;
      state.isLoaded = true;
    },
  },
});

export const getFoodItems = () => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const responseJson = await response.json();
      return responseJson;
    };
    try {
      const data = await sendRequest();
      const items = data.products;
      const categories = Array.from(
        new Set(data.products.map((product: any) => product.category))
      );
      dispatch(foodItemsActions.load({ categories, items }));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const foodItemsActions = foodItemsSlice.actions;
export default foodItemsSlice.reducer;
