import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { productSlice } from "./slices/productsSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

export const rootReducer = combineReducers({ auth: authSlice.reducer, productsDetails: productSlice.reducer });

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
