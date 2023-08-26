import { createSlice } from "@reduxjs/toolkit";

type Counter = {
  count: number;
};
const initialState: Counter = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    addByNumber: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, addByNumber } = counterSlice.actions;
export default counterSlice.reducer;
