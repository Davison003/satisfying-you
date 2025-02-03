import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import surveySlice from "./surveySlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    survey: surveySlice,
  },
});
