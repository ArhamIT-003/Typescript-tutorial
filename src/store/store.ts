import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counterSlice";
import formSlice from "./formSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    form: formSlice,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
