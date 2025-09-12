import { createSlice } from "@reduxjs/toolkit";
import { SLICE } from "../../../constants/common";
import orderApi from "./orderApi";

const initialState = {
    orders: [],
};

const orderSlice = createSlice({
    name: SLICE.ORDER,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            orderApi.endpoints.getOrders.matchFulfilled,
            (state, action) => {
                state.orders = action.payload.orders;
            }
        );
    },
});

export const orderSliceAction = orderSlice.actions;
export default orderSlice;
