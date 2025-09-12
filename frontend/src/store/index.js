// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import orderReducer from './slices/orderSlice';
import productReducer from './slices/productSlice';
import wishlistReducer from './slices/wishlistSlice';
import shippingReducer from './slices/shippingSlice';
import commonReducer from './slices/commonSlice';
import blogReducer from "./slices/blogSlice"
import galleryReducer from "./slices/gallerySlice"

const appReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  wishlist: wishlistReducer,
  shipping: shippingReducer,
  cart: cartReducer,
  order: orderReducer,
  blog: blogReducer,
  common: commonReducer,
  gallery: galleryReducer
});

// Custom root reducer that resets everything
const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
