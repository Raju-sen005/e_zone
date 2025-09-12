import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { ENV_MODE } from "../constants/common";

import authSlice from "./services/auth/authSlice";
import authApi from "./services/auth/authApi";
import envConfig from "../config/envConfig";
import userApi from "./services/users/userApi";
import userSlice from "./services/users/userSlice";
import orderApi from "./services/orders/orderApi";
import orderSlice from "./services/orders/orderSlice";
import dashboardApi from "./services/dashboard/dashboardApi";
import dashboardSlice from "./services/dashboard/dashboardSlice";
import enquirySlice from "./services/enquiry/enquirySlice";
import enquiryApi from "./services/enquiry/enquiryApi";
import blogApi from "./services/blogs/blogApi";
import blogSlice from "./services/blogs/blogSlice";
import gallerySlice from "./services/gallery/gallerySlice";
import galleryApi from "./services/gallery/galleryApi";
import productApi from "./services/products/productApi";
import productSlice from "./services/products/productSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
  blacklist: [
    authApi.reducerPath,
    userApi.reducerPath,
    orderApi.reducerPath,
    dashboardApi.reducerPath,
    enquiryApi.reducerPath,
    blogApi.reducerPath,
    galleryApi.reducerPath,
    productApi.reducerPath
  ],
};

const appReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,

  [userSlice.name]: userSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,

  [orderSlice.name]: orderSlice.reducer,
  [orderApi.reducerPath]: orderApi.reducer,

  [dashboardSlice.name]: dashboardSlice.reducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer,

  [enquirySlice.name]: enquirySlice.reducer,
  [enquiryApi.reducerPath]: enquiryApi.reducer,

  [blogSlice.name]: blogSlice.reducer,
  [blogApi.reducerPath]: blogApi.reducer,

  [gallerySlice.name]: gallerySlice.reducer,
  [galleryApi.reducerPath]: galleryApi.reducer,

  [productSlice.name] : productSlice.reducer,
  [productApi.reducerPath] : productApi.reducer
});

const rootReducer = (state, action) => {
  if (action.type === "reset") {
    state = undefined;
  }

  return appReducer(state, action);
};

// persisting the reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

//rtk query middlewares
const middlewares = [
  authApi.middleware,
  userApi.middleware,
  orderApi.middleware,
  dashboardApi.middleware,
  enquiryApi.middleware,
  blogApi.middleware,
  galleryApi.middleware,
  productApi.middleware
];



const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  devTools: envConfig.NODE_ENV !== ENV_MODE.PRODUCTION,
});

const persistor = persistStore(store);

export { store, persistor };
