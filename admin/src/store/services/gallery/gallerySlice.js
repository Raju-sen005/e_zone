import { createSlice } from "@reduxjs/toolkit";
import { SLICE } from "../../../constants/common";
import galleryApi from "./galleryApi";

const initialState = {
  galleries: [],
  galleryDetail: {},
};

const gallerySlice = createSlice({
  name: SLICE.GALLERY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      galleryApi.endpoints.getGalleries.matchFulfilled,
      (state, action) => {
        state.galleries = action.payload.gallery;
      }
    );
    builder.addMatcher(
      galleryApi.endpoints.getGallery.matchFulfilled,
      (state, action) => {
        state.galleryDetail = action.payload.gallery;
      }
    );
  },
});

export const gallerySliceAction = gallerySlice.actions;
export default gallerySlice;
