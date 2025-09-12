import { createSlice } from "@reduxjs/toolkit";
import authApi from "./authApi";
import { SLICE } from "../../../constants/common";

const initialState = {
  userDetail: {},
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: SLICE.AUTH,
  initialState,
  reducers: {
    setUserDetail(state, action) {
      state.userDetail = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.userDetail = action.payload.data;
        state.isLoggedIn = true;
      }
    );
  },
});

export const authSliceAction = authSlice.actions;
export default authSlice;
