import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
  },
  reducers: {
    reducerSetEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { reducerSetEmail } = loginSlice.actions;

export default loginSlice.reducer;
