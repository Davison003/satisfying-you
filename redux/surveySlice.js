import { createSlice } from "@reduxjs/toolkit";

export const surveySlice = createSlice({
  name: "survey",
  initialState: {
    id: "",
    name: "",
    date: "",
  },
  reducers: {
    reducerSetSurvey: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.date = action.payload.date;
    },
  },
});

export const { reducerSetSurvey } = surveySlice.actions;

export default surveySlice.reducer;
