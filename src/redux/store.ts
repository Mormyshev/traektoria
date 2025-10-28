import { configureStore } from "@reduxjs/toolkit";
import carsStore from "./slices/carsSlice";

export const store = configureStore({
  reducer: {
    carsStore: carsStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
