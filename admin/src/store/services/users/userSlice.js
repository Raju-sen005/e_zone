import { createSlice } from "@reduxjs/toolkit";
import { SLICE } from "../../../constants/common";
import userApi from "./userApi";

const initialState = {
  users: [],
  userDetail: {},
};

const userSlice = createSlice({
  name: SLICE.USER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getUsers.matchFulfilled,
      (state, action) => {
        state.users = action.payload.users;
      }
    );
    builder.addMatcher(
      userApi.endpoints.getUser.matchFulfilled,
      (state, action) => {
        state.userDetail = action.payload.user;
      }
    );
  },
});

export const userSliceAction = userSlice.actions;
export default userSlice;