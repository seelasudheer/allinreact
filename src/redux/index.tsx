import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer, rootReducer } from "./rootReducer";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistedStore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
