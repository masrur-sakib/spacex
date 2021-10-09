import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./missionsSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
    search: searchReducer,
  },
});
