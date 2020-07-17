import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    ...initialState,
  },
  reducers: {
    updateQuestions(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const { actions, reducer } = questionsSlice;

const { updateQuestions } = actions;

export { updateQuestions };

export default reducer;
