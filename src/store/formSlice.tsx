import { createSlice } from "@reduxjs/toolkit";

interface User {
  email: string;
  name: string;
}

interface formState {
  user: User[];
}

const initialState: formState = {
  user: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export const { addUser } = formSlice.actions;
export default formSlice.reducer;
