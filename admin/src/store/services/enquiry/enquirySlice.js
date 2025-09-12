import { createSlice } from "@reduxjs/toolkit";
import { SLICE } from "../../../constants/common";
import enquiryApi from "./enquiryApi";

const initialState = {
  enquiries: [],
};

const enquirySlice = createSlice({
  name: SLICE.ENQUIRY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      enquiryApi.endpoints.getEnquiries.matchFulfilled,
      (state, action) => {
        state.enquiries = action.payload.enquiries;
      }
    );
  },
});

export const enquirySliceAction = enquirySlice.actions;
export default enquirySlice;
