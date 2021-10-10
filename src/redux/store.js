import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./missionsSlice";
import searchReducer from "./searchSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
    search: searchReducer,
    filters: filtersReducer,
  },
});
