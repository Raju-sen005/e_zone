import { createSlice } from "@reduxjs/toolkit";
import { SLICE } from "../../../constants/common";
import dashboardApi from "./dashboardApi";

const initialState = {
    userCount: 0,
    ordersCount: 0,
    blogsCount: 0,
    enquiryCount: 0
};

const dashboardSlice = createSlice({
    name: SLICE.DASHBOARD,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            dashboardApi.endpoints.dashboardAnalysis.matchFulfilled,
            (state, action) => {
                const { userCount, orderCount, enquiryCount, blogsCount } = action.payload;
                state.userCount = userCount;
                state.ordersCount = orderCount;
                state.blogsCount = blogsCount;
                state.enquiryCount = enquiryCount;
            }
        );
    },
});

export const dashboardSliceAction = dashboardSlice.actions;
export default dashboardSlice;
