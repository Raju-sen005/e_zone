import { createSlice } from "@reduxjs/toolkit";
import { SLICE } from "../../../constants/common";
import productApi from "./productApi";

const initialState = {
  products: [],
  productDetail : {}
};

const productSlice = createSlice({
  name: SLICE.PRODUCT,
  initialState,
  reducers: {},
extraReducers: (builder) => {
  builder.addMatcher(
    productApi.endpoints.getProducts.matchFulfilled,
    (state, action) => {
      state.products = action.payload.products;
    }
  );

  builder.addMatcher(
    productApi.endpoints.getProduct.matchFulfilled,
    (state, action) => {
      state.productDetail = action.payload.productDetail;
    }
  );
}

});

export const productSliceAction = productSlice.actions;
export default productSlice;
