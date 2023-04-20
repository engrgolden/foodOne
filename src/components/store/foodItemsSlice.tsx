import { createSlice } from "@reduxjs/toolkit";

const initialFoodItemsState = {
  categories: [],
  filteredItems: {},
  items: [],
};

const foodItemsSlice = createSlice({
  name: "foodItems",
  initialState: initialFoodItemsState,
  reducers: {
    load(state, action) {
      state.categories = action.payload.categories;
      state.filteredItems = action.payload.filteredItems;
      state.items = action.payload.items;
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

      const categories = Array.from(
        new Set(data.products.map((product: any) => product.category))
      );

      const filteredItems = {};
      categories.map((category) => {
        filteredItems[category] = [];
      });
      data.products.map((product: any) =>
        filteredItems[product.category].push(product)
      );

      const items = data.products;

      let loadedData = { categories, filteredItems, items };
      dispatch(foodItemsActions.load(loadedData));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const foodItemsActions = foodItemsSlice.actions;
export default foodItemsSlice.reducer;
