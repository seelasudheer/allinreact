import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProductsList: [],
};

export const productSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addProductsToCart(state, action) {
      state.selectedProductsList = action.payload;
    },
  },
});
