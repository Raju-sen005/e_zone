import { createSlice } from "@reduxjs/toolkit";
import { SLICE } from "../../../constants/common";
import blogApi from "./blogApi";

const initialState = {
  blogs: [],
  blogDetail: {},
};

const blogSlice = createSlice({
  name: SLICE.BLOG,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      blogApi.endpoints.getblogs.matchFulfilled,
      (state, action) => {
        state.blogs = action.payload.blogs;
      }
    );
    builder.addMatcher(
      blogApi.endpoints.getblog.matchFulfilled,
      (state, action) => {
        console.log("===action.payload=====", action.payload);
        state.blogDetail = action.payload.blog;
      }
    );
  },
});

export const blogSliceAction = blogSlice.actions;
export default blogSlice;
